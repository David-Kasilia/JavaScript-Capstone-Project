import { toUpper } from 'lodash';
// eslint-disable-next-line import/no-cycle
const modal = document.getElementById('modal');
let showComments;

const showModal = (item) => {
  const commentsModal = document.createElement('div');
  commentsModal.classList.add('commentsModal');

  const close = document.createElement('i');
  close.classList.add('fa-solid', 'fa-close', 'closeIcon');
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  const commentsImg = document.createElement('div');
  commentsImg.classList.add('commentsImg');
  commentsImg.style.backgroundImage = `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${item.id}.png")`;

  const modalTitle = document.createElement('h1');
  modalTitle.classList.add('commentsTitle');
  modalTitle.innerText = toUpper(item.name);

  const commentsDetails = document.createElement('div');
  commentsDetails.classList.add('commentsDetails');

  const commentsDetailsRow1 = document.createElement('div');
  commentsDetailsRow1.classList.add('commentsDetailsRow');

  const commentsDetailsRow2 = document.createElement('div');
  commentsDetailsRow2.classList.add('commentsDetailsRow');

  const nameLabel = document.createElement('p');

  nameLabel.classList.add('id');
  nameLabel.innerText = `Id: ${item.id}`;


  const growth = document.createElement('p');
  growth.classList.add('order');
  growth.innerText = `Order: ${item.order}`;

  commentsDetailsRow1.append(nameLabel, growth);

  const flavor = document.createElement('p');
  flavor.classList.add('experience');
  flavor.innerText = `Experience: ${item.base_experience}`;

  const giftType = document.createElement('p');
  giftType.classList.add('height');
  giftType.innerText = `Height: ${item.height}`;

  commentsDetailsRow2.append(flavor, giftType);
  commentsDetails.append(commentsDetailsRow1, commentsDetailsRow2);
  commentsModal.append(close, commentsImg, modalTitle, commentsDetails);

  showComments = (data) => {
    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('commentsContainer');

    const commentsTitle = document.createElement('h2');
    commentsTitle.classList.add('commentsTitle');
    commentsTitle.innerText = 'Comments (0)';

    const comments = document.createElement('ul');
    comments.classList.add('comments');

    if (data && data.length > 0) {
      data.forEach((item) => {
        const comment = document.createElement('li');
        comment.classList.add('comment');
        comment.innerText = `${item.creation_date}  ${item.username}: ${item.comment}`;
        comments.append(comment);
      });
    } else {
      const noComments = document.createElement('h3');
      noComments.innerText = 'Be the first to add a comment';
      comments.append(noComments);
    }

    commentsContainer.append(commentsTitle, comments);
    commentsModal.append(commentsContainer);
  };

  modal.innerHTML = '';
  modal.append(commentsModal);
};

export default async (id) => {
  // base for the api to get the pokemon
  const url = `https://pokeapi.co/api/v2/pokemon/${id.id}`;

  // fetch data
  const res = await fetch(url);
  const pokemon = await res.json();
  showModal(pokemon);
};

export const commentsShow = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BnTnru6kmlT778QrlDMq/comments?item_id=${id}`;

  const res = await fetch(url);
  const data = await res.json();
  await showComments(data);
};
