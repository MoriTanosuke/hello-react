FROM node:onbuild
EXPOSE 8080

RUN	npm install -g supervisor
