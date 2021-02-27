# Task 4
## About The Task
* Using Docker-Compose, configure and deploy an nginx application that routes to two applications running also in docker application.
Specifications: Using nginx location directive,
* /django -> should route to  app1 
* /nest -> should route to app2

* Example Nginx Docker Deployment: https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/05-nginx-express-redis-nodemon


## Built With
* Docker
* Nginx

## Prerequisites
* Linux based server with docker installed
* install nginx
* bash scripting knowledge(just to make things easier)

## Test this project

* Pull the project code to the host server, change into the proxy directory and run:

`docker-compose up -d`

*Make sure that both services are running by executing:

`docker-compose ps`


## How It Works
* We will create three projects: Nginx-proxy, django, nestjs. The first will implement nginx-proxy and docker-letsencrypt-nginx-proxy-companion. The latter two will be WordPress blogs. The proxy will enable the hosting of the two WordPress blogs and will provision them with Let’s Encrypt certificates. For simplicity, we will pack all the projects in the same repository, but in a real world scenario they can be completely independent repositories. The repository folder structure will be this:

`
├── repository_root
│ ├── proxy
│ │ ├──docker-compose.yml
│ ├── site1
│ │ ├──docker-compose.yml
│ ├── site2
│ │ ├──docker-compose.yml`

* We will need a network that the containerized web servers can use to communicate to the reverse proxy. On the host service, create a Docker network called nginx-proxy:
`docker network create nginx-proxy`

* In the proxy folder we create a docker-compose.yml file and define two services: nginx-proxy and letsencrypt-proxy.

