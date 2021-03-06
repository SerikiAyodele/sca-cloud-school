# Task 3
## About The Task
* Write a Docker Compose file to deploy any application with a Database

## Built With
* Docker-compose
* Node.js
* MySQL

## Prerequisites
* install Docker
* Installation
* https://docker.hub


## How It Works

#### 1. I wrote my Node.js code
* It connects to the database and execute an SELECT SQL query and finally returns the values of the ITEM_NAME field from table MOE_ITEM_T
 
 #### 2. Build the Dockerfile
* We get our docker image from a docker file, after creating my dockerfile, with the command below i built my docker image

`sudo docker build . -t name/nodejs-mysql-app `

#### 3. Build The Docker Compose File
* I created a file named docker-compose.yml
* 
* In the node-js service, we are creating the container for our Node.js application's docker image.

* mysql service is spinning up the container from Docker standard MySQL database image mysql:5.7

#### 4 Docker Compose Run
`sudo docker-compose up --build`

* The above command will spin up three containers. One for Node.js application. 2nd one is of MySQL and the third one for PHPMyAdmin.
* Now  I can access the PHPMyAdmin application from browser through URL http://localhost:30002/
* I used the username and password used in mysql service to login.


#### 5 Access my Node.js application
* Since the Node.js application is also running up from the above docker-compose up command, access the application in browser using URL http://localhost:30001/

* You see the output from the application on browser as :

`TEST-ITEM-1 : TEST-ITEM-2 :`


## Issues that might be encountered
* make sure your docker file's version is suitable



