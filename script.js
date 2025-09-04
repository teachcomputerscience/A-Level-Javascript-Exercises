// Define the folder structure and their respective index.html paths
const projects = [
  // Introduction to Javascript tasks
  { 
    name: "Task 1 Example - Basic Addition", 
    folder: "1 - Introduction to Javascript", 
    path: "Class Exercises/1 - Introduction to Javascript/Task 1 Example - Basic Addition/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 1 Example - Basic Addition/instructions.md"
  },
  {
    name: "Task 1a - Multiple Calculations",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 1a - Multiple Calculations/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 1a - Multiple Calculations/instructions.md"
  },
  {
    name: "Task 1b - Area of a Triangle",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 1b - Area of a Triangle/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 1b - Area of a Triangle/instructions.md"
  },
  {
    name: "Task 1c - Circles Calculations",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 1c - Circles Calculations/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 1c - Circles Calculations/instructions.md"
  },
  {
    name: "Task 1d - Whats the Hypotenuse",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 1d - Whats the Hypotenuse/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 1d - Whats the Hypotenuse/instructions.md"
  },
  {
    name: "Task 2 Example - Whats the Average",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 2 Example - Whats the Average/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 2 Example - Whats the Average/instructions.md"
  },
  {
    name: "Task 2a - Mark Percentage",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 2a - Mark Percentage/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 2a - Mark Percentage/instructions.md"
  },
  {
    name: "Task 2b - Temperature Converter",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 2b - Temperature Converter/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 2b - Temperature Converter/instructions.md"
  },
  {
    name: "Task 2c - Convert to CM",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 2c - Convert to CM/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 2c - Convert to CM/instructions.md"
  },
  {
    name: "Task 2d - Cement Order",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 2d - Cement Order/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 2d - Cement Order/instructions.md"
  },
  {
    name: "Task 2e - Car Hire",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 2e - Car Hire/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 2e - Car Hire/instructions.md"
  },
  {
    name: "Task 2f - Commission",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 2f - Commission/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 2f - Commission/instructions.md"
  },
  {
    name: "Task 2g - Pay Rise",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 2g - Pay Rise/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 2g - Pay Rise/instructions.md"
  },
  {
    name: "Task 2h - Overtime",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 2h - Overtime/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 2h - Overtime/instructions.md"
  },
  {
    name: "Task 3 Example - Football",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 3 Example - Football/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 3 Example - Football/instructions.md"
  },
  {
    name: "Task 3a - Which Door",
    folder: "1 - Introduction to Javascript",
    path: "Class Exercises/1 - Introduction to Javascript/Task 3a - Which Door/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 3a - Which Door/instructions.md"
  },
  // Javascript Selection tasks
  {
    name: "Task 1 Example - Workers Pay",
    folder: "2 - Javascript Selection",
    path: "Class Exercises/2 - Javascript Selection/Task 1 Example - Workers Pay/index.html",
    instructions: "Class Exercises/2 - Javascript Selection/Task 1 Example - Workers Pay/instructions.md"
  },
  {
    name: "Task 1a - Golfing Handicap",
    folder: "2 - Javascript Selection",
    path: "Class Exercises/2 - Javascript Selection/Task 1a - Golfing Handicap/index.html",
    instructions: "Class Exercises/2 - Javascript Selection/Task 1a - Golfing Handicap/instructions.md"
  },
  {
    name: "Task 1b - Shopworker Pay",
    folder: "2 - Javascript Selection",
    path: "Class Exercises/2 - Javascript Selection/Task 1b - Shopworker Pay/index.html",
    instructions: "Class Exercises/2 - Javascript Selection/Task 1b - Shopworker Pay/instructions.md"
  },
  {
    name: "Task 1c - Maths Papers",
    folder: "2 - Javascript Selection",
    path: "Class Exercises/2 - Javascript Selection/Task 1c - Maths Papers/index.html",
    instructions: "Class Exercises/2 - Javascript Selection/Task 1c - Maths Papers/instructions.md"
  },
  {
    name: "Task 1d - Whats the Number",
    folder: "2 - Javascript Selection",
    path: "Class Exercises/2 - Javascript Selection/Task 1d - Whats the Number/index.html",
    instructions: "Class Exercises/2 - Javascript Selection/Task 1d - Whats the Number/instructions.md"
  },
  {
    name: "Task 2 Example - EasyPreston",
    folder: "2 - Javascript Selection",
    path: "Class Exercises/2 - Javascript Selection/Task 2 Example - EasyPreston/index.html",
    instructions: "Class Exercises/2 - Javascript Selection/Task 2 Example - EasyPreston/instructions.md"
  },
  {
    name: "Task 2a - A Level Grade",
    folder: "2 - Javascript Selection",
    path: "Class Exercises/2 - Javascript Selection/Task 2a - A Level Grade/index.html",
    instructions: "Class Exercises/2 - Javascript Selection/Task 2a - A Level Grade/instructions.md"
  },
  {
    name: "Task 2b - Vocational Grade",
    folder: "2 - Javascript Selection",
    path: "Class Exercises/2 - Javascript Selection/Task 2b - Vocational Grade/index.html",
    instructions: "Class Exercises/2 - Javascript Selection/Task 2b - Vocational Grade/instructions.md"
  },
  // Javascript Iteration Using For tasks
   {
    name: "Task 1 Example - Practicing Loops",
    folder: "3 - Javascript Iteration Using For",
    path: "Class Exercises/3 - Javascript Iteration Using For/Task 1 Example - Practicing Loops/index.html",
    instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 1 Example - Practicing Loops/instructions.md"
  },
  {
    name: "Task 1a - Times Tables",
    folder: "3 - Javascript Iteration Using For",
    path: "Class Exercises/3 - Javascript Iteration Using For/Task 1a - Times Tables/index.html",
    instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 1a - Times Tables/instructions.md"
  },
  {
    name: "Task 1b - Number Range Sum",
    folder: "3 - Javascript Iteration Using For",
    path: "Class Exercises/3 - Javascript Iteration Using For/Task 1b - Number Range Sum/index.html",
    instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 1b - Number Range Sum/instructions.md"
  },
  {
    name: "Task 1c - ASCII Capital Letters",
    folder: "3 - Javascript Iteration Using For",
    path: "Class Exercises/3 - Javascript Iteration Using For/Task 1c - ASCII Capital Letters/index.html",
    instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 1c - ASCII Capital Letters/instructions.md"
  },
  {
    name: "Task 1d - Number Statistics",
    folder: "3 - Javascript Iteration Using For",
    path: "Class Exercises/3 - Javascript Iteration Using For/Task 1d - Number Statistics/index.html",
    instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 1d - Number Statistics/instructions.md"
  }
];

