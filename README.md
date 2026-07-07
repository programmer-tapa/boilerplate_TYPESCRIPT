# TypeScript Boilerplate Monorepo

This monorepo template contains a TypeScript project structured with a Vertical Slice Architecture, mirroring the Java, Python, and PHP boilerplates.

## Structure

*   `domain`: Core business logic, schemas, and usecases.
*   `server`: Express API exposing endpoints.
*   `worker`: Standalone execution script.

## Getting Started

1. Install dependencies and link packages:
   ```bash
   npm install
   ```
2. Build all packages:
   ```bash
   npm run build
   ```
3. Run Express server:
   ```bash
   npm run dev:server
   ```
4. Run worker script:
   ```bash
   npm run start:worker
   ```

## 🧪 API Verification & Testing

Here are some sample `curl` requests to verify and test the calculator endpoints:

### 1. Valid Addition Endpoint
- **Request:**
  ```bash
  curl -i -X POST -H "Content-Type: application/json" -d '{"a": 2, "b": 3}' http://127.0.0.1:8000/calculator/add
  ```
- **Result:** Successfully returned `200 OK` with:
  ```json
  {"data":{"result":5},"message":null,"errorCode":null,"status":"success"}
  ```

### 2. Negative Number Validation
- **Request:**
  ```bash
  curl -i -X POST -H "Content-Type: application/json" -d '{"a": -2, "b": 3}' http://127.0.0.1:8000/calculator/add
  ```
- **Result:** Properly returned `400 Bad Request` with:
  ```json
  {"message":"Number cannot be negative: -2","errorCode":"400","status":"error"}
  ```

### 3. Division By Zero Validation
- **Request:**
  ```bash
  curl -i -X POST -H "Content-Type: application/json" -d '{"a": 10.0, "b": 0.0}' http://127.0.0.1:8000/calculator/divide
  ```
- **Result:** Properly returned `400 Bad Request` with:
  ```json
  {"message":"Division by zero is not allowed","errorCode":"400","status":"error"}
  ```

