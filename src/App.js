import React, { useEffect, useState } from "react";
import './App.css';
import Dog from "./components/Dog";
import DogList from "./components/DogList"; 



function App() {
  const apiKey ='';//insert api key here from thedogapi

  let [dogs, setDogs] = useState([]);
  const [input, setInput] = useState(""); 
  const [dogList, setDogList] = useState([]); 
 

  useEffect( () => {
    getDogs(); 
  }, []);  

  const getDogs = async () => {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?attach_breed=0`, {
      headers: {
          "X-Api-Key": `${apiKey}`
      }
    });
    const data = await response.json();
    console.log(data); 
    setDogs(data); 
  };



const handleInputChange = (e) => {
  e.preventDefault();
  setInput(e.target.value);
}

if (input.length > 0) {
  dogs = dogs.filter((dog) => {
    return dog.name.toLowerCase().match(input); 
  })
}


  return (
    <div className="App">
      <input 
      type="text"
      placeholder="Search Dogs"
      onChange={handleInputChange}
      value={input}/>
      <div>
      {dogs.map(dog => (
        <Dog setDogs={setDogs} dogs={dogs} dogList={dogList} setDogList={setDogList} name={dog.name} temperament={dog.temperament} bredFor={dog.bred_for} height={dog.height.imperial} weight={dog.weight.imperial} lifeSpan={dog.life_span} img={dog.image.url} key={dog.id} />
      ))}
      <DogList setDogList={setDogList} setDogs={setDogs} dogs={dogs} dogList={dogList} />
      </div>
      
    </div>
  );
}

export default App;

