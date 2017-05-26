#!/bin/sh

docker run -it --name web -p 3000:9000 -v $(pwd):/var/www gestor_encuestas_web
