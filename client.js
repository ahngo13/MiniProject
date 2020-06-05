function getPosts() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((returnData) => {
      const data = returnData.data;
      if (data) {
        const posts = document.getElementById("posts");
        data.forEach((post) => {
          console.log(post);
          posts.innerHTML +=
            "<li><b>" + post.title + "</b> - " + post.body + "</li>";
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
