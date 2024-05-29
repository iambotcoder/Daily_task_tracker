import { Router } from "express";
import {getStudents, getStudentsById,addStudent,removeStudent} from "./controller.js";

const router = Router();

router.get('/',getStudents);
router.get('/:id',getStudentsById);
router.post('/',addStudent);
router.delete('/:id',removeStudent  )

export default router;