
import express from "express";
import { signUp } from "../controllers/auth/register";
import { login } from "../controllers/auth/login";


const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);

export default router