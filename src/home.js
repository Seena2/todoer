import newProjectLoad from "./newProject";

//DOM for Heading
const contentDiv=document.querySelector('.content');
const heading=document.createElement('h2');
heading.textContent=' Todolister App';
contentDiv.appendChild(heading);

//DOM for default project dashboard
const infoDiv=document.createElement('div');
infoDiv.textContent=newProjectLoad().projectTitle;
contentDiv.appendChild(infoDiv);
