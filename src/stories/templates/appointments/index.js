import React from "react";
import PropTypes from "prop-types";
import "../default.css";
import "./style.css";
import Appointment from "../../molecules/appointment";
import { AppointmentHeader } from "../../molecules/appointmentHeader";


export const Appointments = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <AppointmentHeader
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onCreateAccount}
    />

    <section>
      <Appointment />
    </section>
  </article>
);

Appointments.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Appointments.defaultProps = {
  user: null,
};
