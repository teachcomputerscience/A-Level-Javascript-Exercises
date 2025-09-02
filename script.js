// Define the folder structure and their respective index.html paths
const projects = [
  { 
    name: "Task 1 Example - Basic Addition", 
    folder: "1 - Introduction to Javascript", 
    path: "Class Exercises/1 - Introduction to Javascript/Task 1 Example - Basic Addition/index.html",
    instructions: "Class Exercises/1 - Introduction to Javascript/Task 1 Example - Basic Addition/instructions.md"
  },
  // Add other projects in the same format...
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