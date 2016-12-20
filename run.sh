#!/bin/sh
docker build -t hello-world-react .
docker run --rm -it -v $(pwd):/usr/src/app -w /usr/src/app -p 8080:3000 hello-world-react
