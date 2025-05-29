import { Router } from "express";
import { getAddressByUserId, aggAddress, getAllAddreses} from "../controllers/addressController";
import { validateToken } from "../middlewares/validateToken";

const router = Router();

router.get("/", validateToken, async (req, res) => {
    getAllAddreses(req, res);
})

router.get("/me", validateToken,(req, res) => {
    getAddressByUserId(req, res);
})

router.post("/add", validateToken,(req, res) => {
    aggAddress(req, res);
})

export default router;