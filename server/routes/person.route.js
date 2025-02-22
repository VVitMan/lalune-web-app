import express from "express"
import { createPerson, getAllPersons } from "../controllers/person.controller.js"

const router = express.Router();

router.post("/persons", createPerson);
router.get("/persons", getAllPersons);

export default router;