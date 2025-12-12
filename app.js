import express from "express";
import { z } from "zod";
const app = express();

app.use(express.json());

app.post("/auth/sign-up", (req, res) => {
  const userCreateschema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.email(),
    password: z.string().min(8),
  });
  const { success, data, error } = userCreateschema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({ error: "Invalid Data." });
  }
  res.json({ user: data });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
