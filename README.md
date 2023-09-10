# Transaction MS for UnCoin

## Description

This is a microservice for UnCoin. It is responsible for handling transactions between users.
Including:

- P2P transactions
- Charge account with a sandbox paypal account
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
    ├── database
    │   └── database.ts
    └── transaction
        ├── application
        │   └── transactionUseCase.ts
        ├── domain
        │   ├── transaction.entity.ts
        │   ├── transaction.repository.ts
        │   └── transaction.value.ts
        └── infrastructure
            ├── controller
            │   └── transaction.ctrl.ts
            ├── model
            │   └── transaction.model.ts
            ├── repository
            │   └── sequelize.repository.ts
            ├── services
            │   └── paypal.gateway.ts
            └── route
                └── transaction.route.ts
```

## How to run

1. Clone the repository
2. Run `docker compose up`
3. The server will be running on port specified by environment variable `PORT` or 4000 by default
4. Enjoy!

### Environment variables

- **PORT** = 4000 (Port where the server will be running)
- **DB_HOST** = db (Host of the database)
- **DB_PASSWORD** = password (Password of the database)
- **PAYPAL_CLIENT_ID** = (Client id of the paypal account)
- **PAYPAL_CLIENT_SECRET** = (Client secret of the paypal account)

## Endpoints

### `GET /transactions` - Get all transactions

### `GET /transactions/list/:id` - List transactions of an user

### `GET /transactions/detail/:id` - Get details of a specific transaction

### `POST /p2p` - Create a new transaction between users

body:

```
{
    "senderId": 1,
    "receiverId": 2,
    "amount": 100
}
```

A p2p transaction will result in the next transaction:
| id | amount | description | receiverId | senderId | type | status |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 100 | P2P transaction | 2 | 1 | p2p | completed |

### `POST /create-order` - Charge a user account with a sandbox paypal account

body:

```
{
    "userId": 1,
    "amount": 100
}
```

When the order is created, the user will be redirected to the paypal sandbox page to complete the payment. After that, the user will be redirected to an html page with a success message.

Transactions are created with the following values in the charge account process:
| id | amount | description | receiverId | senderId | type | status |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 100 | Charge account (null allowed) | 1 | **paypal** | **charge** | **pending** |

After the payment is completed in the sandbox page, the transaction is updated with the following values:
| id | amount | description | receiverId | senderId | type | status |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 100 | Charge account (null allowed) | 1 | paypal | charge | **completed** |

In case of cancelation, the transaction is updated with the following values:
| id | amount | description | receiverId | senderId | type | status |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 100 | Charge account (null allowed) | 1 | paypal | charge | **canceled** |
