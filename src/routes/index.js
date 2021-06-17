import { Router } from "express";
import userRouter from "../api/users/routes/user.routes";

const router = Router();


router.use("/user", userRouter);

router.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la api-mongo!" });
});

export default router;
