const createTeam = (team) => {
  const generateManager = manager => {
    return `
        <div class="card team-member-card">
            <div class="card-header bg-primary text-white">
                <h2>${manager.getName()}</h2>
                <h3><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>   
            <div class="card-main">
                <ul>
                    <li>ID: ${manager.getId()}</li>
                    <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li>Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div> 
        </div>`
  };

  const generateEngineer = engineer => {
    return `
        <div class="card team-member-card">
            <div class="card-header bg-primary text-white">
                <h2>${engineer.getName()}</h2>
                <h3><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
            </div>   
            <div class="card-main">
                <ul>
                    <li>ID: ${engineer.getId()}</li>
                    <li>Email: <a href="mailto:${engineer.getEmail()}" alt="email">${engineer.getEmail()}</a></li>
                    <li>GitHub Username: <a href="https://github.com/${engineer.getGithub()}" alt="gitHub">${engineer.getGithub()}</a>
                </ul>
            </div> 
        </div>`
  };


  const generateIntern = intern => {
    return `
<div class="card team-member-card">
    <div class="card-header bg-primary text-white">
        <h2>${intern.getName()}</h2>
        <h3><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-main">
        <ul>
            <li>ID: ${intern.getId()}</li>
            <li>Email: <a href="mailto:${intern.getEmail()}" alt="email">${intern.getEmail()}</a></li>
            <li>School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>`
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

module.exports = (team) => {
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
<title>Team Profile Generator</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="jumbotron col-12 mb-4 bg-info">
            <h1 class="justify-content-center text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row col-12 justify-content-center d-flex">
            ${createTeam(team)}
            </div>
        </div>
    </div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
</body>
</html>`;
};
