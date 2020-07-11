# GuessGame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Docker

[![dockerhub-badge](https://img.shields.io/badge/images%20on-Docker%20Hub-blue.svg)](https://hub.docker.com/r/ashusharma/guess-game)

This project has been deployed to Docker Hub using [DockerFile](Dockerfile).

Pull the latest image of this game run:

`docker pull ashusharma/guess-game:latest`

## Kubernetes Deployment


Deploy to your Kubernetes cluster:

`kubectl create -f https://raw.githubusercontent.com/ashusharmatech/guess-number/master/kubernetes-deployment.yaml`

And setup an service to expose your guess-number server.
```
|-----------|--------------|-------------|-----------------------------|
| NAMESPACE |     NAME     | TARGET PORT |             URL             |
|-----------|--------------|-------------|-----------------------------|
| default   | game-service |          80 | http://xx.xx.xx.xx:30080 |
|-----------|--------------|-------------|-----------------------------|
```


##

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
