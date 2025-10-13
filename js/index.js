// navbar
   window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".transparent-navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

// banner

// Banner background images configuration
const bannerImages = [
  './img/banner12.png',
  './img/banner11.png',
  './img/banner6.png',
  './img/banner8.png',
  './img/banner7.png',
  './img/banner5.png',
  './img/banner4.png'
];

// Apply background images to banners on page load
document.addEventListener('DOMContentLoaded', function() {
  const banners = document.querySelectorAll('.banner');
  
  banners.forEach((banner, index) => {
    if (bannerImages[index]) {
      banner.style.backgroundImage = `url('${bannerImages[index]}')`;
    }
  });
});

// Optional: Banner carousel functionality
let currentBanner = 0;
const banners = document.querySelectorAll('.banner');

function showNextBanner() {
  banners[currentBanner].classList.remove('active');
  currentBanner = (currentBanner + 1) % banners.length;
  banners[currentBanner].classList.add('active');
}

// Auto-rotate banners every 6 seconds
setInterval(showNextBanner, 6000);

// Scroll down functionality
function scrollToSection() {
  const heroSection = document.querySelector('.hero');
  const nextSection = heroSection.nextElementSibling;
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}

  

  // Scroll down to next section
// Scroll to next section
// function scrollToSection() {
//   document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
// }
  function scrollToSection() {
    document.querySelector('.about-section').scrollIntoView({ behavior: 'smooth' });
  }


// service



    // sections.forEach((section, index) => {
    //     const start = vh * index;
    //     const end = vh * (index + 1);
    //     const progress = Math.max(0, Math.min(1, (scrollY - start) / (end - start)));

    //     if (scrollY >= start && scrollY < end) {
    //         section.style.transform = `translateY(${progress * -50}px)`;
    //         section.style.opacity = 1;
    //     } else if (scrollY < start) {
    //         section.style.opacity = 0;
    //         section.style.transform = 'translateY(0px)';
    //     } else {
    //         section.style.opacity = 1;
    //         section.style.transform = 'translateY(-50px)';
    //     }
    // });


//  const sections = document.querySelectorAll('.service');

//         window.addEventListener('scroll', () => {
//             const scrollY = window.scrollY;
//             const sectionHeight = 500; // Each section is 500px tall

//             sections.forEach((section, index) => {
//                 const start = sectionHeight * index;
//                 const end = sectionHeight * (index + 1);
//                 const progress = (scrollY - start) / (end - start);

//                 if (scrollY >= start && scrollY < end) {
//                     section.style.transform = `translateY(${progress * -50}px)`;
//                     section.style.opacity = 1;
//                 } else if (scrollY < start) {
//                     section.style.opacity = 0;
//                 } else {
//                     section.style.opacity = 1;
//                     section.style.transform = 'translateY(-50px)';
//                 }
//             });
//         });



        // opacity low 

       const sections = document.querySelectorAll('.service');

         window.addEventListener('scroll', () => {
           const scrollY = window.scrollY;
           const vh = window.innerHeight;

           sections.forEach((section, index) => {
             const start = vh * index;
             const end = vh * (index + 1);
            const progress = (scrollY - start) / (end - start);

             if (scrollY >= start && scrollY < end) {
               section.style.transform = `translateY(${progress * -50}px)`;
               section.style.opacity = 1;
             } else if (scrollY < start) {
               section.style.opacity = 0;
           } else {
               section.style.opacity = 1;
               section.style.transform = 'translateY(-50px)';
             }
           });
         });


// const sections = document.querySelectorAll('.service');

//   window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;
//     const vh = window.innerHeight;

//     sections.forEach((section, index) => {
//       const start = vh * index;
//       const end = vh * (index + 1);
//       const progress = (scrollY - start) / (end - start);

//       if (scrollY >= start && scrollY < end) {
//         section.style.transform = `translateY(${progress * -50}px)`;
//         section.style.opacity = 1;
//       } else if (scrollY < start) {
//         section.style.opacity = 0;
//       } else {
//         section.style.opacity = 1;
//         section.style.transform = 'translateY(-50px)';
//       }
//     });
//   });




const wrapper = document.getElementById('swiperWrapper');

// Duplicate buttons for infinite scroll
const buttons = Array.from(wrapper.children);
buttons.forEach(btn => {
  const clone = btn.cloneNode(true);
  wrapper.appendChild(clone);
});

// Feature button click effect
document.querySelectorAll('.why-choose-us .feature-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const feature = this.querySelector('span').textContent;
    console.log('Selected feature:', feature);

    this.style.transform = 'translateX(-15px) scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 300);
  });
});

// Mouse wheel speed control
const container = document.querySelector('.why-choose-us .swiper-container');
container.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (e.deltaY > 0) {
    wrapper.style.animationDuration = '15s';
    setTimeout(() => {
      wrapper.style.animationDuration = '25s';
    }, 1000);
  } else {
    wrapper.style.animationDuration = '35s';
    setTimeout(() => {
      wrapper.style.animationDuration = '25s';
    }, 1000);
  }
});