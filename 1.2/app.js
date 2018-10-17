document.getElementById('button1').addEventListener('click', loadEmployee);
document.getElementById('button2').addEventListener('click', loadEmployees);


function loadEmployee() {
    // Create new object
    const xhr = new XMLHttpRequest();

    //Open the connection
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // Execute function
    xhr.onload = function() {
        if(this.status === 200) {
            // GET The Response as an Object
            const employee = JSON.parse(this.responseText);
            //console.log( JSON.parse( this.responseText));

            // Build the template
            const output = `
                <ul>
                    <li>ID: ${employee.userId}</li>
                    <li>name: ${employee.id}</li>
                    <li>company: ${employee.title}</li>
                    <li>job: ${employee.completed}</li>
                </ul>
            `;

            //print the HTML
            document.getElementById('employee').innerHTML = output;
        }
    }

    xhr.send();
}

// display all the employee
function loadEmployees() {
    // Create new object
    const xhr = new XMLHttpRequest();

    //Open the connection
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);

    // Execute function
    xhr.onload = function() {
        if(this.status === 200) {
            // GET The Response as an Object
            const employees = JSON.parse(this.responseText);
            console.log( employees);

            // Build the template
            let output = '';
            employees.forEach(function(employee){
                // grab the output
                output += `
                <ul>
                    <li>ID: ${employee.albumId}</li>
                    <li>name: ${employee.title}</li>
                    <li><img src="${employee.thumbnailUrl}" /></li>
                   
                </ul>
                `;
            })

            //print the HTML
            document.getElementById('employees').innerHTML = output;
        }
    }

    xhr.send();
}