#! /bin/bash

bundle install
yarn install
jspm install
npm config set bin-links false
npm rebuild node-sass

gulp export

