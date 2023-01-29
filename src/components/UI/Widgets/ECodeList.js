import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";

const ECodeList = (props) => {
  const { codes } = props;

  return (
    <Box sx={{ m: 1, overflow: "hidden", overflowY: "scroll" }}>
      {codes.length === 0 ? (
        <Typography> No Codes available!</Typography>
      ) : (
        codes.map((option) => {
          return (
            <Button
              variant="outlined"
              style={{ cursor: "not-allowed" }}
              sx={{ m: 1 }}
            >
              {option.code}
            </Button>
          );
        })
      )}
    </Box>
  );
};

ECodeList.propTypes = {};

export default ECodeList;
