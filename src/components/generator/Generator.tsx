import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Slider,
  Typography,
} from "@mui/material";
import { ArrowRightAlt, FileCopyOutlined } from "@mui/icons-material/";
import "./Generator.css";
import Strength from "../strength/Strength";

const PASSWORD_LENGTH_DEFAULT = 10;
const PASSWORD_LENGTH_MAX = 20;
const PASSWORD_LENGTH_MIN = 6;
const CHARS = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*_-+=",
};

interface ICheckbox {
  name: "upper" | "lower" | "numbers" | "symbols";
  checked: boolean;
}

function Generator() {
  const [passwordLength, setPasswordLength] = useState<number>(10);
  const [characters, setCharacters] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const generatePassword = () => {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(password);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangePasswordLength = (event: any) =>
    setPasswordLength(event.target.value);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChecked = ({ checked, name }: ICheckbox) => {
    if (!CHARS[name]) return;

    const chars = checked
      ? characters.concat(CHARS[name])
      : characters.replace(CHARS[name], "");

    setCharacters(chars);
  };

  return (
    <div className="generator-container">
      <Card className="card">
        <CardHeader
          title="Password Generator"
          titleTypographyProps={{
            variant: "h2",
            color: "primary",
            className: "card-header",
          }}
        />
        <CardContent className="card-content">
          <section>
            <Typography variant="h3" color="primary">
              {password}
            </Typography>
            <IconButton size="small" color="primary">
              <FileCopyOutlined onClick={copyToClipboard} />
            </IconButton>
          </section>
          <section>
            <Typography variant="h6" color="primary">
              Character Length
            </Typography>
            <Typography variant="h2" color="primary">
              {passwordLength}
            </Typography>
          </section>
          <section>
            <Slider
              size="medium"
              defaultValue={PASSWORD_LENGTH_DEFAULT}
              min={PASSWORD_LENGTH_MIN}
              max={PASSWORD_LENGTH_MAX}
              valueLabelDisplay="auto"
              color="primary"
              name="passwordLength"
              onChange={onChangePasswordLength}
            />
          </section>
          <section>
            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="upper"
                      onChange={(e) => onChecked(e.target as ICheckbox)}
                    />
                  }
                  label="Include Uppercase Letters"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="lower"
                      onChange={(e) => onChecked(e.target as ICheckbox)}
                    />
                  }
                  label="Include Lowercase Letters"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="numbers"
                      onChange={(e) => onChecked(e.target as ICheckbox)}
                    />
                  }
                  label="Include Numbers"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="symbols"
                      onChange={(e) => onChecked(e.target as ICheckbox)}
                    />
                  }
                  label="Include Symbols"
                />
              </FormGroup>
            </FormControl>
          </section>
          <section>
            {password && <Strength password={password}/>}
          </section>
        </CardContent>
        <CardActions className="card-actions">
          <Button
            variant="contained"
            color="primary"
            fullWidth={true}
            endIcon={<ArrowRightAlt />}
            onClick={generatePassword}
            disabled={!characters}
          >
            GENERATE
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Generator;
