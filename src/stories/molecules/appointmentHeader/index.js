import React from "react";
import PropTypes from "prop-types";

import { ButtonSchedule } from "../../atoms/buttonSchedule";
import "./style.css";

export const AppointmentHeader = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <>
    <div className="wrapper">
      <div>
        <h1>Appointments</h1>
      </div>
      <div>
        <ButtonSchedule
          size="small"
          onClick={onLogout}
          label="Schedule Appointment"
        />
        {/* {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )} */}
      </div>
    </div>
    <div className="wrapper text-uppercase">
      <div>
        <nav className="nav">
          <a
            className="nav-link active"
            href="/?path=/story/appointments--upcoming"
          >
            Upcoming
          </a>{" "}
          <a className="nav-link" href="/?path=/story/appointments--past">
            Past
          </a>
        </nav>
      </div>
    </div>
  </>
);

AppointmentHeader.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

AppointmentHeader.defaultProps = {
  user: null,
};
