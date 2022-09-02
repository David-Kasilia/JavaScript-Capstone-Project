const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BnTnru6kmlT778QrlDMq/likes/';

const getLikes = async () => {
  // const request = new Request(url);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getLikes;