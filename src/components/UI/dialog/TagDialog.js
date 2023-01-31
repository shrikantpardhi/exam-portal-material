import React, {useEffect, useState} from 'react'
import { useTheme } from "@mui/styles";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import TagForm from "../forms/TagForm";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AvailableTagList from '../Widgets/AvailableTagList';
import { TagService } from '../../../service/TagService';

const TagDialog = (props) => {
  const theme = useTheme();
  const { openTag, handleTag } = props;
  const [tags, setTags] = useState([]);
  const tagService = new TagService();

  useEffect(() => {
    tagService.getAll().then((data) => {
      setTags(data);
    });
  }, []);

  return (
    <Dialog
      open={openTag}
      onClose={handleTag}
      fullWidth
      sx={{ zIndex: theme.zIndex.modal }}
      // scroll="paper"
    >
      <DialogTitle
        sx={{
          ml: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Tag</h3>
        <IconButton onClick={handleTag}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TagForm tags={tags} setTags={setTags} />
        {/* available tags  */}
        <Divider>Available Tags</Divider>
        <AvailableTagList tags={tags} />
      </DialogContent>
    </Dialog>
  );
}

export default TagDialog