import express from "express";
const app = express();

app.use(express.json());

app.post("/auth/sign-up", (req, res) => {
  console.log()
  res.send("Sign up");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
