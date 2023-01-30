import React, {useState} from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteECodeDialog from "../dialog/DeleteECodeDialog";

const ECodeList = (props) => {
  const { ecodes, setEcodes } = props;
  const [openConfirm, setConfirm] = useState(false);
  const [ecode, setEcode] = useState({});

  const handleConfirm = () => {
    setConfirm(!openConfirm);
  }
  return (
    <>
      <Box sx={{ m: 1, overflow: "hidden", overflowY: "scroll" }}>
        {ecodes === undefined ? (
          <Typography> No Codes available!</Typography>
        ) : (
          <Grid container spacing={1}>
            {ecodes.map((option) => {
              return (
                <Grid item key={option.code}>
                  <Box
                    key={option.code}
                    sx={{
                      borderRadius: 2, p:1, 
                      border: "1px solid grey",
                      textTransform: "uppercase",
                      color:"primary"
                    }}
                  >
                    {option.code}
                    <IconButton
                      aria-label="delete"
                      sx={{ ml: 1 }}
                      onClick={() => {
                        setEcode(option);
                        setConfirm(true);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
      <DeleteECodeDialog
        ecodes={ecodes}
        setEcodes={setEcodes}
        ecode={ecode}
        openConfirm={openConfirm}
        handleConfirm={handleConfirm}
      />
    </>
  );
};

ECodeList.propTypes = {
  children: PropTypes.node,
  ecodes: PropTypes.array.isRequired,
  setEcodes: PropTypes.func.isRequired,
};

export default ECodeList;
