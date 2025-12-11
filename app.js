import express from "express";
const { z } = require("zod");
const app = express();

app.use(express.json());

app.post("/auth/sign-up", (req, res) => {
  if (req.body.firstName.length <= 2)
    return res
      .status(400)
      .json({ message: "First name must be longer than 2 characters" });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
