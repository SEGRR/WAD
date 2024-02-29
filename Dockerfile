# Use the official PHP with Apache image as the base image
FROM php:7.4-apache

# Copy your PHP application files into the container
COPY . /var/www/html/

# Expose port 80 to allow outside access to your container
EXPOSE 80


