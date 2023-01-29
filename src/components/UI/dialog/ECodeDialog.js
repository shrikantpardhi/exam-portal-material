import React from 'react'
import { useTheme } from "@mui/styles";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import ECodeForm from '../forms/ECodeForm';
import ECodeList from '../Widgets/ECodeList';
import { educatorCodes } from '../../../data';

const ECodeDialog = (props) => {
    const theme = useTheme();
    const {openECode, handleECode} = props;
  return (
    <Dialog
      open={openECode}
      onClose={handleECode}
      fullWidth
      sx={{ zIndex: theme.zIndex.modal }}
    //   scroll="paper"
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
        <ECodeForm />
        {/* available exam codes */}
        <Divider>Available Codes</Divider>
        <ECodeList codes={educatorCodes} />
      </DialogContent>
    </Dialog>
  );
}

export default ECodeDialog