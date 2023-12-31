# Financial Tracking RESTful API Website

## Introduction

Welcome to the Financial Tracking RESTful API website.

## RESTful Principles

The Financial Tracking API adheres to the principles of RESTful design to ensure a standardized and user-friendly experience:

1. **Resources**: The API treats financial entities such as transactions and accounts as resources, each accessible through a unique endpoint.

2. **HTTP Methods**: HTTP methods such as GET, POST, PUT, PATCH, and DELETE are employed to interact with these resources.

3. **Representation**: Data is exchanged in JSON format, allowing for structured and easy-to-parse information.

## Endpoints and Examples

[Copy me on postman](https://agile-hare-veil.cyclic.app)

### HTTP Methods

**Get all transaction**

```http
GET | https://agile-hare-veil.cyclic.app/financials
```

**Get by ID**

```http
GET | https://agile-hare-veil.cyclic.app/financials/:id
```

**Post data**

```http
POST | https://agile-hare-veil.cyclic.app/financials
```

**Put data**

```http
PUT | https://agile-hare-veil.cyclic.app/financials/:id
```

**Patch data**

```http
PATCH | https://agile-hare-veil.cyclic.app/financials/:id
```

**Delete data**

```http
DELETE | https://agile-hare-veil.cyclic.app/financials/:id
```