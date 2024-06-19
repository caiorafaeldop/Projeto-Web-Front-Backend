import { Router } from "express";

const router = Router();

router.get("/env", (req, res) => {
  res.json({
    VITE_API_URL: `http://localhost:${process.env.PORT}`,
  });
});

export default router;
