import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import IconButton from "@mui/material/IconButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

const label = { inputProps: { "aria-label": "Swich User State" } };

export const Users = (props) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  const handleSwitchState = (row) => () => {
    console.log(row);
  };

  const handleDelete = (row) => () => {
    console.log(row);
  };

  const columns = [
    { field: "id", headerName: "ID", hide: true },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      hideable: false,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "fullName",
      headerName: "Full name",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "action",
      headerName: "Action",
      description: "Disable or  Delete",
      sortable: false,
      width: 160,
      renderCell: ({ row }) => {
        return [
          // <Switch {...label} checked onChange={handleSwitchState(row)} />,
          <IconButton sx={{ ml: 1 }} onClick={handleDelete(row)}>
            <VisibilityRoundedIcon color="info" />
          </IconButton>,
          <IconButton sx={{ ml: 1 }} onClick={handleDelete(row)}>
            <EditRoundedIcon color="warning" />
          </IconButton>,
          <IconButton sx={{ ml: 1 }} onClick={handleDelete(row)}>
            <DeleteRoundedIcon color="error" />
          </IconButton>,
        ];
      },
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
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
          rows={rows}
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
          sx={{ overflowX: "scroll" }}
        />
      </Box>
    </Box>
  );
};
