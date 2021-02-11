#!/usr/bin/env sh
npm run build
git add .
git commit -m '添加复合函数方法'
git push

cd platform
npm run build
cd dist
git init
git add .
git commit -m '更新'
git push

git push -f git@e.coding.net:dilomen/utils/utils.git master