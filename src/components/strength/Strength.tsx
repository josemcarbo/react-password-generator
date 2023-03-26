import { Alert } from "@mui/material";
import React from "react";

interface Props {
  count: number;
}

function Strength({ count }: Props) {
  return (
    <>
      {count === 1 && <Alert sx={{width: '100%'}} severity="error">Weak password!</Alert>}
      {count === 2 && <Alert sx={{width: '100%'}} severity="warning">Medium password!</Alert>}
      {count === 3 && <Alert sx={{width: '100%'}} severity="info">Strong password!</Alert>}
      {count === 4 && <Alert sx={{width: '100%'}} severity="success">Very strong password!</Alert>}
    </>
  );
}

export default Strength;
