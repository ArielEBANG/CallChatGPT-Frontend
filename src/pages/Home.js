import React, { useState } from "react";
import CustomizedAccordions from "../components/Accordion";
import { Box, Container } from "@mui/material";
import SwitchButton from "../components/SwitchButton";
// import Results from './Results';
import ResultsButton from "../components/ResultsButton";

const Home = ({ formResults }) => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  // const formResultsObject = JSON.parse(formResults?.summary);

  const handleSwitchChange = (event) => {
    setShowText1(event.target.checked);
  };

  const handleSwitchChange2 = (event) => {
    setShowText2(event.target.checked);
  };

  // Définissez une variable pour stocker les questions
  let questions = [];

  if (formResults) {
    const jsonObject = JSON.parse(formResults.summary);
    questions = jsonObject.Questions_entretien;
    console.log(jsonObject);
    console.log('Analyse_synthetique', jsonObject['Analyse_synthetique']);
  }
  return (
    <Container>
      <h2>Ce qui ressort des scores</h2>

      <CustomizedAccordions
        content={
          formResults?(JSON.parse(formResults?.summary)['Analyse_synthetique']):("Pas de donnée disponible")
        }
        formResults={formResults}
      />
      <div>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={2}
          width="100%"
        ></Box>
      </div>
      <div>
        <SwitchButton
          showText={showText1}
          handleSwitchChange={handleSwitchChange}
          content={formResults?(JSON.parse(formResults?.summary)['Points_forts']):("Pas de donnée disponible")}
          label="Points forts"
          formResults={formResults}
        />
      </div>

      <div>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={2}
          width="100%"
        ></Box>
      </div>
      <div>
        <SwitchButton
          showText={showText2}
          handleSwitchChange={handleSwitchChange2}
          content={formResults?(JSON.parse(formResults?.summary)['Points_faibles']):("Pas de donnée disponible")}
          label="Points d'amélioration"
          formResults={formResults}
        />
      </div>
      {/* <Results /> */}
      <h1>Ce que je peux demander en entretien</h1>
      <div>
        {/* Boucle pour afficher chaque question dans un composant ResultsButton */}
      {Object.keys(questions).map((categorie) => (
        <div key={categorie}>
          <h2 style={{ color: "rgb(65, 112, 152)" }}>Suggestions de questions - {categorie}</h2>
          {questions[categorie].map((question, index) => (
            <ResultsButton
              key={`${categorie}-${index}`}
              title={`Question ${index + 1}`}
              content={question}
              formResults={formResults}
            />
          ))}
        </div>
      ))}
      </div>
    </Container>
  );
};

export default Home;
