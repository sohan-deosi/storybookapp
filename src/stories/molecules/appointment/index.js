import React from "react";
import Moment from "react-moment";
import './style.css';

import AppointmentList from "../../../data/appointments.json";

export default () => {
  return (
    <>
      {AppointmentList.map((data) => {
        return (
          <div className="card" key={data.id}>
            <div className="card-body">
              <a className="action-button" href="#">
                Actions ...
              </a>
              <h5 className="text-uppercase">
                {data.title} | {data.type}
              </h5>
              <h3 className="card-text">
                <Moment format="DD MM YYYY">{data.date}</Moment> |{" "}
                <Moment format="hh:mm A">{data.date}</Moment>
              </h3>
              <p className="card-text">
                Invitees <span className="badge">{data.participent}</span>{" "}
                <span className="badge">{data.staff}</span>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
