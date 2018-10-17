document.getElementById('button').addEventListener('click', loadData);

function loadData(){

  // Create the new XMLHTTPREQUEST Object
  const xhr = new XMLHttpRequest();

  //open connection
  xhr.open('GET', 'data.txt', true);

  // Execution the ajax call
  /*
  xhr.onload = function(){
    // Codes
    // 200: Correct
    // 403: forbidden
    // 404: not found
    if(this.status === 200){
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
    
  }
  */

  xhr.onreadystatechange = function() {
    if(this.status === 200 && this.readyState === 4){
      console.log('Ready State', xhr.readyState);

      // Ready state
      // 0 = Unsent
      // 1 = Opened
      // 2 = received
      // 3 = Loading
      // 4 = Done
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }


  //send request
  xhr.send();


}