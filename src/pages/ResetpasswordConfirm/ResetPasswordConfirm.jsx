import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password_confirm } from "../../actions/auth";
import FormLayout from "../../hocs/authform/authForm";
import style from "../Login/Login.module.css";

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { uid, token } = useParams();
  const onSubmit = (e) => {
    e.preventDefault();

    // const uid = match.params.uid;
    // const token = match.params.token;

    reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Navigate to="/login" />;
  } else {
    console.log("request in not sent");
  }

  return (
    <FormLayout>
      <form onSubmit={(e) => onSubmit(e)}>
        <label className={style.formlabel} htmlFor="username">
          Enter new password
        </label>
        <input
          className={style.forminput}
          type="password"
          placeholder="New Password"
          name="new_password"
          value={new_password}
          onChange={(e) => onChange(e)}
          minLength="6"
          required
        />
        <input
          className={style.forminput}
          type="password"
          placeholder="Confirm New Password"
          name="re_new_password"
          value={re_new_password}
          onChange={(e) => onChange(e)}
          minLength="6"
          required
        />
        <button className={style.loginbtn} type="submit">
          Reset Password
        </button>
      </form>
    </FormLayout>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
