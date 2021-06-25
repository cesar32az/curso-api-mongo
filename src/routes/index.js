import { Router } from "express";
import userRouter from "../api/users/routes/user.routes";
import authRouter from "../api/auth/routes/auth.routes";
const router = Router();

router.use("/auth", authRouter).use("/user", userRouter);

router.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la api-mongo!" });
});

export default router;
