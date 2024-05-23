async function getPostInfoFromMockAPI(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();
  return data;
}
getPostInfoFromMockAPI(1).then((data) => console.log(data.body));

async function getEmailFromComment(commentId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${commentId}`
  );
  const data = await response.json();
  return data;
}

getEmailFromComment(1).then((data) => console.log(data.email));
