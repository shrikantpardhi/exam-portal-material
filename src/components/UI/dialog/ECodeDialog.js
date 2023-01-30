import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/styles";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import ECodeForm from "../forms/ECodeForm";
import ECodeList from "../Widgets/ECodeList";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { EcodeService } from "../../../service/EcodeService";

const ECodeDialog = (props) => {
  const theme = useTheme();
  const { openECode, handleECode } = props;
  const [ecodes, setEcodes] = useState([]);
  const codeService = new EcodeService();
  useEffect(() => {
    codeService.getAll().then((data) => {
      console.log(JSON.stringify(data));
      setEcodes(data);
    });
  }, []);
  return (
    <Dialog
      open={openECode}
      onClose={handleECode}
      fullWidth
      sx={{ zIndex: theme.zIndex.modal }}
      //   scroll="paper"
    >
      <DialogTitle
        sx={{
          ml:1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Exam Code</h3>
        <IconButton onClick={handleECode}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <ECodeForm ecodes={ecodes} setEcodes={setEcodes} />
        {/* available exam codes */}
        <Divider>Available Codes</Divider>
        <ECodeList ecodes={ecodes} setEcodes={setEcodes} />
      </DialogContent>
    </Dialog>
  );
};

export default ECodeDialog;
