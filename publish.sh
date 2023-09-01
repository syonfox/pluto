#!/bin/bash
echo "Publishing to git"
pwd
git add *
git commit -m "Publish"
git push

echo "if you want bump npm and npm publish"
