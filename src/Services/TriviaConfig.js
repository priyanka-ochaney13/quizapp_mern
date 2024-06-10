import axios from 'axios';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple';

export const fetchQuestions = async () => {
  const response = await axios.get(API_URL);
  return response.data.results;
};