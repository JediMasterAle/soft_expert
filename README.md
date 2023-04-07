# Technical Project

## Overview

There are 2 projects within this repository, one for the frontend and another for the backend. This project has been deployed and is available on the website
https://softexpertengenh1.websiteseguro.com/

## Backend

### Configuration and Startup

Insert the database backup, which is located in the root of the repository, into your PostgreSQL. Rename the .env_copy file to .env within the backend folder and configure it according to your database.

Open the terminal at the root of the repository and execute the following commands to start the backend:

```bashs
cd backend
composer install
php -S localhost:8000
```

## Frontend

The frontend was developed using Quasar JS, a framework created in 2016 based on Vue JS and which follows the most current versions of Vue. This framework was used because it has components with an attractive visual design and easy customization.

### Configuration and Startup

Make sure that Quasar is installed on your computer. If you encounter any difficulties, please refer to the framework's documentation, as shown in the link below for the Quasar CLI installation.
https://quasar.dev/start/quasar-cli

Once Quasar is installed, execute the following command to start the server. By default, it starts at localhost:8080:

```bash
quasar dev
```

### Build the app for production

```bash
quasar build
```

## Running unit tests

With the Frontend and Backend operating on ports 8080 and 8000, respectively, open the terminal in the root folder and execute the following commands:

```bashs
cd backend
./vendor/bin/pest tests/Unit
```
