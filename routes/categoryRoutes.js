import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/authMiddleware.js";
import {createCategoryController } from "./../controllers/categoryController.js";
import { categoryController, deleteCategoryCOntroller, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
  );

//getAll category
router.get("/get-category", categoryController);

// single category
router.get('/single-category/:slug', singleCategoryController)

//delete category
router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryCOntroller
  );

export default router;