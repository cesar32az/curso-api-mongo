import { Router } from "express";
import { checkDuplicateUser } from "../../../middlewares/verifyRegister";
import { register, login } from "../controllers/auth.controller";

const router = Router();

router.post("/register", checkDuplicateUser, register).post("/login", login);

export default router;
