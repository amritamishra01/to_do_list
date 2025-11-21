const router = require("express").Router();
const auth = require("../middleware/auth");
const Task = require("../models/Task");

// Protect all routes
router.use(auth);

// CREATE
router.post("/", async (req, res) => {
  try {
    const { title, description, status } = req.body;
    if (!title) return res.status(400).json({ error: "Title required" });

    const task = await Task.create({
      user: req.user._id,
      title,
      description,
      status
    });

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// READ LIST (with search)
router.get("/", async (req, res) => {
  try {
    const { q, status } = req.query;

    const filter = { user: req.user._id };
    if (status) filter.status = status;
    if (q) filter.title = { $regex: q, $options: "i" };

    const tasks = await Task.find(filter).sort("-createdAt");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updates = req.body;

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      updates,
      { new: true }
    );

    if (!task) return res.status(404).json({ error: "Task not found" });

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!task) return res.status(404).json({ error: "Task not found" });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
