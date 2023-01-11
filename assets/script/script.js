
//curseur personnalisé
const curseur = document.getElementById("curseur");

const animateCurseur = (e, interacting) => {
  const x = e.clientX - curseur.offsetWidth / 2,
        y = e.clientY - curseur.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
  }
  
  curseur.animate(keyframes, { 
    duration: 800, 
    fill: "forwards" 
  });
}

const getCurseurClass = type => {
  switch(type) {
    case "video":
      return "fa-solid fa-play";
    default:
      return "fa-solid fa-arrow-up-right"; 
  }
}

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
  const icon = document.getElementById("curseur-icon");
  
  animateCurseur(e, interacting);
  
  curseur.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.className = getCurseurClass(interactable.dataset.type);
  }
}
