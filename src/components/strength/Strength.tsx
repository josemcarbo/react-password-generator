import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";

interface Props {
  password: string;
}

function Strength({ password }: Props) {
  const [isStrong, setIsStrong] = useState(false);

  useEffect(() => {
    setIsStrong(validatePassword(password));
  }, [password])

  const validatePassword = (password: string) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
  return regex.test(password);
}

  return (
    <>
      {
      isStrong 
      ? <Alert sx={{width: '100%'}} severity="success">Very strong password!</Alert>
      : <Alert sx={{width: '100%'}} severity="error">Weak password!</Alert>
    }
    </>
  );
}

export default Strength;
