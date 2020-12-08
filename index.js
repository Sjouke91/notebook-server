const express = require("express");
const app = express();

const loggerMiddleWare = require("morgan");
app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

const authMiddleWare = require("./auth/middleware");

const authRouter = require("./routers/auth");
app.use("/", authRouter);

const notebooksRouter = require("./routers/notebooks");
app.use("/notebooks", notebooksRouter);

const subjectsRouter = require("./routers/subjects");
app.use("/subjects", subjectsRouter);

// Listen for connections on specified port (default is port 4000)
const { PORT } = require("./config/constants");

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
