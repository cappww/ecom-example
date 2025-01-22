# E-commerce Example with Next.js

This project is an example of an e-commerce application built using Next.js. It uses an AWS EC2 instance along with an RDS postgres instance for data storage.

## AWS Stack

The project uses the following AWS resources:

- **VPC**: A Virtual Private Cloud to isolate the network.
- **Subnets**: Public and private subnets for organizing resources.
- **Internet Gateway**: To allow internet access to the VPC.
- **Route Table**: To manage routing within the VPC.
- **RDS Instance**: A PostgreSQL database instance for data storage.
- **EC2 Instance**: A virtual server to host the application.
- **Security Groups**: To control inbound and outbound traffic to the instances.
- **Elastic IP**: To provide a static IP address for the EC2 instance.

## Technologies Used

The application is served using the following technologies:

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Nginx**: A web server used as a reverse proxy to forward requests to the Next.js application.
- **Certbot**: A tool to automatically manage SSL/TLS certificates from Let's Encrypt.
- **PostgreSQL**: A relational database used to store application data.

