# sca-cloud-school
## About The Task
* Create 3 groups and 15 users
* Assign the 15 users across the 3 groups
* Demonstrate that user(s) in a group cannot access files/folders that belong to another group unless they are added to that group

## Built With
* vagrant
* virtual box
* cmder

## Prerequisites
* install virtuabox
#Installation
 * https://virtualbox.com
 * install vagrant
#Installation
 * https://vagrant.com
 * download the cmder zip package and extract to your system

## Test this project

#### 1. Command to create users

`sudo useradd username 
//it should look something like this
vagrant@vagrant-ubuntu-trusty-64:~$ sudo useradd mia`

#### 2. Command to create groups

`groupadd -g group-ID group-name
//it should look something like this
vagrant@vagrant-ubuntu-trusty-64:~$ sudo groupadd -g group1 `

#### 3. Adding users to the group
`sudo usermod -a -G [groupname] [username]`

#### 4 Demonstrate that user(s) in a group cannot access files/folders that belong to another group unless they are added to that group

First of all root user have full access to everything in the system, so you don't have to do anything to allow him the see anything.
By breaking up the users into different groups, they wouldn't be able to view each other's files if the permissions were set accordingly

* I have three groups (group1, group2 and group3).

 * The group1 group has the users user1-5.
 * The group2 group has the users user5-10 And
 * The group3 group has the users user 10-15

* I then create three text files group1.txt, group2.txt and group3.txt and assign them to the groups respectifully

* `sudo chgrp group1 group1.txt` 
* `sudo chgrp group2 group2.txt`
* `sudo chgrp group3 group3.txt`\

 I run the following command to see the permissions

`ll` \
//output
* `-rw-rw-r-- 1 vagrant group1 15 feb 6 09:58 group1.txt`
* `-rw-rw-r-- 1 vagrant group2 12 feb 6 10:00 group2.txt`
* `-rw-rw-r-- 1 vagrant group3 0 feb 6 09:55 group3.txt`

* we can login using a user command, when a user from group1 tries to access data in group 2, he get's an error message telling him to ask for permission



## Issues that might be encountered
In using vagrant and virtual box, you might have to enable the vt-x configuration on your local computer


