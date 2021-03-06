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
*  3 projects were created, the first is proxy, second /django and the third /nest
*  The proxy, is the nginx proxy whixch contains code that helps nginx communicate with the other applications. that is, it will enable the hosting of the two other projects.
*  We will need a network that the containerized web servers can use to communicate to the reverse nginx-proxy. On the host service,i created a Docker network called nginx-proxy using the command.
*  
`docker network create nginx-proxy`

* In the proxy folder i created a docker-compose.yml file and define two services: nginx-proxy and letsencrypt-proxy

