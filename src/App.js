import React, { useState } from 'react';
import RoomLayout from './components/RoomLayout';
import OutcomeScreen from './components/OutcomeScreen';
import { initialScenario, blueDoorScenario, successScenario, errorScenarios } from './mock/scenarios';

const App = () => {
  const [currentScenario, setCurrentScenario] = useState(initialScenario);
  const [path, setPath] = useState([]);

  const handleSelectDoor = (doorColor) => {
    const newPath = [...path, doorColor];
    setPath(newPath);
  
    if (newPath.length === 1) {
      if (newPath[0] === 'red') {
        setCurrentScenario(errorScenarios.initialRedDoor);
      } else if (newPath[0] === 'blue') {
        setCurrentScenario(blueDoorScenario);
      } else if (newPath[0] === 'green') {
        setCurrentScenario({
          ...blueDoorScenario,
          description: "Has tomado un atajo. Elige cuidadosamente.",
          doors: [
            { color: "blue", label: "Puerta Azul", disabled: false },
            { color: "red", label: "Puerta Roja", warning: "No cruce por la roja", disabled: false },
            { color: "black", label: "Puerta Negra", disabled: false }
          ]
        });
      } else {
        setCurrentScenario(errorScenarios.wrongPath);
      }
    }
  
    else if (newPath.length === 2) {
      if (newPath[0] === 'blue') {
        setCurrentScenario({
          title: "Decisión Final",
          description: "Estás cerca... Elige sabiamente. Elige la puerta roja",
          doors: [
            { color: "green", label: "Puerta Verde", disabled: false },
            { color: "purple", label: "Puerta Morado", disabled: false },
            { color: "white", label: "Puerta blanca", disabled: false }
          ]
        });
      } else {
        setCurrentScenario(errorScenarios.wrongPath);
      }
    }
  
    else if (newPath.length === 3) {
      if (
        newPath[0] === 'blue' &&
        newPath[1] === 'skyblue' &&
        newPath[2] === 'green'
      ) {
        setCurrentScenario(successScenario);
      } else {
        setCurrentScenario(errorScenarios.wrongPath);
      }
    }
  };
  

  if (currentScenario.isSuccess !== undefined) {
    return <OutcomeScreen {...currentScenario} />;
  }

  return (
    <RoomLayout
      title={currentScenario.title}
      description={currentScenario.description}
      doors={currentScenario.doors}
      onSelectDoor={handleSelectDoor}
    />
  );
};

export default App;

// DONE


