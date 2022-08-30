import React, { useState } from "react";
import { useTheme } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import {
  Button,
  CardActions,
  Grid,
  FormHelperText,
  MenuItem,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Formik } from "formik";
import DialogTitle from "@mui/material/DialogTitle";

const ExamCategory = (props) => {
  const theme = useTheme();
  const [categories, setCategories] = useState([
    { id: 1, title: "SSC" },
    {
      id: 2,
      title: "UPSC",
    },
    { id: 3, title: "RBI" },
    {
      id: 4,
      title: "RRB",
    },
    {
      id: 5,
      title: "NEET",
    },
  ]);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleSubmit = (values) => {
    const items = [...categories];
    items.push({ id: "6", title: values.category });
    console.log(items);
    alert(JSON.stringify(values, null, 2));
  };

  const editCategoryHandler = (category) => () => {
    const items = [...categories];
    items.forEach((element) => {
      if (element.id === category.id) {
        element.title = "Updated";
      }
    });
    setCategories(items);
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
        // backgroundColor: "primary.dark",
        // "&:hover": {
        //   backgroundColor: "primary.main",
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        direction="row"
      >
        <Grid item>
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            <Grid item>
              <Typography sx={{ ...theme.typography.h5 }}>
                Exam Category
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                placeholder="Search here..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                size="small"
              />
            </Grid>
          </Grid>
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

      <Box sx={{ m: 1 }}>
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
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
                    Word of the Day
                  </Typography>
                  <Typography
                    sx={{ ...theme.typography.cardTitle, marginBottom: "1em" }}
                    component="div"
                  >
                    {category.title}
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
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

      <Dialog open={openDialog} onClose={handleClose} fullWidth>
        <DialogTitle>Add Category</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ category: "", premium: "0" }}
            validate={(values) => {
              const errors = {};
              if (!values.category) {
                errors.category = "Required";
              } else if (
                !/^[A-Za-z]{3,15}([\w ]{1}[0-9]{2})?$/i.test(values.category)
              ) {
                errors.category =
                  "Name must minimun atleast 3 character long (can be added number 2 character long). ex. EXAM 12";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              //save data here
              const items = [...categories];
              items.push({ id: "6", title: values.category });
              setCategories(items);
              handleClose(false);
              //   setTimeout(() => {
              //     setSubmitting(false);
              //     handleClose();
              //   }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form noValidate onSubmit={handleSubmit} sx={{ marginTop: 1 }}>
                <TextField
                  fullWidth
                  error={Boolean(touched.category && errors.category)}
                  variant="outlined"
                  id="category-name"
                  type="category"
                  value={values.category}
                  name="category"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Category Name"
                  inputProps={{}}
                  sx={{ m: 1 }}
                />
                {touched.category && errors.category && (
                  <FormHelperText
                    sx={{ m: 1 }}
                    error
                    id="helper-text-category-name"
                  >
                    {errors.category}
                  </FormHelperText>
                )}

                <TextField
                  fullWidth
                  error={Boolean(touched.premium && errors.premium)}
                  variant="outlined"
                  id="premium-id"
                  type="premium"
                  value={values.premium}
                  name="premium"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Select Premium"
                  inputProps={{}}
                  select
                  sx={{ m: 1 }}
                >
                  <MenuItem sx={{ m: 1 }} key="0" value="0">
                    Free
                  </MenuItem>
                  <MenuItem sx={{ m: 1 }} key="1" value="1">
                    Premium
                  </MenuItem>
                </TextField>
                {touched.premium && errors.premium && (
                  <FormHelperText
                    sx={{ m: 1 }}
                    error
                    id="helper-text-premium-id"
                  >
                    {errors.premium}
                  </FormHelperText>
                )}

                <Grid
                  container
                  justifyContent="space-between"
                  sx={{ marginTop: 1 }}
                >
                  <Grid item>
                    <Button variant="text" onClick={handleClose}>
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      disabled={isSubmitting}
                      type="submit"
                      disableElevation
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ExamCategory;
