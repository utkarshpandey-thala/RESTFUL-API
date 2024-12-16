# Node.js API for Product Management

This is a simple RESTful API built with Express and MongoDB for managing products.

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Error Handling](#error-handling)
- [Future Improvements](#future-improvements)

## Project Overview

This project provides a basic API for managing products including functionalities like creating, reading, updating, and deleting products. It uses Express for routing and Mongoose for MongoDB data modeling.

## Technology Stack

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Web application framework for Node.js.
- **Mongoose**: ODM library for MongoDB.
- **MongoDB**: NoSQL database for storing product data.

## Features

- CRUD operations for managing products:
  - Create (`POST /api/products`)
  - Read all products (`GET /api/products`)
  - Read a single product by ID (`GET /api/products/:id`)
  - Update a product (`PUT /api/products/:id`)
  - Delete a product (`DELETE /api/products/:id`)

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance running.


