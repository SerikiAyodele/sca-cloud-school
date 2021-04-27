module "mongodb" {
  source            = "everest-engineering/mongodb-ec2/aws"
  vpc_id            = module.vpc.vpc_id
  subnet_id         = element(module.vpc.private_subnets, 0)
  ssh_user          = "ubuntu"
  instance_type     = "t3.micro"
  ami_filter_name   = "ubuntu/images/hvm-ssd/ubuntu-bionic-18.04-amd64-server-*"
  ami_owners        = ["099720109477"]
  mongodb_version   = "4.2"
  replicaset_name   = "mongo-rp0"
  replica_count     = 1
  private_key       = file("./id_rsa")
  public_key        = file("./id_rsa.pub")
  bastion_host      = "10.0.138.170"
  tags = {
    name            = "MongoDB Server"
    iac_environment = var.iac_environment_tag
  }
}