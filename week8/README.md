# Task 8
## About The Task
* Deploy a PHP application on kubernetes (using Deployment, services, configmaps)

## Built With
* PHP
* Kubernetes
* Digital Ocean

## Prerequisites
* A basic understanding of Kubernetes objects
* A Kubernetes cluster running on Ubuntu 18.04.
* A DigitalOcean account and an API access token with read and write permissions to create our storage volume
* Your PHP application


## How It Works

#### 1. Creating the PHP-FPM and Nginx Services
- I create a directory to hold my Kubernetes object definitions, then SSH into my master node and created the definitions directory that will hold my kubernetes object definitions
`mkdir definitions
 cd definitions`
 
 - I created my PHP-FPM service by creating a php_service.yaml file
  `nano php_service.yaml`
  
 - I created my service
 `kubectl apply -f php_service.yaml`
 verifired it is running using
 `kubectl get svc`
 
-I created my nginx service file
`nano nginx_service.yaml`
then the nginx service
`kubectl apply -f nginx_service.yaml`
-what i basically did was  create services that allows access to a set of pods from within the cluster. Services within a cluster can communicate directly through their names, without the need for IP addresses. The PHP-FPM service will allow access to the PHP-FPM pods, while the Nginx service will allow access to the Nginx pods.

  
#### 2. Installing the DigitalOcean Plugin
- I configured a Kubernetes Secret object to store my DigitalOcean API token. Secret objects are used to share sensitive information, like SSH keys and passwords, with other Kubernetes objects within the same namespace. Namespaces provide a way to logically separate your Kubernetes objects.

you can find a full documentation of the process on digital ocean's tutorial guide

#### 3. Creating the persistent volume
- A Persistent Volume is accessed by using a PersistentVolumeClaim, or PVC, which mounts the PV at the required path

#### 4. Creating a PHP-FPM Deployment
- I created a simple PHP program which i would deploy
- To create your Deployment, i created a new file called php_deployment.yaml with my editor:
 `nano php_deployment.yaml`
- then i created the PHP=FPM deployment with Kubectl
 `kubectl apply -f php_deployment.yaml`
- To view my deployment i ran the following code
 `kubectl get deployments`

#### 5. Creating the Nginx Deployment
- I used use a ConfigMap to configure Nginx. A ConfigMap holds my configuration in a key-value format that i can reference in other Kubernetes object definitions. This approach will grant me the flexibility to reuse the image with a different Nginx version if needed. Updating the ConfigMap will automatically replicate the changes to any pod mounting it.

## Issues that might be encountered
* make sure your docker file's version is suitable
* you might have to install minikube for your services

## References

- How To Deploy a PHP Application with Kubernetes on Ubuntu 18.04 By Amitabh Dhiwal

