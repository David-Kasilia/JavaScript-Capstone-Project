import getLikes from './likesApi.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BnTnru6kmlT778QrlDMq/likes/';
const addLikes = async (name) => {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      item_id: name,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  await fetch(url, data);
  getLikes();
};

export default addLikes;