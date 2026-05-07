import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
    res.json({
        message: "API funcionando correctamente",
    });
});

export default router;