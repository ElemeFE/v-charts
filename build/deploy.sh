#! /bin/sh

if [ -n "$GITHUB_TOKEN" ]; then
  npm run build
  mkdir web
  cd web
  git init
  cp -r ../dist/* ./
  git add .
  git -c user.name='travis' -c user.email='travis' commit -m "`date +%c` deploy by Travis"
  git push -f -q https://vue-echarts:$GITHUB_TOKEN@github.com/vue-echarts/vue-echarts.github.io master
fi
