const gulp = require('gulp');
const {src, dest, series, parallel} = require('gulp');
const svgSprite = require('gulp-svg-sprite');

const gulpClean = require('gulp-clean');

const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync("package.json"));

const generateGrpcApi = require ('@glonassmobile/codebase/generator/grpc/generateApi').generate;

const clean = () => gulp.src([
    './build',
    'src/client/generated'

], {read: false,allowEmpty : true}).pipe(gulpClean());

const svgSprites = () => {
    return src(["src/client/resources/img/svg/**.svg"])
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg" //sprite file name
                }
            },
        }))
        .pipe(dest(["src/client/resources/img/sprite/"]));
}

const createDirs = (cb) => {
    fs.mkdirSync('build', {recursive: true})
    fs.mkdirSync('src/client/generated', {recursive: true})

    cb ()
}

const generateClientApi = cb => generateGrpcApi (cb, './src/proto.proto', './src/client/generated', true);

const copyDockerToBuild = () => gulp.src("src/docker/*").pipe(gulp.dest('build'));

const generatePackageJson = (cb) => {

    fs.writeFileSync("build/package.json", JSON.stringify({
        name: packageJson.name,
        version: packageJson.version,
        dependencies : packageJson.devDependencies
    }, null, 4))

    fs.copyFileSync ("./yarn.lock", "./build/yarn.lock")

    cb ()
};

exports.default = series(
    svgSprites,
    createDirs,
    clean,
    createDirs,
    parallel (
        copyDockerToBuild,
        generateClientApi,
        generatePackageJson
    )
)
