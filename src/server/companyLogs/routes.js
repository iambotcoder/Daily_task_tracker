import { Router } from "express";
import {getLogs,getOemsReport,getUsersReport,getUsageLogForGivenInterval} from "./controller.js";

const router = Router();

router.get('/',getLogs);
router.get('/oems/report',getOemsReport);
router.get('/users/report',getUsersReport);
router.get('/intervals',getUsageLogForGivenInterval);

export default router;