import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import UserPass from "./UserPass";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "45ch",
  },
}));

export default function Registration() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    confirmation: "",
    showConfirmation: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowConfirmation = () => {
    setValues({ ...values, showConfirmation: !values.showConfirmation });
  };

  const handleMouseDownConfirmation = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <UserPass />
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Confirm</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showConfirmation ? "text" : "password"}
          value={values.confirmation}
          onChange={handleChange("confirmation")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowConfirmation}
                onMouseDown={handleMouseDownConfirmation}
                edge="end"
              >
                {values.showConfirmation ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    </React.Fragment>
  );
}
