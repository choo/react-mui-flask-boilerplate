#!/bin/sh
set -e

BASEDIR=$(cd $(dirname $0); pwd)
cd $BASEDIR/frontend
npm run build

rm -rf $BASEDIR/backend/build
mv build $BASEDIR/backend

echo "build frontend modules successfully done"

python3 $BASEDIR/backend/app.py
