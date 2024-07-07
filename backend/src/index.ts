// src/index.ts
import express from "express";
import router from "./prisma/routes/basicDetails";

const app = express();
app.use(express.json());

app.use("/basic-details", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
