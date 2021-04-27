provider "aws" {
  version = "~> 2.70.0"
}

provider "random" {
  version = "~> 3.0.0"
}

data "aws_caller_identity" "current" {} # used for accesing Account ID and ARN