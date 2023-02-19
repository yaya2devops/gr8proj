#!/bin/bash


# build and deploy a React project to GitHub Pages

git add build && git commit -m "Auto Deploy"
git subtree push --prefix build origin gh-pages
git reset HEAD~1 --soft
