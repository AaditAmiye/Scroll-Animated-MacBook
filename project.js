// laptop

const html = document.documentElement;
  const canvas = document.getElementById("hero-lightpass");
  const context = canvas.getContext("2d");

  const frameCount = 33;
  const currentFrame = index =>
    `vid/${String(index).padStart(3, '0')}.jpg`;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let images = [];
  let currentFrameIndex = 1;

  // Load images
  const preloadImages = () => {
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images[i] = img;
    }
  };

  const drawImage = (index, zoomScale = 1) => {
    const img = images[index];
    if (!img) return;

    if (!img.complete) {
      img.onload = () => drawImage(index, zoomScale);
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    const scale = Math.min(
      canvas.width / img.width,
      canvas.height / img.height
    ) * zoomScale;

    const w = img.width * scale;
    const h = img.height * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;

    context.drawImage(img, x, y, w, h);
  };

  const updateOnScroll = () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;

    const transitionPoint = 0.9; // 90% scroll = end of frame sequence
    if (scrollFraction < transitionPoint) {
      const index = Math.min(
        frameCount,
        Math.max(1, Math.ceil(scrollFraction / transitionPoint * frameCount))
      );
      currentFrameIndex = index;
      drawImage(index);
    } else {
      // Zoom in last frame
      const zoomProgress = (scrollFraction - transitionPoint) / (1 - transitionPoint);
      const zoomScale = 1 + zoomProgress * 1.5; // zoom in up to 1.5x
      drawImage(frameCount, zoomScale);
    }
  };

  const handleResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawImage(currentFrameIndex);
  };

  window.addEventListener('scroll', updateOnScroll);
  window.addEventListener('resize', handleResize);

  preloadImages();
  images[1] = new Image();
  images[1].src = currentFrame(1);
  images[1].onload = () => drawImage(1);

// dock

const dockContainer = document.querySelector(".dock");
const dockItems = dockContainer.querySelectorAll(".dock-item");
const defaultItemScale = 1;
const hoverItemScale = 2.5;
const neighborItemScale = 1.3;

const defaultMargin = "1vh";
const expandedMargin = "3vh";

const updateDockItems = () => {
dockItems.forEach((item, index) =>{
let scale = defaultItemScale;
let margin = defaultMargin;

if (item.isHovered) {
scale = hoverItemScale;
margin = expandedMargin;
} else if (item.isNeighbor) {
scale = neighborItemScale;
margin = expandedMargin;

}

item.style.transform = `scale(${scale})`;
item.style.margin =`0 ${margin}`;
});
};

dockItems.forEach((item) => {
item.addEventListener("mousemove", () =>{
dockItems.forEach((otherItem) => {
otherItem.isHovered = otherItem === item;
otherItem.isNeighbor =
Math.abs(
Array. from(dockItems).indexOf(otherItem)-
Array.from(dockItems).indexOf(item)
) === 1;

});

updateDockItems();
});
});

dockContainer.addEventListener("mouseleave", () => {
dockItems. forEach((item) => {
item.isHovered = item.isNeighbor = false;
});
updateDockItems();
});




// visible when scroll over 
  

  

const bg = document.querySelector('.img');
const container = document.querySelector('.container');
const navfan = document.querySelector('.navbarfan')
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  // Check if scrolled to bottom (with a small threshold of 10px)
  if (scrollTop + windowHeight >= fullHeight - 10) {
    container.classList.add('visible');
    bg.classList.add('visible');
          document.getElementById("container").style.opacity=1;
          
  } else {
    container.classList.remove('visible');
    bg.classList.remove('visible');
      document.getElementById("container").style.opacity=0;
  }




var body = document.getElementById('body');
var except = document.getElementById('container');
var clickdbl = document.getElementById('clickdbl');

body.addEventListener("click", function () {
  container.classList.add('visible');
   
}, false);
except.addEventListener("click", function (ev) {
     container.classList.remove('visible');
     
    ev.stopPropagation(); //this is important! If removed, you'll get both alerts
}, false);

// document.addEventListener('click', function(event) {
//  navfan.classList.remove('animation');

  
// });

document.addEventListener('click', function(event) {
  // Your code to execute on double click goes here
    navfan.classList.remove('animation');
    
      setTimeout(function () {
         navfan.classList.add('animationremove');
               
        }, 100);
   clickdbl.classList.remove('animationclick');
});


});


  
  function clickends() {
navfan.classList.remove('animationremove');
    
      setTimeout(function () {
       
             navfan.classList.add('animation');  
        }, 100);
     


      setTimeout(function () {
               clickdbl.classList.add('animationclick');
        }, 600);

     
 container.classList.remove('visible');


   
}


function backto(){
   document.getElementById("body").style.animation="visible reverse 1s forwards"
        setTimeout(function () {
          window.location.href = "D://New folder//coding//my website//home//home.html"
               
        }, 2000);}
         


   function python() {
      
       const root = document.documentElement;
      root.style.setProperty('--bgimage', 'url("icons&img/bg3.jpg")');
       bg.classList.add('animation');

       setTimeout(function () {
         bg.classList.remove('animation');
               
        }, 1000);
       
      document.getElementById("crossbtn").style.animation=" visible  2s  ";
      document.getElementById("crossbtn").style.visibility="visible";
    

      var jumpicon = document.getElementById('pythons');
 jumpicon.classList.add('animation');
      setTimeout(function () {
         jumpicon.classList.remove('animation');
               
        }, 3000);
}    

function crossbtn(){
  
  const root = document.documentElement;
      root.style.setProperty('--bgimage', 'url("icons&img/photo-1502790671504-542ad42d5189.jpg")');
    bg.classList.add('animation');
      setTimeout(function () {
         bg.classList.remove('animation');
               
        }, 1000);
      document.getElementById("crossbtn").style.animation=" visible  2s  ";
      document.getElementById("crossbtn").style.visibility="hidden";
     
}