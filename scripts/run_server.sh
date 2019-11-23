#!/bin/sh
set -ex

build_frontend () {
    BASEDIR=$(cd $(dirname $0)/..; pwd)
    cd $BASEDIR/frontend
    npm run build

    rm -rf $BASEDIR/backend/build || true # ignore dir not found error
    mv build $BASEDIR/backend
}

build_frontend
python3 $BASEDIR/backend/app.py --port 8888
