const modal = document.getElementById('modal');

const showModal = (item) => {
  const commentsModal = document.createElement('div');
  commentsModal.classList.add('commentsModal');

  const commentsImg = document.createElement('div');
  commentsImg.classList.add('commentsImg');
  commentsImg.style.backgroundImage = `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${item.id}.png")`;

  const modalTitle = document.createElement('h1');
  modalTitle.classList.add('commentsTitle');
  modalTitle.innerText = item.name;

  const commentsDetails = document.createElement('div');
  commentsDetails.classList.add('commentsDetails');

  const commentsDetailsRow1 = document.createElement('div');
  commentsDetailsRow1.classList.add('commentsDetailsRow');

  const commentsDetailsRow2 = document.createElement('div');
  commentsDetailsRow2.classList.add('commentsDetailsRow');

  const nameLabel = document.createElement('p');
  nameLabel.classList.add('nameLabel');
  nameLabel.innerText = `Name: ${item.name}`;

  const growth = document.createElement('p');
  growth.classList.add('growth');
  growth.innerText = 'Growth Time: 3';

  commentsDetailsRow1.append(nameLabel, growth);

  const flavor = document.createElement('p');
  flavor.classList.add('flavor');
  flavor.innerText = 'flavor: spicy';

  const giftType = document.createElement('p');
  giftType.classList.add('giftType');
  giftType.innerText = 'Gift: fire';

  commentsDetailsRow2.append(flavor, giftType);
  commentsDetails.append(commentsDetailsRow1, commentsDetailsRow2);

  commentsModal.append(commentsImg, modalTitle, commentsDetails);
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
