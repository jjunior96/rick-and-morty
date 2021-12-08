import api from 'services/api';

export async function getCharacters() {
  let response;
  let error;

  try {
    response = await api.get(`/character/`);
  } catch (err) {
    error = err;
  }

  return {
    data: response?.data.results,
    error: error
  };
}

export async function getCharacterById(id: number) {
  let response;
  let error;

  try {
    response = await api.get(`/character/${id}`);
  } catch (err) {
    error = err;
  }

  return {
    data: response?.data.results,
    error: error
  };
}
