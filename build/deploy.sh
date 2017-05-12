#! /bin/sh

if [ -n "$GITHUB_TOKEN" ]; then
  npm run build
  git clone https://$GITHUB_TOKEN@github.com/vue-echarts/vue-echarts.github.io web
  cd web
  rm -rf *
  cp -r ../dist/* ./
  git add -A
  git -c user.name='vue-echarts' -c user.email='vue@daxigua.me' commit -m "`date +%c` deploy by Travis"
  git push origin master
fi
