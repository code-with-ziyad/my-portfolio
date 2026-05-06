// =====================
// TYPING EFFECT
// =====================
const text = "Web Developer | CS Student | Programmer";
let i = 0;
const el = document.getElementById("typing");

function typingEffect() {
  if (el) {
    el.innerText = text.slice(0, i++);
    if (i > text.length) i = 0;
  }
}
setInterval(typingEffect, 120);

// =====================
// PROJECTS DATA
// =====================
const projects = [
  {
    title: "Portfolio Website",
    category: "featured frontend",
    image: "https://via.placeholder.com/400x250",
    link: "https://code-with-ziyad.github.io/my-portfolio/"
  },
  {
    title: "E-Commerce Website",
    category: "featured frontend",
    image: "https://via.placeholder.com/400x250",
    link: "https://code-with-ziyad.github.io/my-Ecomers-website/"
  },
  {
    title: "Rock Paper Scissors Game",
    category: "frontend",
    image: "https://via.placeholder.com/400x250",
    link: "https://code-with-ziyad.github.io/S-P-S/"
  }
];

// =====================
// DISPLAY FUNCTION
// =====================
function displayProjects(filter) {
  const container = document.getElementById("projectContainer");
  if (!container) return;

  container.innerHTML = "";

  const filtered =
    filter === "all"
      ? projects
      : projects.filter(p => p.category.includes(filter));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-20 text-4xl font-bold text-gray-400">
        Coming Soon 🚀
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      ${filtered
        .map(
          p => `
        <div class="card">
          <img src="${p.image}" class="card-img">
          <div class="card-overlay">
            <h3>${p.title}</h3>
            <a href="${p.link}" target="_blank">View Project</a>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

// =====================
// FILTER BUTTONS
// =====================
const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter; // 👈 IMPORTANT
    displayProjects(filter);
  });
});

// =====================
// DEFAULT LOAD
// =====================
displayProjects("all");