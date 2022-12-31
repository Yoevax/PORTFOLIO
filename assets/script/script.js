// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });

// const mouseCursor = document.getElementById("mouse_cursor");
// const li = document.querySelectorAll("li");
// const menu = document.querySelector(".navbar");


// let cursorX = 0,
//   cursorY = 0,
//   currentX = 0,
//   currentY = 0;

// function lerp(start, end, t) {
//   return start * (1 - t) + end * t;
// }

// window.addEventListener("mousemove", (e) => {
//   mouseCursor.style.display = "inline-block";
//   cursorX = e.clientX;
//   cursorY = e.clientY;
// });

// function styling(s) {
//   mouseCursor.style.width = `${s}px`;
//   mouseCursor.style.height = `${s}px`;
// }

// menu.a;

// li.forEach((l) => {
//   l.addEventListener("mouseover", () => {
//     styling(90);
//   });

//   l.addEventListener("mouseleave", () => {
//     styling(50);
//   });
// });

// function animate() {
//   currentX = lerp(currentX, cursorX, 0.05);
//   currentY = lerp(currentY, cursorY, 0.05);
//   mouseCursor.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px)) `;
//   requestAnimationFrame(animate);
// }

// animate();

// // animation des skills
// test.addEventListener("click", ()=>{
//   nameP.innerText= "HTML5";
//   skills.style = "width:90%";
//   progress.setAttribute("data-bs-original-title", "90%");
// })
// cssSkill.addEventListener("click", ()=>{
//   nameP.innerText= "CSS3";
//   skills.style = "width:75%";
//   progress.title = "75%";
//   progress.setAttribute("data-bs-original-title", "75%");
// })

// sassSkill.addEventListener("click", ()=>{
//   nameP.innerText= "Sass";
//   skills.style = "width:60%";
//   progress.title = "60%";
//   progress.setAttribute("data-bs-original-title", "60%");
// })
// jsSkill.addEventListener("click", ()=>{
//   nameP.innerText= "JavaScript";
//   skills.style = "width:80%";
//   progress.title = "80%";
//   progress.setAttribute("data-bs-original-title", "80%");

// })
// nodeSkill.addEventListener("click", ()=>{
//   nameP.innerText= "NodeJs";
//   skills.style = "width:60%";
//   progress.title = "60%";
//   progress.setAttribute("data-bs-original-title", "60%");
// })
// jquerySkill.addEventListener("click", ()=>{
//   nameP.innerText= "JQuery";
//   skills.style = "width:70%";
//   progress.title = "70%";
//   progress.setAttribute("data-bs-original-title", "70%");
// })
// jsonSkill.addEventListener("click", ()=>{
//   nameP.innerText= "JSON";
//   skills.style = "width:70%";
//   progress.title = "70%";
//   progress.setAttribute("data-bs-original-title", "70%");
// })
// phpSkill.addEventListener("click", ()=>{
//   nameP.innerText= "PHP";
//   skills.style = "width:70%";
//   progress.title = "70%";
//   progress.setAttribute("data-bs-original-title", "70%");
// })
// mysqlSkill.addEventListener("click", ()=>{
//   nameP.innerText= "MySQL";
//   skills.style = "width:75%";
//   progress.title = "75%";
//   progress.setAttribute("data-bs-original-title", "75%");
// })

// wordpressSkill.addEventListener("click", ()=>{
//   nameP.innerText= "Worpress";
//   skills.style = "width:85%";
//   progress.title = "85%";
//   progress.setAttribute("data-bs-original-title", "85%");
// })

// gitSkill.addEventListener("click", ()=>{
//   nameP.innerText= "Git";
//   skills.style = "width:60%";
//   progress.title = "60%";
//   progress.setAttribute("data-bs-original-title", "60%");
// })

// githubSkill.addEventListener("click", ()=>{
//   nameP.innerText= "MySQL";
//   skills.style = "width:75%";
//   progress.title = "75%";
//   progress.setAttribute("data-bs-original-title", "75%");
// })
// bootstrapSkill.addEventListener("click", ()=>{
//   nameP.innerText= "Bootstrap";
//   skills.style = "width:70%";
//   progress.title = "70%";
//   progress.setAttribute("data-bs-original-title", "70%");
// })
// psSkill.addEventListener("click", ()=>{
//   nameP.innerText= "Photoshop";
//   skills.style = "width:65%";
//   progress.title = "65%";
//   progress.setAttribute("data-bs-original-title", "65%");
// })
// xdSkill.addEventListener("click", ()=>{
//   nameP.innerText= "XD";
//   skills.style = "width:85%";
//   progress.title = "85%";
//   progress.setAttribute("data-bs-original-title", "85%");
// })

