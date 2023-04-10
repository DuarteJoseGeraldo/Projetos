const showResult = async (callback) => {
  const resultOfFunction = await callback;
  console.log(resultOfFunction);
};

const getSpecies = async (species) => {
  const result = [];
  for (let i = 0; i < species.length; i++) {
    const id = parseInt(species[i][species[i].length - 2]);
    //species i é a string atual do vetor de especies, esse vetor

    const response = await fetch(`https://swapi.dev/api/species/${id}/`).then(
      (item) => item.json()
    );
    result.push(response.name);
  }
  return result;
};

const getCharacter = async (id) => {
  const url = `https://swapi.dev/api/people/${id}`;
  const result = await fetch(url).then((item) => item.json());
  const species = await getSpecies(result.species);

  return {
    name: result.name,
    gender: result.gender,
    species: species,
  };
};

showResult(getCharacter(3));
