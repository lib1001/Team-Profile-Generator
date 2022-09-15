const generateManager = (manager) => {
  return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h2>${manager.name}</h2>
            <h3>Manager</h3><i class="fa-solid fa-mug-hot"></i>
        </div>
        <div class="card-body bg-white text-black">
            <p class="card-text id">ID: ${manager.id}</p>
            <p class="card-text email">Email: <a href="mailto:${manager.email}" alt="Manager email">${manager.email}</a></p>
            <p class="card-text office-number">Office Number: ${manager.office}</p>
        </div>
    </div>    
`;
};

const generateEngineer = (engineer) => {
  return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3><i class="fa-solid fa-glasses"></i>
        </div>
        <div class="card-body bg-white text-black">
            <p class="card-text id">ID: ${engineer.id}</p>
            <p class="card-text email">Email: <a href="mailto:${engineer.email}" alt="Engineer email">${engineer.email}</a></p>
            <p class="card-text github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</p>
        </div>
    </div>    
`;
};

const generateIntern = (intern) => {
  return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h2>${intern.name}</h2>
            <h3>Intern</h3><i class="fa-solid fa-glasses"></i>
        </div>
        <div class="card-body bg-white text-black">
            <p class="card-text id">ID: ${intern.id}</p>
            <p class="card-text email">Email: <a href="mailto:${intern.email}" alt="Intern email">${intern.email}</a></p>
            <p class="card-text school">School: ${intern.school}</p>
        </div>
    </div>    
`;
};

createTeam = (data) => {
  let teamArr = [];

  for (var i = 0; i < data.length; i++) {
    const teamMember = data[i];
    const role = teamMember.getRole();

    if (role === "Manager") {
      const managerInfo = generateManager(teamMember);

      teamArr.push(managerInfo);
    }

    // call engineer function
    if (role === "Engineer") {
      const engineerInfo = generateEngineer(teamMember);

      teamArr.push(engineerInfo);
    }

    // call intern function
    if (role === "Intern") {
      const internInfo = generateIntern(teamMember);

      teamArr.push(internInfo);
    }
  }

  const newEmployees = teamArr.join("");

  const generateTeam = generateHTMLPage(newEmployees);
  return generateTeam;
};

const generateHTMLPage = (newEmployees) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<link rel="stylesheet" href="./output/style.css">
<script src="https://kit.fontawesome.com/45142689e7.js" crossorigin="anonymous"></script>
<title>Team Profile</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid bg-info">
        <div class="container text-center text-white">
          <h1 class="display-4">My Team</h1>
        </div>
    </div>

        <div class="container">
            <div class="row justify-content-center mx-auto" id="employee-card">
                ${newEmployees}
            </div>
        </div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
</body>
</html>`;
};

module.exports = createTeam;
