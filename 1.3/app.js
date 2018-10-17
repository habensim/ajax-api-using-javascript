document.querySelector('#load').addEventListener('click',  loadPosts);


function loadPosts() {
     // Create the object
     const xhr = new XMLHttpRequest();

     // Open the connection
     xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

     // Execute the function
     xhr.onload = function() {
          if(this.status === 200) {
               const response = JSON.parse( this.responseText );

               // print the contents
               let output = '';

               response.forEach(function(post) {
                    output += `
                         <h3>${post.title}</h3>
                         <p>${post.body}</p>
                    `;
               });
               document.querySelector('#result').innerHTML = output;
          }
     }

     // Send the request
     xhr.send();
}