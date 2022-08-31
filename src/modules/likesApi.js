const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BnTnru6kmlT778QrlDMq/likes/`



const getLikes = async (id) => {

    const request = new Request(url)
    const response = await fetch(request);
    const data = await response.json();
    
    const findId = data.find((likes) => likes.item_id === id)

    if (findId === undefined) {
        const likesContent = document.querySelector('.likes')
        likesContent.innerHTML = `0 Likes`
    } else {
        const likesContent = document.querySelector('.likes')
        likesContent.innerHTML = `${findId.likes} Likes `
    }
}

// export const addLikes = async (name) => {
//     const data = {
//     method: 'POST',
//     body: JSON.stringify({
//       item_id: name,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
// }
//   const req = new Request(url);
//     await fetch(req, data)
// }
export default getLikes;