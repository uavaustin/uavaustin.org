#/bin/bash

#####################################################################
#
# Generates a 404.html file that'll redirect correctly if the
# gh-pages site is searched by its CNAME
#
#####################################################################

BASEDIR=$(dirname "$0")

TEMPLATE_PATH=$BASEDIR"/404.html.erb"
BUILD_DIR=$(realpath $BASEDIR"/../build/")
DESTINATION_PATH=$BUILD_DIR"/404.html"
CNAME_PATH=$(realpath $BASEDIR"/../CNAME")

mkdir -p $BUILD_DIR

if [ -f "$CNAME_PATH" ]; then
    export CNAME=$(cat $CNAME_PATH)
fi

erb -T 1 $TEMPLATE_PATH > $DESTINATION_PATH
