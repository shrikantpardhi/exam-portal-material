import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import ExamCategoryForm from "../forms/ExamCategoryForm";

const ExamcategoryDialog = (props) => {
  const {
    children,
    currentCategory,
    openDialog,
    handleClose,
    categories,
    setCategories
  } = props;

  const theme = useTheme();
  return (
    <Dialog open={openDialog} onClose={handleClose} fullWidth>
      <DialogTitle>
        <Typography
          sx={{
            ...theme.typography.h5,
            fontSize: "1.25rem",
            textAlign: "center",
          }}
        >
          {currentCategory.id !== 0 ? "Edit Category" : "Add Category"}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <ExamCategoryForm
          currentCategory={currentCategory}
          handleClose={handleClose}
          categories={categories}
          setCategories={setCategories}
        />
      </DialogContent>
    </Dialog>
  );
};

ExamcategoryDialog.propTypes = {
  children: PropTypes.node,
  currentCategory: PropTypes.object.isRequired,
  openDialog: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
};

export default ExamcategoryDialog;
