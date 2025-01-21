**Connect to EC2**

```
ssh ec2-user@<ip> -i <pem file>
```

**Install Postgres CLI**

```
sudo yum update -y
sudo yum install postgresql15 -y
```

**Connect to DB**

```
psql -h <db endpoint> -p 5432 -U capp -d postgres
```
