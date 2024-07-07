// src/routes/basicDetails.ts
import { Router } from "express";
import { createBasicDetails } from "../../controllers/basicDetailsController";
import validateBasicDetails from "../../middlewares/basicDetailsMiddleware";
import validateBasicDetailsUpdate from "../../middlewares/basicDetailsUpdateValidator";
import { updateBasicDetails } from "../../controllers/basicDetailsUpdateController";

const router = Router();

router.post("/", validateBasicDetails, createBasicDetails);
router.put("/:email", validateBasicDetailsUpdate, updateBasicDetails);

export default router;
