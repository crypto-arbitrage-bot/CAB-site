#!/bin/sh
cd frontend
npm run build
cd ..
git subtree push --prefix frontend/dist origin gh-pages