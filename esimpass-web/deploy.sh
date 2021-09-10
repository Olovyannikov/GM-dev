#!/bin/bash

export KUBECONFIG=./../../../../devops/infra/selectel/stand.gmdp.io/rke/kube_config_cluster.yml

./../../../../devops/infra/bin/helm upgrade -i web \
    --set reload=$(date -u +%Y-%m-%d_%H:%M:%S) \
    --set version=$1 \
    --set dns=esimpass-dev.stand.gmdp.io \
    -n esimpass-$2 \
    ./src/helm

