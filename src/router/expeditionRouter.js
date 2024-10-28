import { Router } from "express";
import {
    store,
} from '../controllers/expeditionController.js';

const router = Router();

router.post('/',store);

export default router;