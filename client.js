function getPosts() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((returnData) => {
      const data = returnData.data;
      if (data.length > 0) {
        const posts = document.getElementById("posts");
        data.forEach((post) => {
          //   console.log(post);
          posts.innerHTML +=
            "<li><b>" + post.title + "</b> - " + post.body + "</li>";
        });
      } else {
        alert("데이터가 존재하지 않습니다.");
      }
    })
    .catch((err) => {
      alert("데이터 요청이 실패하였습니다. 다시 시도해주세요.");
    });
}
