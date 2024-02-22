import React, { useState } from "react";
import {
  TextField,
  Typography,
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { validateEmail, validatePassword } from "./libs/validation";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  errorField: {
    borderColor: "red",
  },
});

const LoginPage = () => {
  const classes = useStyle();
  const [openDialog, setOpenDialog] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false,
  });

  /**
   * Event handler for changes in the email and password input fields.
   * Updates form data and form errors accordingly.
   * @param {Object} event - The event object.
   */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]:
        name === "email" ? !validateEmail(value) : !validatePassword(value),
    });
  };

  /**
   * Event handler for form submission.
   * Prevents default form submission behavior.
   * @param {Object} event - The event object.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formValues.email === "test@tamatem.com" &&
      formValues.password === "TamatemTest"
    ) {
      setOpenDialog(true);
    }
  };

  /**
   * Dialog handler
   */
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container className="container">
      <div className="content-wrapper">
        <div className="image-wrapper">
          <img
            src="https://avatars.githubusercontent.com/u/124091983"
            alt="logo"
            className="logo"
          />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoFocus
            onChange={handleInputChange}
            error={formErrors.email}
            className={formErrors.email ? classes.errorField : ""}
          />
          {formErrors.email && (
            <Typography>
              <span className="validation-msg">
                Please enter a valid email address.
              </span>
            </Typography>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleInputChange}
            error={formErrors.password}
            className={formErrors.password ? classes.errorField : ""}
          />
          {formErrors.password && (
            <Typography>
              <span className="validation-msg">
                Password must be at least 8 characters long.
              </span>
            </Typography>
          )}
          <div className="button-wrapper">
            <Button
              type="submit"
              className="submit-button"
              variant="outlined"
              disabled={formErrors.password || formErrors.email}
            >
              LOGIN
            </Button>
          </div>
        </form>
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"successfully logged in !!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              you logged in successfully{" "}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Container>
  );
};

export default LoginPage;
