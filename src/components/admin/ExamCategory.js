import React, { useState } from "react";
import { useTheme } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActions,
  Grid,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import IconButton from "@mui/material/IconButton";
import { categories as ccategories } from "../../data";
import ExamcategoryDialog from "../UI/dialog/ExamcategoryDialog";

const ExamCategory = (props) => {
  const emptyCategory = {
    id: 0,
    title: "",
    premium: false,
    totalCount: 0,
  };
  const theme = useTheme();
  const [categories, setCategories] = useState(ccategories);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [currentCategory, setCurrentCategory] = useState(emptyCategory);

  const handleClickOpen = () => {
    setCurrentCategory(emptyCategory);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const editCategoryHandler = (category) => () => {
    setCurrentCategory(category);
    setOpenDialog(true);
  };

  const deleteCategoryHandler = (category) => () => {
    setCategories((items) => items.filter((item) => item.id !== category.id));
  };

  return (
    <Box
      sx={{
        m: 3,
        width: "auto",
        height: "auto",
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          p: 1,
          backgroundColor: theme.palette.background.headingBox,
        }}
      >
        <Grid container justifyContent="space-between" direction="row">
          <Grid item>
            <Typography sx={{ ...theme.typography.h5 }}>
              Exam Category
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              startIcon={<AddIcon />}
              size="small"
            >
              Add Category
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ m: 1 }}>
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs sm={6} md={4} lg={3} key={category.id}>
              <Card
                variant="outlined"
                sx={{
                  minWidth: 275,
                  textAlign: "center",
                  borderColor: "orange",
                  borderWidth: 1,
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {category.premium === false ? "Free" : "Paid"}
                  </Typography>
                  <Typography
                    sx={{ ...theme.typography.cardTitle, marginBottom: "1em" }}
                    component="div"
                  >
                    {category.title}
                  </Typography>
                  <Typography variant="body2">
                    Total exams : {category.totalCount}
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container justifyContent="flex-end" spacing={2}>
                    <Grid item>
                      <IconButton
                        size="small"
                        onClick={editCategoryHandler(category)}
                      >
                        <EditRoundedIcon color="warning" />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton
                        size="small"
                        onClick={deleteCategoryHandler(category)}
                      >
                        <DeleteRoundedIcon color="error" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <ExamcategoryDialog
        currentCategory={currentCategory}
        openDialog={openDialog}
        handleClose={handleClose}
        categories={categories}
        setCategories={setCategories}
      />

    </Box>
  );
};

export default ExamCategory;
