import React, { useState, useEffect } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';
import AnimalForm from './AnimalForm';

const AnimalList = props => {
    // The initial state is an empty array
    const [animals, setAnimals] = useState([]);

    const getAnimals = () => {
        // After the data comes back from the API, we
        //  use the setAnimals function to update state
        return AnimalManager.getAll().then(animalsFromAPI => {
            setAnimals(animalsFromAPI)
        });
    };

    // got the animals from the API on the component's first render
    useEffect(() => {
        getAnimals();
    }, []);

    const deleteAnimal = id => {
        console.log(id)
        AnimalManager.delete(id)
            .then(() => AnimalManager.getAll().then(setAnimals));
    };


    // Finally we use map() to "loop over" the animals array to show a list of animal cards
    return (

        //add this button above your display of animal cards
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {props.history.push("/animals/new") }}>
                Admit Animal
            </button>
            <div className="container-cards">
            {animals.map(animal =>
                <AnimalCard
                    key={animal.id}
                    animal={animal}
                    deleteAnimal={deleteAnimal} />
            )}
        </div>
        </section>

  
        
    );



};


export default AnimalList