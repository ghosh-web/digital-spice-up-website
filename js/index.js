
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
document.addEventListener('DOMContentLoaded', function() {
  const banners = document.querySelectorAll('.banner');
  
  banners.forEach((banner, index) => {
    if (bannerImages[index]) {
      banner.style.backgroundImage = `url('${bannerImages[index]}')`;
    }
  });
});

let currentBanner = 0;
const banners = document.querySelectorAll('.banner');

function showNextBanner() {
  banners[currentBanner].classList.remove('active');
  currentBanner = (currentBanner + 1) % banners.length;
  banners[currentBanner].classList.add('active');
}
setInterval(showNextBanner, 6000);

function scrollToSection() {
  const heroSection = document.querySelector('.hero');
  const nextSection = heroSection.nextElementSibling;
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}
// scroll
  function scrollToSection() {
    document.querySelector('.about-section').scrollIntoView({ behavior: 'smooth' });
  }
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

// why choose us
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

// team

// const track = document.getElementById('carouselTrack');
//     const teamMembers = document.querySelectorAll('.single-team');
//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');
//     const indicatorsContainer = document.getElementById('indicators');
    
//     let currentIndex = 0;
//     const totalMembers = teamMembers.length;
//     let autoSlideInterval;
//     let itemsPerView = 4;

//     function updateItemsPerView() {
//       const width = window.innerWidth;
//       if (width <= 768) {
//         itemsPerView = 1;
//       } else if (width <= 1200) {
//         itemsPerView = 3;
//       } else {
//         itemsPerView = 4;
//       }
//     }

//     function createIndicators() {
//       indicatorsContainer.innerHTML = '';
//       const maxIndex = totalMembers - itemsPerView;
//       for (let i = 0; i <= maxIndex; i++) {
//         const indicator = document.createElement('div');
//         indicator.classList.add('indicator');
//         if (i === 0) indicator.classList.add('active');
//         indicator.addEventListener('click', () => goToSlide(i));
//         indicatorsContainer.appendChild(indicator);
//       }
//     }

//     function updateCarousel() {
//       const slideWidth = teamMembers[0].offsetWidth + 30; // width + gap
//       track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      
//       const indicators = document.querySelectorAll('.indicator');
//       indicators.forEach((indicator, index) => {
//         indicator.classList.toggle('active', index === currentIndex);
//       });

//       // Update button states
//       const maxIndex = totalMembers - itemsPerView;
//       prevBtn.disabled = currentIndex === 0;
//       nextBtn.disabled = currentIndex >= maxIndex;
//     }

//     function nextSlide() {
//       const maxIndex = totalMembers - itemsPerView;
//       if (currentIndex < maxIndex) {
//         currentIndex++;
//         updateCarousel();
//       }
//     }

//     function prevSlide() {
//       if (currentIndex > 0) {
//         currentIndex--;
//         updateCarousel();
//       }
//     }

//     function goToSlide(index) {
//       currentIndex = index;
//       updateCarousel();
//       resetAutoSlide();
//     }

//     function startAutoSlide() {
//       autoSlideInterval = setInterval(() => {
//         const maxIndex = totalMembers - itemsPerView;
//         if (currentIndex >= maxIndex) {
//           currentIndex = 0;
//         } else {
//           currentIndex++;
//         }
//         updateCarousel();
//       }, 3000);
//     }

//     function resetAutoSlide() {
//       clearInterval(autoSlideInterval);
//       startAutoSlide();
//     }

//     prevBtn.addEventListener('click', () => {
//       prevSlide();
//       resetAutoSlide();
//     });

//     nextBtn.addEventListener('click', () => {
//       nextSlide();
//       resetAutoSlide();
//     });

//     window.addEventListener('resize', () => {
//       updateItemsPerView();
//       createIndicators();
//       currentIndex = 0;
//       updateCarousel();
//     });

  
    // updateItemsPerView();
    
    // updateCarousel();
    // startAutoSlide();

    // track.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    // track.addEventListener('mouseleave', startAutoSlide);
 const taglineElement = document.getElementById('tagline');
    const featureBtns = document.querySelectorAll('.feature-btn');
    const swiperWrapper = document.getElementById('swiperWrapper');
    const defaultTagline = "Digital Spice Up — because your brand deserves to shine online.";
    
    let resetTimeout;

    featureBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all buttons
        featureBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Update tagline
        const newTagline = this.getAttribute('data-tagline');
        taglineElement.textContent = newTagline;
        
        // Pause animation
        swiperWrapper.style.animationPlayState = 'paused';
        
        // Clear existing timeout
        clearTimeout(resetTimeout);
        
        // Reset after 5 seconds
        resetTimeout = setTimeout(() => {
          taglineElement.textContent = defaultTagline;
          featureBtns.forEach(b => b.classList.remove('active'));
          swiperWrapper.style.animationPlayState = 'running';
        }, 3000);
      });
    });


//  project

// Simple and working project tabs
document.addEventListener('DOMContentLoaded', function () {
  // Get all tab buttons and content panes
  const tabButtons = document.querySelectorAll('#nav-tab .nav-link');
  const tabContents = document.querySelectorAll('#nav-tabContent .tab-pane');

  // Function to hide all tabs
  function hideAllTabs() {
    tabContents.forEach(function(content) {
      content.classList.remove('show', 'active');
    });
    
    tabButtons.forEach(function(button) {
      button.classList.remove('active');
      button.setAttribute('aria-selected', 'false');
    });
  }

  // Function to show specific tab
  function showTab(targetId, clickedButton) {
    // Hide all first
    hideAllTabs();
    
    // Show clicked tab content
    const targetContent = document.querySelector(targetId);
    if (targetContent) {
      targetContent.classList.add('active', 'show');
    }
    
    // Mark button as active
    clickedButton.classList.add('active');
    clickedButton.setAttribute('aria-selected', 'true');
  }

  // Add click event to each tab button
  tabButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      showTab(targetId, this);
    });
  });

  // Show first tab by default
  if (tabButtons.length > 0) {
    const firstButton = tabButtons[0];
    const firstTarget = firstButton.getAttribute('href');
    showTab(firstTarget, firstButton);
  }
});