// illuSkill.addEventListener("click", ()=>{
//   nameP.innerText= "Illustrator";
//   skills.style = "width:70%";
//   progress.setAttribute("data-bs-original-title", "70%");
// })

// animateSkill.addEventListener("click", ()=>{
//   nameP.innerText= "Animate";
//   skills.style = "width:85%";
//   progress.setAttribute("data-bs-original-title", "85%");
// })


// OEIl
// const baseObject = document.getElementById("base-eye");
// const grid = document.getElementById("grid");
// let eyes, eyeCenters;
// let eyeDensity = 5;
// let numEyesX, numEyesY;
// const center = new THREE.Vector2();
// const mousePos = new THREE.Vector2();
// const PI = Math.PI;
// let maxDist;
// const maxEyeTravelX = 275;
// const maxEyeTravelY = 100;

// init();

// function init() {
//   window.addEventListener("resize", throttled(handleResize));
//   window.addEventListener("mousemove", throttled(handleMouseMove));
//   handleResize();
//   console.log("init");
// }

// function handleMouseMove(event) {
//   mousePos.set(event.clientX, event.clientY);
//   eyes.forEach((eye, i) => {
//     const vecToMouse = new THREE.Vector2().subVectors(mousePos, eyeCenters[i]);
//     const angle = vecToMouse.angle();
//     const dist = mousePos.distanceTo(eyeCenters[i]);
//     const distPercent = map(dist, 0, maxDist, 0, 1);
//     const clampedMouseX = clamp(vecToMouse.x, maxEyeTravelX * -1, maxEyeTravelX);
//     const clampedMouseY = clamp(vecToMouse.y, maxEyeTravelY * -1, maxEyeTravelY);
//     const pupilX = map(clampedMouseX, 0, maxEyeTravelX, 0, maxEyeTravelX);
//     const pupilY = map(clampedMouseY, 0, maxEyeTravelY, 0, maxEyeTravelY);
//     const scale = map(dist, 0, maxDist, 0.5, 0.8);
    
//     eye.style.setProperty("--pupil-x", pupilX);
//     eye.style.setProperty("--pupil-y", pupilY);
//     eye.style.setProperty("--scale", scale);
//   });
// }

// function handleResize() {
  
//   // recreate the grid and elements 
//   const largeSide = Math.max(innerWidth, innerHeight);
//   const size = Math.round(largeSide / eyeDensity);
//   numEyesX = Math.ceil(innerWidth / size);
//   numEyesY = Math.ceil(innerHeight / size);
//   grid.style.setProperty("--num-columns", numEyesX);
//   grid.style.setProperty("--num-rows", numEyesY);
//   grid.innerHTML = "";
//   generateArrowGrid();
  
//   center.set(innerWidth * 0.5, innerHeight * 0.5);
//   maxDist = center.length() * 2;
  
//   // send a fake mouse event to trigger the initial point
//   handleMouseMove({clientX: center.x, clientY: center.y});
// }

// function generateArrowGrid() {
//   eyes = [];  
//   eyeCenters = [];
//   for (let i = 0; i < 1; i += 1) {
    
//     // add the eye to the grid
//     const newArrow = baseObject.cloneNode(true);
//     newArrow.id = `eye-${i}`;
//     newArrow.setAttribute("class", "eye");
//     grid.appendChild(newArrow);
//     eyes.push(newArrow);
    
//     // save its center point for use later
//     const eyeRect = newArrow.getBoundingClientRect();
//     const eyeCenter = new THREE.Vector2(
//       eyeRect.left + (newArrow.clientWidth * 0.5),
//       eyeRect.top + (newArrow.clientHeight * 0.5),
//     );
//     eyeCenters.push(eyeCenter);
//   }
// }

// // USEFUL FUNCTIONS
// function throttled(fn) {
//   let didRequest = false;
//   return param => {
//     if (!didRequest) {
//       requestAnimationFrame(() => {
//         fn(param);
//         didRequest = false;
//       });
//       didRequest = true;
//     }
//   };
// }
// function map(value, min1, max1, min2, max2) {
//   return (value - min1) * (max2 - min2) / (max1 - min1) + min2;
// }
// function clamp (value, min = 0, max = 1) {
//   return value <= min ? min : value >= max ? max : value;
// }