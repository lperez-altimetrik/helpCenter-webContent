# Help Center - Strapi

Welcome to Help Center.
This repository contains the following:

- Strapi project with existing Content-types and data (`/api`)
- Angular client ready to fetch the content of the Strapi application (`/client`)

## Get started

You can get started with this project locally on your machine by following the instructions below.

## Prerequisites

Before installing Strapi, the following requirements must be installed on your computer:

Node.js: Only Active LTS or Maintenance LTS versions are supported (currently v18 and v20). Odd-number releases of Node, known as "current" versions of Node.js, are not supported (e.g. v19, v21).

Your preferred Node.js package manager:
  npm (v6 and above)
  yarn

Python (if using a SQLite database)

## 1. Start Strapi

Navigate to your `./my-projects/helpCenter-project/api` folder by running `cd api` from your command line.

- Run the following command in your `./helpCenter-project/api` folder:

```
npm run develop || yarn develop
```

This will install the dependencies, fill your application with data and run your server. You can run these commands separately.

#### Credentials

- Super Admin:
  - email: lperez@altimetrik.com
  - password: 6uv3@ZtqyCBnisC

## 3. Start Angular

Navigate to your `./my-projects/helpCenter-project/client` folder by running `cd client` from your command line.

- Run the following command in your `./helpCenter-project/client` folder

```
yarn && yarn dev
```

This will install the dependencies, and run your server. You can run these commands separately.


