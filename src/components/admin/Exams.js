import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

import { useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { exams, tags, educatorCodes } from "../../data";
import AddExamDialog from "../UI/dialog/AddExamDialog";
import ECodeDialog from "../UI/dialog/ECodeDialog";
import TagDialog from "../UI/dialog/TagDialog";

const label = { inputProps: { "aria-label": "Swich User State" } };

export const Exams = (props) => {
  const initialExam = {
    examId: "",
    created: "",
    updated: "",
    examDescription: "",
    examDuration: "",
    examStartDate: "",
    examEndDate: "",
    examTitle: "",
    isNegativeAllowed: 0,
    isPaid: 0,
    totalMark: "",
    tags: [],
    code: {},
    questionCount: "",
  };
  const theme = useTheme();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [currentExam, setCurrentExam] = useState(initialExam);
  const [examRows, setExamRows] = useState(exams);
  let navigate = useNavigate();

  const [openCodeDialog, setOpenCodeDialog] = useState(false);

  const handleCodeDialog = () => {
    setOpenCodeDialog(!openCodeDialog);
  };

  const [openTagDialog, setOpenTagDialog] = useState(false);

  const handleTagDialog = () => {
    setOpenTagDialog(!openTagDialog);
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setCurrentExam(initialExam);
    setOpenDialog(false);
  };

  const handleDelete = (row) => () => {
    console.log(row);
  };

  const columns = [
    { field: "examId", headerName: "ID", hide: true, hideable: false },
    {
      field: "examTitle",
      headerName: "Name",
      hideable: false,
      flex: 1,
    },
    {
      field: "examDuration",
      headerName: "Duration",
      type: "number",
      flex: 1,
    },
    {
      field: "tags",
      headerName: "Tags",
      valueGetter: (params) => `${params.row.tags.map((tag) => tag.name)}`,
      flex: 1,
    },
    {
      field: "isPaid",
      headerName: "Type",
      valueGetter: (params) => `${params.row.isPaid !== 0 ? "Paid" : "Free"}`,
      flex: 1,
    },

    {
      field: "created",
      headerName: "Create At",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      description: "Disable or  Delete",
      sortable: false,
      flex: 1,
      renderCell: ({ row }) => {
        return [
          <Tooltip title="View">
            <IconButton
              sx={{ ml: 1 }}
              component={Link}
              to={{
                pathname: `/admin/exam/${row.examTitle}/${row.examId}`,
                state: { fromExamsPage: true },
              }}
            >
              <VisibilityIcon color="info" />
            </IconButton>
          </Tooltip>,
          <Tooltip title="Edit">
            <IconButton
              sx={{ ml: 1 }}
              onClick={(event) => {
                setCurrentExam(row);
                handleClickOpen();
              }}
            >
              <EditIcon color="warning" />
            </IconButton>
          </Tooltip>,
          <Tooltip title="Add Delete">
            <IconButton sx={{ ml: 1 }} onClick={handleDelete(row)}>
              <DeleteIcon color="error" />
            </IconButton>
          </Tooltip>,
        ];
      },
    },
  ];

  return (
    <>
      <Box
        sx={{
          m: 3,
          width: "auto",
          height: "auto",
        }}
      >
        <Box sx={{ backgroundColor: theme.palette.background.headingBox }}>
          <Grid
            container
            justifyContent="space-between"
            sx={{ p: 1, marginBottom: 3 }}
          >
            <Grid item>
              <Typography sx={{ ...theme.typography.h5 }}>Exam List</Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={handleCodeDialog}
                startIcon={<AddIcon />}
                size="small"
                sx={{ ml: 1 }}
              >
                Exam Code
              </Button>
              <Button
                variant="contained"
                onClick={handleTagDialog}
                startIcon={<AddIcon />}
                size="small"
                sx={{ ml: 1 }}
              >
                Tags
              </Button>
              <Button
                variant="contained"
                onClick={handleClickOpen}
                startIcon={<AddIcon />}
                size="small"
                sx={{ ml: 1 }}
              >
                Add Exam
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ height: 400 }}>
          <DataGrid
            rows={examRows}
            columns={columns}
            pageSize={5}
            disableColumnSelector
            components={{
              Toolbar: GridToolbar,
            }}
            componentsProps={{
              toolbar: { showQuickFilter: true },
            }}
            loading={loading}
            rowsPerPageOptions={[5]}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </Box>
      {/* Exam Dialog */}
      <AddExamDialog
        currentExam={currentExam}
        tags={tags}
        educatorCodes={educatorCodes}
        openDialog={openDialog}
        handleClose={handleClose}
      />
      {/* Exam Code Dialog */}
      <ECodeDialog openECode={openCodeDialog} handleECode={handleCodeDialog} />
      {/* Tag Dialog */}
      <TagDialog openTag={openTagDialog} handleTag={handleTagDialog} />
    </>
  );
};
