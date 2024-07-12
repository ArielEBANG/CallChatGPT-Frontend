import React, { useState } from "react";
import CustomizedAccordions from "../components/Accordion";
import { Box, Container } from "@mui/material";
import SwitchButton from "../components/SwitchButton";
import ResultsButton from "../components/ResultsButton";

const Home = ({ formResults }) => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [error, setError] = useState(null);

  const handleSwitchChange = (event) => {
    setShowText1(event.target.checked);
  };

  const handleSwitchChange2 = (event) => {
    setShowText2(event.target.checked);
  };

  let questions = [];
  let analyseSynthetique = "Pas de donnée disponible";
  let pointsForts = "Pas de donnée disponible";
  let pointsFaibles = "Pas de donnée disponible";

  if (formResults) {
    try {
      const jsonObject = JSON.parse(formResults.summary);
      questions = jsonObject.Questions_entretien || [];
      analyseSynthetique = jsonObject['Analyse_synthetique'] || analyseSynthetique;
      pointsForts = jsonObject['Points_forts'] || pointsForts;
      pointsFaibles = jsonObject['Points_faibles'] || pointsFaibles;
      if (error) setError(null);
    } catch (err) {
      if (!error) setError('Pas de donnée valide car ce n\'est pas le format attendu dans le prompt.');
    }
  }

  // Convertir les objets en chaîne JSON si nécessaire
  const formatContent = (content) => {
    if (typeof content === 'object') {
      return JSON.stringify(content, null, 2);
    }
    return content;
  };

  return (
    <Container>
      <h2>Ce qui ressort des scores</h2>
      {error && (
        <div style={{ color: 'red' }}>
          <h2>Erreur:</h2>
          <p>{error}</p>
        </div>
      )}
      <CustomizedAccordions
        content={analyseSynthetique}
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
          content={formatContent(pointsForts)}
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
          content={formatContent(pointsFaibles)}
          label="Points d'amélioration"
          formResults={formResults}
        />
      </div>
      <h1>Ce que je peux demander en entretien</h1>
      <div>
        {questions && Object.keys(questions).length > 0 ? (
          Object.keys(questions).map((categorie) => (
            <div key={categorie}>
              <h2 style={{ color: "rgb(65, 112, 152)" }}>
                Suggestions de questions - {categorie}
              </h2>
              {Array.isArray(questions[categorie]) ? (
                questions[categorie].map((question, index) => (
                  <ResultsButton
                    key={`${categorie}-${index}`}
                    title={`Question ${index + 1}`}
                    content={question}
                    formResults={formResults}
                  />
                ))
              ) : (
                <p>Les données de {categorie} ne sont pas valides.</p>
              )}
            </div>
          ))
        ) : (
          <p>Pas de questions disponibles.</p>
        )}
      </div>
    </Container>
  );
};

export default Home;
