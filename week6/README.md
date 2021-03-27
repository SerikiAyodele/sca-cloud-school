# Task 6
## About The Task
* Create a VPC with private and public subnet
* Create instances (servers) in each subnet
* Try connecting to each server from the browser and see which goes through

## Prerequisites
* AWS account
* A little knowledge on cloud networking

## How It Works
1. I created a new VPC with CIDR 10.200.0.0/16
2. I created Internet Gateway (IGW) and Associate with VPC
3. I created a Public subnet 10.200.0.0/24. Enable auto assign public ip.
4. I created a Private subnet 10.200.1.0/24.
5. I created 2 security groups. For Public EC2 allow SSH from my ip. 6. For Private EC2, i allow SSH and, ICMP IPv4 All traffic from VPC CIDR 10.200.0.0/16
7. With previously created ssh key, I launched an EC2 instance (A) in Public Subnet. Instance should have Public IP and Private IP.
8. I launched other EC2 instance (B) in private subnet. Instance should have only Private IP.
9.  I connected to EC2-A over Public IP using SSH from your machine
10. I connected to EC2-B over Private IP using SSH from your machine. (You can not)
11. I pinged EC2-B from EC2-A and SSH EC2-B from EC2-A (you should be able to)


## Issues that might be encountered
* If any, go through aws's guide, it's usually something they have solutions to

## Additional Materials
I shared what i understand personally about cloud networking, it's non-techie, so it should be easy to understand.
https://serikiayodele.medium.com/networking-in-the-cloud-aws-38686d9dd93c



