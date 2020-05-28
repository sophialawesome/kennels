import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import AnimalList from "./animal/AnimalList"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import OwnerList from "./owner/OwnerList"


const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route path="/animals"
        render={(props) => {
          return <AnimalList />
        }} />
      <Route path="/employees"
        render={(props) => {
          return <EmployeeList />
        }} />
      <Route path="/locations"
        render={(props) => {
          return <LocationList />
        }} />
      <Route path="/owners"
        render={(props) => {
          return <OwnerList />
        }} />
    </React.Fragment>
  );
};

export default ApplicationViews;