// Group projects by folder
const groupedProjects = projects.reduce((groups, project) => {
  if (!groups[project.folder]) {
    groups[project.folder] = [];
  }
  groups[project.folder].push(project);
  return groups;
}, {});

// Function to fetch and parse markdown content
async function fetchMarkdown(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Failed to fetch markdown');
    const text = await response.text();
    return marked.parse(text);
  } catch (error) {
    console.error('Error fetching markdown:', error);
    return 'Failed to load instructions';
  }
}

// Function to show modal with content
function showModal(content) {
  const existingModal = document.querySelector('.modal');
  if (existingModal) existingModal.remove();

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <div class="markdown-content">${content}</div>
    </div>
  `;

  modal.querySelector('.close').onclick = () => modal.remove();
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };
  
  document.body.appendChild(modal);
}

// Function to create a topic card
function createTopicCard(title, projects) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${title}</h3>
    <div class="card-overlay">
      <button class="view-btn">View Tasks</button>
    </div>
  `;

  card.querySelector('.view-btn').onclick = () => {
    renderTasks(title, projects);
    updateBreadcrumb(title);
  };

  return card;
}

// Function to create a task card
function createTaskCard(task) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${task.name}</h3>
    <div class="card-overlay">
      <button class="view-btn">View Project</button>
      <button class="instructions-btn">Instructions</button>
    </div>
  `;

  card.querySelector('.view-btn').onclick = () => {
    window.location.href = task.path;
  };

  card.querySelector('.instructions-btn').onclick = async () => {
    const content = await fetchMarkdown(task.instructions);
    showModal(content);
  };

  return card;
}

// Function to update breadcrumb navigation
function updateBreadcrumb(currentPath) {
  const breadcrumb = document.querySelector('.breadcrumb');
  breadcrumb.innerHTML = `
    <a href="#" onclick="renderTopics()">Home</a>
    ${currentPath ? ` > ${currentPath}` : ''}
  `;
}

// Function to render topics (main view)
function renderTopics() {
  const container = document.querySelector('.content');
  container.innerHTML = '';
  updateBreadcrumb();

  Object.entries(groupedProjects).forEach(([topic, projects]) => {
    const card = createTopicCard(topic, projects);
    container.appendChild(card);
  });
}

// Function to render tasks for a specific topic
function renderTasks(topic, projects) {
  const container = document.querySelector('.content');
  container.innerHTML = '';

  projects.forEach(task => {
    const card = createTaskCard(task);
    container.appendChild(card);
  });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  renderTopics();
});