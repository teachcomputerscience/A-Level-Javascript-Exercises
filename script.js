// Define the folder structure and their respective index.html paths
const projects = [
  { name: "Basic Addition", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Example Basic Addition/index.html" },
  { name: "What's the average?", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Example What's the Average/index.html" },
  { name: "Football Colours", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Example Football Colours/index.html" },
  { name: "Workers Pay", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Workers Pay/index.html" },
  { name: "EasyPreston Airlines", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/EasyPreston/index.html" },
  { name: "Practicing Loops", folder: "3 - Javascript Iteration Using For", path: "Class Exercises/3 - Javascript Iteration Using For/Practicing Loops/index.html" },
  { name: "Functions and Procedures", folder: "6 - Functions and Procedures", path: "Class Exercises/6 - Functions and Procedures/index.html" },
  { name: "Javascript Arrays", folder: "7 - Javascript Arrays", path: "Class Exercises/7 - Javascript Arrays/index.html" },
  { name: "Sorting Algorithms", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/index.html" },
  { name: "Searching Algorithms", folder: "9 - Searching Algorithms", path: "Class Exercises/9 - Searching Algorithms/index.html" },
  { name: "Searching Algorithms (Part 2)", folder: "9a - Searching Algorithms", path: "Class Exercises/9a - Searching Algorithms/index.html" },
];

// Group projects by folder
const groupedProjects = projects.reduce((groups, project) => {
  if (!groups[project.folder]) {
    groups[project.folder] = [];
  }
  groups[project.folder].push(project);
  return groups;
}, {});

// Render project groups
function renderProjects() {
  const projectContainer = document.getElementById("projectContainer");

  for (const [folder, projectList] of Object.entries(groupedProjects)) {
    // Create a group container
    const groupDiv = document.createElement("div");
    groupDiv.classList.add("project-group");

    // Add a title for the group
    const groupTitle = document.createElement("h2");
    groupTitle.textContent = folder; // Use the folder name as the group title
    groupDiv.appendChild(groupTitle);

    // Create a list for the projects
    const ul = document.createElement("ul");
    ul.classList.add("project-list");

    projectList.forEach(project => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = project.path;
      a.textContent = project.name; // Use the project name as the link text
      a.className = "project-link"; // Optional: Add a class for styling
      li.appendChild(a);
      ul.appendChild(li);
    });

    groupDiv.appendChild(ul);
    projectContainer.appendChild(groupDiv);
  }
}

// Call the function to render projects
renderProjects();