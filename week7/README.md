# Task 7
## About The Task
* Write a Docker Compose file to deploy any application with a Database

## Built With
* Docker-compose
* Node.js
* MySQL

## Prerequisites
* Install VirtualBox and Vagrant https://craftedtech.net/post/vagrant-virtualbox-setup/
* Install VirtualBox https://www.virtualbox.org/wiki/Downloads
* Setup Vagrant
* Spin up Ubuntu to setup Ansible Server


## How It Works

#### 1. Prep the Webserver using Ansible
-  On the vagrant machine, SSH is already preconfigured
-  use the following command to execute ansible execution of the YAML script:
  `sudo ansible-playbook prepare_ansible_target.yml -i /etc/ansible/hosts -u vagrant -k --ask-sudo-pass`
- This will prompt you for the password for vagrant, enter the password and this will automatically install python for you, which is needed to do automation. This will also enter your private SSH key into authorized_keys on the target machine, saving you from having to enter creds in the future
  
#### 2. Execute Webserver Playbook for Deployment
- Execute the script from the Ansible Server: 
- `sudo ansible-playbook webserver-setup.yml -u root -i /etc/ansible/hosts`

Now just navigate to the site and it should have your hello world!

## Issues that might be encountered
* make sure your docker file's version is suitable

## References

- Support David Cohen, author of Ansible 2 for Beginners: https://www.udemy.com/ansible-2-for-beginners/
