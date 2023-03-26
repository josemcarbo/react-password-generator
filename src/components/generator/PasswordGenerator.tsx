import React, { useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Slider,
} from "@mui/material";
import { ArrowRightAlt, FileCopyOutlined } from "@mui/icons-material/";
import "./PasswordGenerator.css";
import Strength from "../strength/Strength";
import className from "classnames";

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

function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState<number>(
    PASSWORD_LENGTH_DEFAULT
  );
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
    <main className="generator-container">
      <section className="generator-header">Password Generator</section>
      <section className="generator-password-content">
        <i className="generator-password-value">{password}</i>
        <div className="generator-password-icon">
          <IconButton
            onClick={copyToClipboard}
            sx={{ margin: 0, padding: 0 }}
            size="small"
            color="primary"
          >
            <FileCopyOutlined />
          </IconButton>
        </div>
      </section>
      <section className="generator-body-content">
        <section className="generator-body-character">
          <span className="generator-body-character-description">
            Character Length
          </span>
          <h2 className="generator-body-character-value">{passwordLength}</h2>
        </section>
        <section className="generator-body-slide">
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
        <section className="generator-body-options">
          <FormControl>
            <FormGroup>
              <FormControlLabel
                componentsProps={{
                  typography: {
                    fontSize: 14,
                    color: "#9c9ca4",
                    fontWeight: 600,
                  },
                }}
                control={
                  <Checkbox
                    name="upper"
                    onChange={(e) => onChecked(e.target as ICheckbox)}
                  />
                }
                label="Include Uppercase Letters"
              />
              <FormControlLabel
                componentsProps={{
                  typography: {
                    fontSize: 14,
                    color: "#9c9ca4",
                    fontWeight: 600,
                  },
                }}
                control={
                  <Checkbox
                    name="lower"
                    onChange={(e) => onChecked(e.target as ICheckbox)}
                  />
                }
                label="Include Lowercase Letters"
              />
              <FormControlLabel
                componentsProps={{
                  typography: {
                    fontSize: 14,
                    color: "#9c9ca4",
                    fontWeight: 600,
                  },
                }}
                control={
                  <Checkbox
                    name="numbers"
                    onChange={(e) => onChecked(e.target as ICheckbox)}
                  />
                }
                label="Include Numbers"
              />
              <FormControlLabel
                componentsProps={{
                  typography: {
                    fontSize: 14,
                    color: "#9c9ca4",
                    fontWeight: 600,
                  },
                }}
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
        <section className="generator-body-strength">
          {password && <Strength password={password} />}
        </section>
        <button
          disabled={!characters}
          className={className(
            "generator-body-button",
            !characters && "generator-body-button-disabled"
          )}
          onClick={generatePassword}
        >
          <span className="generator-body-button-text">GENERATE</span>
          <ArrowRightAlt />
        </button>
      </section>
    </main>
  );
}

export default PasswordGenerator;
