import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { users as userList } from "../../data";
import UserDialog from "../UI/dialog/UserDialog";

const label = { inputProps: { "aria-label": "Swich User State" } };

export const Users = (props) => {
  const theme = useTheme();
  const initialUser = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    image: "",
    city: "",
    state: "",
    education: "",
    status: true,
    role: [
      {
        roleName: "User",
        roleDescription: "User",
      },
    ],
  };
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(userList);
  const [editMode, setEditMode] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialUser);

  const handleSwitchState = (row) => () => {
    console.log(row);
  };

  const handleClose = () => {
    setCurrentUser(initialUser);
    setOpenDialog(false);
  };

  const handleDelete = (row) => () => {
    console.log(row);
  };
  const handleView = (row) => () => {
    setCurrentUser(row);
    setEditMode(false);
    setOpenDialog(true);
  };
  const handleEdit = (row) => () => {
    setCurrentUser(row);
    setEditMode(true);
    setOpenDialog(true);
  };

  const columns = [
    { field: "userName", headerName: "ID", hide: true },
    {
      field: "fullName",
      headerName: "Full name",
      sortable: false,
      width: 160,
      hideable: false,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "email",
      headerName: "Email ID",
      width: 150,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      width: 150,
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
    },
    {
      field: "role",
      headerName: "Role",
      width: 150,
      valueGetter: (params) =>
        `${params.row.role.map((role) => role.roleName)}`,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      valueGetter: (params) =>
        `${params.row.status === true ? "Active" : "Closed"}`,
    },
    {
      field: "action",
      headerName: "Action",
      description: "Disable or Delete",
      sortable: false,
      width: 160,
      renderCell: ({ row }) => {
        return [
          // <Switch {...label} checked onChange={handleSwitchState(row)} />,
          <IconButton key="viewBtn" sx={{ ml: 1 }} onClick={handleView(row)}>
            <VisibilityRoundedIcon color="info" />
          </IconButton>,
          <IconButton key="EditBtn" sx={{ ml: 1 }} onClick={handleEdit(row)}>
            <EditRoundedIcon color="warning" />
          </IconButton>,
          <IconButton
            key="deleteBtn"
            sx={{ ml: 1 }}
            onClick={handleDelete(row)}
          >
            <DeleteRoundedIcon color="error" />
          </IconButton>,
        ];
      },
    },
  ];

  return (
    <Box sx={{ m: 3, width: "auto", height: "auto", flexGrow: 1 }}>
      <Box
        sx={{
          p: 1,
          backgroundColor: theme.palette.background.headingBox,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1em",
            color: theme.palette.common.blue,
          }}
        >
          User List
        </Typography>
      </Box>

      <Box sx={{ mt: 1, height: 400 }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          disableColumnSelector
          initialState={{
            pinnedColumns: { left: ["fullName"] },
          }}
          getRowId={(row) => row.userName}
          components={{
            Toolbar: GridToolbar,
          }}
          componentsProps={{
            toolbar: { showQuickFilter: true },
          }}
          loading={loading}
          rowsPerPageOptions={[5]}
          experimentalFeatures={{ newEditingApi: true }}
          sx={{ overflowX: "scroll" }}
        />
      </Box>
      <UserDialog
        currentUser={currentUser}
        openDialog={openDialog}
        handleClose={handleClose}
        setCurrentUser={setCurrentUser}
        editMode={editMode}
      />
    </Box>
  );
};
