# Use the official PostgreSQL image from the Docker Hub
FROM postgres:latest

# Set environment variables for PostgreSQL
ENV POSTGRES_USER=capp
ENV POSTGRES_PASSWORD=password123
ENV POSTGRES_DB=postgres

# Copy the seed.sql file to the Docker container
COPY seed.sql /docker-entrypoint-initdb.d/

# Expose the default PostgreSQL port
EXPOSE 5432