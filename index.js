const express = require("express");
const app = express();
const port = 8000;

const router = require("./app/routes/index.route");

// app.get('/', (req, res)=> {
//     res.send("Hello world");
// });

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log ("Backend server is runing on port " + port);
});