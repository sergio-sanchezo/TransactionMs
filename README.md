# Transaction MS for UnCoin

## Description

This is a microservice for UnCoin. It is responsible for handling transactions between users.
Including:

- P2P transactions
- Charge account with a sandbox credit card
- Get history of transactions

This is a REST API using hexagonal architecture with the following technologies:.

- nodejs
- express
- typescript
- postgresSQL
- sequelize
- docker

## Project Structure

```bash
.
├── package.json
├── Dockerfile
├── docker-compose.yml
├── .env.example
└── src
    ├── main.ts
    ├── config.ts
    ├── application
    │   └── transactionUseCase.ts
    ├── domain
    │   ├── transaction.entity.ts
    │   ├── transaction.repository.ts
    │   └── transaction.value.ts
    └── infrastructure
        ├── controller
        │   └── transaction.ctrl.ts
        ├── database
        │   └── database.ts
        ├── model
        │   └── transaction.model.ts
        ├── repository
        │   └── sequelize.repository.ts
        └── route
           └── transaction.reporouteitory.ts
```

## How to run

1. Clone the repository
2. Run `npm install`
3. Start database using docker `docker compose up -d`
4. Run `npm run dev`
5. The server will be running on port specified by environment variable `PORT` or 4000 by default
