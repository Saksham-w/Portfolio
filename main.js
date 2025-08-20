import "remixicon/fonts/remixicon.css";

import "remixicon/fonts/remixicon.css";

const allProjects = document.getElementById("allProjects");

const projectsArray = [
  {
    image: "/projects/chatapp.png",
    title: "React Firebase Chat",
    description: "Real-time chat application",
    techUsed: ["React", "Firebase", "CSS", "Zustand"],
    url: "https://reactchat-c34ca.web.app/",
    githubUrl: "https://github.com/Saksham-w/react-firebase-chat",
  },
  {
    image: "/projects/countrypedia.png",
    title: "Country Pedia",
    description: "Country information displaying website",
    techUsed: ["HTML", "CSS", "JS", "React", "API"],
    url: "https://thecountrypedia.vercel.app/",
    githubUrl: "https://github.com/Saksham-w/CountryPedia",
  },
  {
    image: "/projects/catfacts.png",
    title: "Cat Facts",
    description: "Cats fact generating website",
    techUsed: ["HTML", "CSS", "JS", "API"],
    url: "https://randomcatsfacts.vercel.app/",
    githubUrl: "https://github.com/Saksham-w/CatFacts",
  },
  {
    image: "/projects/githubclone.png",
    title: "Github Clone",
    description: "Simple clone of Github using API",
    techUsed: ["HTML", "CSS", "JS", "Github API"],
    url: "https://bestgithubclone.vercel.app/",
    githubUrl: "https://github.com/Saksham-w/Github-clone",
  },
  {
    image: "/projects/techthreads.png",
    title: "Tech Threads",
    description: "Tech news generating website using API",
    techUsed: ["HTML", "CSS", "JS", "API"],
    url: "https://techthreads.vercel.app/",
    githubUrl: "https://github.com/Saksham-w/Tech-Threads",
  },
];

// image, title, description, techUsed, url, githubUrl

projectsArray.map(function (project) {
  const projectDiv = document.createElement("div");
  projectDiv.innerHTML = `<div
    class="flex flex-col lg:flex-row justify-center items-center w-[900px] my-7"
  >
    <div
      class="lg:mr-36 w-full lg:w-1/2 flex items-center justify-center"
    >
      <a href='${project.url}' target="_blank">
        <img
          src='${project.image}'
          alt=""
          class="w-[300px] lg:w-[450px] rounded-2xl hover:scale-110 duration-300 my-5 lg:my-0"
      /></a>
    </div>
    <div
      class="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2"
    >
      <h1 class="text-2xl lg:text-4xl py-2 font-bold">${project.title}</h1>
      <p class="text-lg text-mutedtext">${project.description}</p>
      <div
        class="allTechsUsed text-sm lg:text-base flex flex-row flex-wrap my-4 items-center justify-center"
      >
      </div>
      <div>
        <a href="${project.url}" target="_blank"
          ><button
            class="w-40 rounded-lg p-3 my-2 border-2 text-black font-bold bg-mycolor border-mycolor hover:text-mycolor hover:bg-transparent duration-150"
          >
            Visit Live
          </button></a
        >
        <a href="${project.githubUrl}" target="_blank"
          ><button
            class="w-40 rounded-lg p-3 my-2 border-2 text-mycolor font-bold bg-transparent border-mycolor hover:text-black hover:bg-mycolor duration-150"
          >
            View Code
          </button></a
        >
      </div>
    </div>
  </div>`;

  const techsDiv = projectDiv.querySelector(".allTechsUsed");

  project.techUsed.map(function (tech) {
    const techDiv = document.createElement("div");
    techDiv.innerHTML = `<div
    class="bg-gray-700 rounded-lg mr-3 px-4 py-2 text-gray-400 my-2 lg:my-0"
  >
    ${tech}
  </div>`;
    techsDiv.appendChild(techDiv);
  });

  allProjects.appendChild(projectDiv);
});

// Mobile Navbar Hamburger Menu

const hamburgerbtn = document.querySelector(".hamburgerbtn");
const hamburgermenu = document.querySelector(".hamburgermenu");
let menuList = Array.from(document.querySelectorAll(".hamburgermenu ul li"));
console.log(menuList);

hamburgerbtn.addEventListener("click", function () {
  hamburgermenu.classList.toggle("showMenu");
  if (hamburgermenu.classList.contains("showMenu")) {
    hamburgerbtn.innerHTML = '<i class="ri-close-line"></i>';
  } else {
    hamburgerbtn.innerHTML = '<i class="ri-menu-line"></i>';
  }
});

menuList.map(function (element) {
  element.addEventListener("click", function () {
    hamburgermenu.classList.remove("showMenu");
    hamburgerbtn.innerHTML = '<i class="ri-menu-line"></i>';

  });
});

