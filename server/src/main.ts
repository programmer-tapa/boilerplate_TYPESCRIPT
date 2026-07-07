import express from "express";
import { ServerController } from "./entrypoints/api/ServerController";
import { CalculatorController } from "./entrypoints/api/CalculatorController";
import { DebuggerMiddleware } from "./middlewares/DebuggerMiddleware";
import { RouteErrorHandlerMiddleware } from "./middlewares/RouteErrorHandlerMiddleware";

const app = express();
const port = process.env.PORT || 8000;

// Body parser
app.use(express.json());

// Middlewares (applied to all requests)
app.use(DebuggerMiddleware);

// Instantiated controllers
const serverController = new ServerController();
const calculatorController = new CalculatorController();

// Route mappings
app.get("/hello", serverController.sayHello);
app.post("/calculator/add", calculatorController.add);
app.post("/calculator/divide", calculatorController.divide);

// Error Handler Middleware (placed after routes)
app.use(RouteErrorHandlerMiddleware);

app.listen(port, () => {
    console.log(`Server starting on port ${port}...`);
});
