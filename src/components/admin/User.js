import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import {
  DataGrid,
  GridToolbar,
  
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import IconButton from "@mui/material/IconButton";

const label = { inputProps: { "aria-label": "Swich User State" } };

export const User = (props) => {
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
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      flex: 1,
    },
    {
      field: "fullName",
      headerName: "Full name",
      sortable: false,
      width: 160,
      flex: 1,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "action",
      headerName: "Action",
      description: "Disable or  Delete",
      sortable: false,
      width: 160,
      flex: 1,
      renderCell: ({ row }) => {
        return [
          <Switch {...label} checked onChange={handleSwitchState(row)} />,
          <IconButton sx={{ ml: 1 }} onClick={handleDelete(row)}>
            <DeleteIcon />
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
    <Box sx={{ margin: "1em" }}>
      <Typography
        sx={{
          margin: "1em",
          fontWeight: 700,
          fontSize: "1em",
          color: theme.palette.common.blue,
        }}
      >
        User List
      </Typography>
      <Box sx={{ height: 400,  }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
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
  );
};
