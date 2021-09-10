#!/bin/sh
yarn

pwd=$(pwd)
npmrc=$(cat ~/.npmrc| base64)

export REPO=registry.gmdp.io/glonassmobile/mvne/platform

cd ./build/client

export DOCKER_TAG=$REPO/client:latest
docker build --build-arg NPMRC=$npmrc -t $DOCKER_TAG .
docker push $DOCKER_TAG

cd $pwd

cd ./build/server

export DOCKER_TAG=$REPO/server:latest
docker build --build-arg NPMRC=$npmrc -t $DOCKER_TAG .
docker push $DOCKER_TAG

cd $pwd

#./deploy.sh latest dev
