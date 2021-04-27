# Use Ubuntu base image
FROM ubuntu:20.10
RUN apt update && apt upgrade -y

# Install packages
RUN apt install -y apt-transport-https gnupg2 curl
RUN curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
RUN echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | tee -a /etc/apt/sources.list.d/kubernetes.list
RUN apt update
ENV DEBIAN_FRONTEND=noninteractive
RUN apt install -y awscli kubectl openssh-server git