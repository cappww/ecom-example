## AWS RDS
**Launch Stack**

```
aws cloudformation create-stack \
  --stack-name ecom-stack \
  --template-body file://aws.yml
```

**Connect to EC2**

```
ssh ec2-user@<ip> -i <pem file>
```

**Install Tools**

```
sudo yum update -y
sudo yum install postgresql15 -y
sudo yum install nginx -y
sudo yum install certbot -y
sudo yum install python3-certbot-nginx -y
```

**Certbot**


**Connect to DB**

```
psql -h <db endpoint> -p 5432 -U capp -d postgres
```

**Seed Data from File**

```
psql -h <db endpoint> -p 5432 -U capp -d postgres -f ./seed.sql

```

---

## Docker
**Make Docker Image with Seeded Data**

```
docker build -t postgres-db .
```

**Run Docker Container**

```
docker run -d --name postgres-instance -p 5432:5432 postgres-db
```