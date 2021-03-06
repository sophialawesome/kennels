import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';

const LocationList = () => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setLocations function to update state
    return LocationManager.getAll().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  // got the locations from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  const deleteLocation = id => {
    LocationManager.delete(id)
        .then(() => LocationManager.getAll().then(setLocations));
};

  // Finally we use map() to "loop over" the locations array to show a list of animal cards
  return(
    <div className="container-cards">
      {locations.map(location =>
        <LocationCard key={location.id} location={location} 
        deleteLocation={deleteLocation}/>
      )}
    </div>
  );
};
export default LocationList