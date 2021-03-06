import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import AnimalList from "./animal/AnimalList"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import OwnerList from "./owner/OwnerList"
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail"
import AnimalForm from './animal/AnimalForm'


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
      {/* Make sure you add the `exact` attribute here */}
      <Route exact path="/animals" render={(props) => {
        return <AnimalList {...props} />
      }} />
     
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
      }} />
      <Route path="/animals/:animalId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
      }} />

      {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
      <Route path="/employees"
        render={(props) => {
          return <EmployeeList />
        }} />
      {/* <Route path="/locations"
        render={(props) => {
          return <LocationList />
        }} /> */}
      <Route exact path="/locations" render={(props) => {
        return <LocationList />
      }} />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
        // Pass the locationId to the LocationDetailComponent
        return <LocationDetail locationId={parseInt(props.match.params.locationId)} />
      }} />
      <Route path="/owners"
        render={(props) => {
          return <OwnerList />
        }} />
    </React.Fragment>
  );
};

export default ApplicationViews;