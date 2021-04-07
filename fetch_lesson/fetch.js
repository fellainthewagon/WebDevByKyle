const URL = "https://jsonplaceholder.typicode.com/posts";

/* fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.map((user) => user.name));
  });
*/

// async await
async function doStuff() {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "new post",
    }),
  });
  const post = await response.json();
  //   console.log(users.map((user) => user.name));
  console.log(post);
}

doStuff();
