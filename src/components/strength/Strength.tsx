import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";

interface Props {
  password: string;
}

const HAS_UPPER_LETTER = /[A-Z]/;
const HAS_LOWER_LETTER = /[a-z]/;
const HAS_NUMBERS = /[0-9]/;
const HAS_SYMBOLS = /[!@#$%^&*_\-+=]/;

function Strength({ password }: Props) {
  const [strength, setStrength] = useState<number>(0);

  useEffect(() => {
    setStrength(validatePassword(password));
  }, [password]);

  const validatePassword = (password: string) => {
    let count = 0;
    count += HAS_UPPER_LETTER.test(password) ? 1 : 0;
    count += HAS_LOWER_LETTER.test(password) ? 1 : 0;
    count += HAS_NUMBERS.test(password) ? 1 : 0;
    count += HAS_SYMBOLS.test(password) ? 1 : 0;
    count += password.length >= 8 ? 1 : 0;
    return count;
  };

  return (
    <>
      {strength === 5 && (
        <Alert severity="success">Very strong password!</Alert>
      )}
      {strength === 4 && <Alert severity="info">Strong password!</Alert>}
      {strength === 3 && <Alert severity="warning">Weak password!</Alert>}
      {strength < 3 && <Alert severity="error">Very weak password!</Alert>}
    </>
  );
}

export default Strength;
