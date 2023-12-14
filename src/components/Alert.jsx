"use client";

import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowAlert } from "@/redux/slices/alertSlice";

function AlertItem({ text }) {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  if (alert && alert.showAlert) {
    return (
      <Alert
        variant="success"
        dismissible
        transition
        onClose={() => dispatch(setShowAlert(false))}
      >
        {text}
      </Alert>
    );
  } else return null;
}

export default AlertItem;
