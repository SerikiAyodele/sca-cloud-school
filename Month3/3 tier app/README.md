[![CircleCI](https://circleci.com/gh/SerikiAyodele/SCA-month3.svg?style=svg)](https://circleci.com/gh/SerikiAyodele/SCA-month3)

## About this project
It is a basic chat application. The backend is built using Node and the frontend is a simple vanilla web application. MongoDB is used as a database to store chats.

The infrastructure is set up using Terraform scripts, CircleCI is used for build automation and the images are pushed to Docker Hub, then deployed to a Kubernetes cluster.

## Test the live project (would be taken down after some time)
http://aa15391aa16c740eda68217fb4264d0c-1068143883.eu-west-2.elb.amazonaws.com/

## Docker images
- https://hub.docker.com/repository/docker/seriki/sca-chat-frontend
- https://hub.docker.com/repository/docker/seriki/sca-chat-backend

## Run locally
```
cd docker/main
docker-compose -f docker-compose.yaml up
```

Then visit `localhost:8000`.

To use the local backend, change `host` to `http://localhost:8080` in `frontend/src/static/main.js`.
