# sca-cloud-school
#### About The Task
* Create 3 groups and 15 users
* Assign the 15 users across the 3 groups
* Demonstrate that user(s) in a group cannot access files/folders that belong to another group unless they are added to that group

#### Built With
* vagrant
* virtual box
* cmder

#### Prerequisites
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

I have three groups (group1, group2 and group3).

 * The group1 group has the users user1-5.
 * The group2 group has the users user5-10 And
 * The group3 group has the users user 10-15

First of all root user have full access to everything in the system, so you don't have to do anything to allow him the see anything.
By breaking up the users into different groups, they wouldn't be able to view each other's files if the permissions were set accordingly

#### issues that might be encountered
In using vagrant and virtual box, you might have to enable the vt-x configuration

Project Link: https://github.com/serikiayodele/task1
