const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(routes);

db.once("connected", () => {
    app.listen(PORT, () => {
        console.log(`Connected to server on http://localhost:${PORT} `);
    });
});
