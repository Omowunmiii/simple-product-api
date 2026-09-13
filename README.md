# simple-product-api

A simple RESTful API for managing products, built with Express.js and in-memory storage (no database required).

## Features

- Create a new product
- Get all products
- Get a single product by ID
- Update a product
- Delete a product

## Tech Stack

- Node.js
- Express.js

## Getting Started

### Prerequisites
- Node.js installed on your machine

### Installation

```bash
git clone <your-repo-url>
cd myProduct
npm install
```

### Running the server

```bash
node src/server.js
```

The server will start on `http://localhost:3000`.

## API Endpoints

| Method | Endpoint         | Description              | Body                          |
|--------|------------------|---------------------------|--------------------------------|
| POST   | /products        | Create a new product      | `{ "name": string, "price": number }` |
| GET    | /products        | Get all products           | —                              |
| GET    | /products/:id    | Get a single product by ID | —                              |
| PUT    | /products/:id    | Update a product           | `{ "name"?: string, "price"?: number }` |
| DELETE | /products/:id    | Delete a product           | —                              |

## Example Usage

**Create a product**
```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Eraser","price":50}'
```

**Get all products**
```bash
curl http://localhost:3000/products
```

**Get a product by ID**
```bash
curl http://localhost:3000/products/1
```

**Update a product**
```bash
curl -X PUT http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{"price":250}'
```

**Delete a product**
```bash
curl -X DELETE http://localhost:3000/products/1
```

## Notes

- Data is stored in memory and resets whenever the server restarts.
- Seed data includes two products (Pen, Notebook) on startup.
