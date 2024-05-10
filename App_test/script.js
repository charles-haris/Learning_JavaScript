let container = document.querySelector(".container");
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {

    if (!response.ok) {
        console.log('Network response was not ok');
      }else{
        return response.json();
      }
    })
  .then((data) => {

    data.forEach((post)=>{
        container.innerHTML+=`
        <div id='${post.id}' class="card">
        <a href='?${post.id}' ><h2>${post.title}</h2></a>
        <hr>
            <p>
                ${post.body}
            </p>
        </div>
        `;
        console.log(post.title);
    });
})

.catch(error => {
    console.log(`There was a problem with the fetch operation: ${error}`);
  });