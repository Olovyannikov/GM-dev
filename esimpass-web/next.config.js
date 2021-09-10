module.exports = {
    reactStrictMode: true,
    sassOptions: {
        prependData: `
        @import "./src/client/resources/styles/general/variables.scss";
        @import "./src/client/resources/styles/general/mixins.scss";
        `,
        _indentWidth: 4
    }
}
