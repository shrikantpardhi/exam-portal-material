import React from 'react'
import { useTheme } from "@mui/styles";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import TagForm from "../forms/TagForm";
import AvailableTagList from '../Widgets/AvailableTagList';
import { tags } from '../../../data';

const TagDialog = (props) => {
  const theme = useTheme();
  const { openTag, handleTag } = props;
  return (
    <Dialog
      open={openTag}
      onClose={handleTag}
      fullWidth
      sx={{ zIndex: theme.zIndex.modal }}
      // scroll="paper"
    >
      <DialogTitle>
        <Typography
          sx={{
            ...theme.typography.h5,
            fontSize: "1.25rem",
            textAlign: "center",
          }}
        >
          Exam Code
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TagForm />
        {/* available tags  */}
        <Divider>Available Tags</Divider>
        <AvailableTagList tags={tags} />
      </DialogContent>
    </Dialog>
  );
}

export default TagDialog