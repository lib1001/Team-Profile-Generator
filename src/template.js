const generateManager = manager => {
    return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h2>${manager.name}</h2>
            <h3>Manager</h3><i class="fa-solid fa-mug-hot"></i>
        </div>
        <div class="card-body">
            <p class="card-text id">ID: ${manager.id}</p>
            <p class="card-text email">Email: <a href="mailto:${manager.email}" alt="Manager email">${manager.email}</a></p>
            <p class="card-text office-number">Office Number: ${manager.office}</p>
        </div>
    </div>    
`
}

const generateEngineer = engineer => {
    return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h2>${engineer.name}</h2>
            <h3>Manager</h3><i class="fa-solid fa-mug-hot"></i>
        </div>
        <div class="card-body">
            <p class="card-text id">ID: ${engineer.id}</p>
            <p class="card-text email">Email: <a href="mailto:${engineer.email}" alt="Manager email">${engineer.email}</a></p>
            <p class="card-text githubr">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</p>
        </div>
    </div>    
`
}

const generateIntern = intern => {
    return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h2>${intern.name}</h2>
            <h3>Manager</h3><i class="fa-solid fa-mug-hot"></i>
        </div>
        <div class="card-body">
            <p class="card-text id">ID: ${intern.id}</p>
            <p class="card-text email">Email: <a href="mailto:${intern.email}" alt="Manager email">${engineer.email}</a></p>
            <p class="card-text school">School: ${intern.school}</p>
        </div>
    </div>    
`
}
