import { Router } from "express";

const router = Router();

router.get("/videos", (req, res) => {
  const videos = [
    "https://www.youtube.com/watch?v=WlAHtyx4pgI",
    "https://www.youtube.com/watch?v=KnRKCf2Iuj4",
    "https://www.youtube.com/watch?v=FUE6shAF1SM",
  ];
  res.json(videos);
});

export default router;
