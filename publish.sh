#!/bin/bash
echo "Publishing to git"
pwd
git add *
git commit -m "Publish $1"
git push

echo "if you want bump npm and npm publish"
