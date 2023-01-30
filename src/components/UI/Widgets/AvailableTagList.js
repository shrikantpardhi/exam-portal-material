import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";

const AvailableTagList = (props) => {
  const { tags } = props;
  return (
    <Box
      sx={{
        m: 1,
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      {tags === null ? (
        <Typography> No Tags available!</Typography>
      ) : (
        tags.map((option) => {
          return (
            <Button
              key={option.name}
              variant="outlined"
              style={{ cursor: "not-allowed" }}
              sx={{ m: 1 }}
            >
              {option.name}
            </Button>
          );
        })
      )}
    </Box>
  );
};

AvailableTagList.propTypes = {};

export default AvailableTagList;
