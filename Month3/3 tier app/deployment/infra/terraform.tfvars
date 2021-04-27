# Network
region                  = "eu-west-2"
cluster_name            = "sca-prod"
iac_environment_tag     = "prod"
name_prefix             = "sca-prod"
main_network_block      = "10.0.0.0/16"
subnet_prefix_extension = 4
zone_offset             = 8

# EKS
admin_users                              = ["aws-cli-bastion-sca"]
developer_users                          = [""]
asg_instance_type                        = "t3.micro"
autoscaling_minimum_size_by_az           = 1
autoscaling_maximum_size_by_az           = 3