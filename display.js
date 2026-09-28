// Week 4 JavaScript Portfolio Project - Display Generation
// Students will learn to generate HTML using JavaScript template literals

// Generate Header Section
let headerHTML = `
    <header>
        <h1>${portfolio.owner.name}</h1>
        <p class="tagline">${portfolio.owner.title}</p>
        <p class="location">📍 ${portfolio.owner.location}</p>
        <p class="bio">${portfolio.owner.bio}</p>
    </header>
`;
document.getElementById('generated-header').innerHTML = headerHTML;

// Generate Skills Section
let skillsHTML = '<section id="skills"><h2>My Skills</h2><ul class="skills-list">';

for (let i = 0; i < portfolio.skills.length; i++) {
    skillsHTML = skillsHTML + `<li>${portfolio.skills[i]}</li>`;
}

skillsHTML = skillsHTML + '</ul></section>';
document.getElementById('generated-skills').innerHTML = skillsHTML;

// Generate Projects Section
let projectsHTML = '<section id="projects"><h2>My Projects</h2><div class="projects-grid">';

for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];
    
    // Build the technologies list
    let techList = project.technologies.join(", ");
    
    projectsHTML = projectsHTML + `
        <article class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="technologies"><strong>Technologies:</strong> ${techList}</p>
            <p class="completion-date"><strong>Completed:</strong> ${project.completionDate}</p>
            ${project.featured ? '<p class="featured-badge">⭐ Featured Project</p>' : ''}
        </article>
    `;
}

projectsHTML = projectsHTML + '</div></section>';
document.getElementById('generated-projects').innerHTML = projectsHTML;