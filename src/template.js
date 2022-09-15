
const generateManager = manager => {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <h4>Manager</h4><i class="material-icons">content_paste</i>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>`
}


// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

// push array to page 
createTeam = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    // joining strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

// export to index
module.exports = createTeam; 













// const createTeam = (team) => {
//   const generateManager = manager => {
//     return `
//         <div class="card col-4 mt-4 team-member-card">
//             <div class="card-header h-100 bg-primary text-white">
//                 <h2>${manager.getName()}</h2>
//                 <h3><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
//             </div>   
//             <div class="card-main">
//                 <ul>
//                     <li>ID: ${manager.getId()}</li>
//                     <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
//                     <li>Office Number: ${manager.getOfficeNumber()}</li>
//                 </ul>
//             </div> 
//         </div>`
//   };

//   const generateEngineer = engineer => {
//     return `
//     <div class="card col-4 mt-4 team-member-card">
//     <div class="card-header h-100 bg-primary text-white">
//                 <h2>${engineer.getName()}</h2>
//                 <h3><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
//             </div>   
//             <div class="card-main">
//                 <ul>
//                     <li>ID: ${engineer.getId()}</li>
//                     <li>Email: <a href="mailto:${engineer.getEmail()}" alt="email">${engineer.getEmail()}</a></li>
//                     <li>GitHub Username: <a href="https://github.com/${engineer.getGithub()}" alt="gitHub">${engineer.getGithub()}</a>
//                 </ul>
//             </div> 
//         </div>`
//   };


//   const generateIntern = intern => {
//     return `
//     <div class="card col-4 mt-4 team-member-card">
//     <div class="card-header h-100 bg-primary text-white">
//         <h2>${intern.getName()}</h2>
//         <h3><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
//     </div>
//     <div class="card-main">
//         <ul>
//             <li>ID: ${intern.getId()}</li>
//             <li>Email: <a href="mailto:${intern.getEmail()}" alt="email">${intern.getEmail()}</a></li>
//             <li>School: ${intern.getSchool()}</li>
//         </ul>
//     </div>
// </div>`
//   };

//   const html = [];

//   html.push(
//     team
//       .filter((newType) => newType.getRole() === "Manager")
//       .map((manager) => generateManager(manager))
//   );
//   html.push(
//     team
//       .filter((newType) => newType.getRole() === "Engineer")
//       .map((engineer) => generateEngineer(engineer))
//       .join("")
//   );
//   html.push(
//     team
//       .filter((newType) => newType.getRole() === "Intern")
//       .map((intern) => generateIntern(intern))
//       .join("")
//   );

//   return html.join("");
// };

// module.exports = (team) => {
//   return `
//   <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <meta http-equiv="X-UA-Compatible" content="ie=edge">
// <meta name="Description" content="Enter your description here"/>
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
// <link rel="stylesheet" href="./output/style.css">
// <script src="https://kit.fontawesome.com/45142689e7.js" crossorigin="anonymous"></script>
// <title>Team Profile Generator</title>
// </head>
// <body>
//     <div class="container-fluid">
//         <div class="row mr-1.5 ml-1.5">
//             <div class="jumbotron col-12 mb-4 bg-info">
//             <h1 class="justify-content-center text-center text-white">My Team</h1>
//             </div>
//         </div>
//     </div>
//     <div class="container">
//         <div class="row">
//             <div class="row col-12 justify-content-center d-flex">
//             ${createTeam(team)}
//             </div>
//         </div>
//     </div>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
// </body>
// </html>`;
// };
