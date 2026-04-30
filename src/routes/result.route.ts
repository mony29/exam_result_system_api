import { Router } from "express";
import { studentService } from "../services/student.service.js";

const router = Router();

router.get("/result", (req, res) => {
  const id = req.query.id as string;

  // validate input
  if (!id || typeof id !== "string") {
    return res.status(400).json({
      success: false,
      message: "Invalid ID",
    });
  }

  const student = studentService.findById(id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found",
    });
  }

  return res.json({
    success: true,
    data: student
  });
});

export default router;