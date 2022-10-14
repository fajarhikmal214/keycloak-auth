# Keycloak Auth

## Quick Start

Clone the project:

```bash
$ git clone https://github.com/fajarhikmal214/keycloak-auth
$ cd keycloak-auth
```

Duplicate Every Environment Files :
```bash
$ cd keycloak-auth && cp .env.example .env && cd ../
$ cd sidebar-api && cp .env.example .env && cd ../
$ cd sumedang-app && cp .env.example .env
```
## Setup Keyloack
- Run Keycloak
```bash
$ cd keycloak-auth
$ docker-compose up --build -d
```
- Setup Keycloak
```bash
$ Resource Not Found :(
```

## How to Run
- Installing Dependencies And Run Server (sidebar-api)
```bash
$ cd sidebar-api
$ npm install

$ cd sidebar-api
$ ts-node index.ts
```

- Installing Dependencies And Run Client (sumedang-app)
```bash
$ cd sumedang-app
$ npm install

$ cd sumedang-app
$ ts-node index.ts
```
