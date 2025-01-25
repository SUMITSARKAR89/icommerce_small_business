const accPrice = document.querySelectorAll('.acc-price');
const accShip = document.querySelectorAll('.acc-ship');
const accReturn = document.querySelectorAll('.acc-return');
const accSupport = document.querySelectorAll('.acc-support');

accPrice.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("price-active");
    })
});
accShip.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("ship-active");
    })
});
accReturn.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("return-active");
    })
});
accSupport.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("support-active");
    })
});



// <===============================barkmood=================================>



let darkmood = localStorage.getItem('darkmood');
const controlTheme = document.querySelector("#control-icon");

const enableDarkmode = () => {
document.body.classList.add('darkmood')
localStorage.setItem('darkmood', 'active')
}

const disableDarkmood = () => {
document.body.classList.remove('darkmood')
localStorage.setItem('darkmood', null)
}

if(darkmood === "active") enableDarkmode()

controlTheme.addEventListener("click", () => {

darkmood = localStorage.getItem('darkmood')
darkmood !== "active" ? enableDarkmode() : disableDarkmood()
});






// <===============================nav dropsown=================================>
    const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(link => {
    link.addEventListener('click', () => {
        if(link.classList.contains('nav-active')){
            link.classList.remove('nav-active');
        }else{
            navLink.forEach( a => {
                a.classList.remove('nav-active');
            })
            link.classList.toggle('nav-active');
        }
    })
});

// <===============================nav scroll bar================================>
window.onscroll = function(){
    scrollbarNavigation();
};
function scrollbarNavigation(){
    const header = document.querySelector("header");

    if(document.body.scrollTop > 40 || document.documentElement.scrollTop >20){
        header.style.top = "";
    }else{
        header.style.top = "-200px"
    }
};

// <====================================menu bar================================>
    const menuIcon = document.querySelector("#menu-bar");
    const navOpen = document.querySelector("nav.nav");
    const navClose = document.querySelector("#closeMenu");
    const searchBody = document.querySelector("#search-menu");
    const searchOpen = document.querySelector("#openSearch");
    const searchClose = document.querySelector("#closeSearch");

    menuIcon.addEventListener('click', () => {
        navOpen.style.left = "0";
    });
    navClose.addEventListener('click', () => {
        navOpen.style.left = "-100%"

    });
    searchOpen.addEventListener('click', () => {
        searchBody.style.left = "0";
    });
    searchClose.addEventListener('click', () => {
        searchBody.style.left = "-100%";
    });



   
    

    // ------------------------- faq panels--------------------------------


    const faqBtns = document.querySelectorAll('.faqBtn');
    const faqPanal = document.querySelectorAll('.faq-panal');
    let line = document.querySelector('.line');
   faqBtns.forEach( (btn, index) => {
    btn.addEventListener('click', (e) => {

        // this is for btn 
        faqBtns.forEach( btn => {
            btn.classList.remove('faq-active')
        })
        btn.classList.add('faq-active');

         // Align horizontally
        line.style.top = e.target.offsetTop + "px";   
        line.style.height = e.target.offsetHeight + "px";

        // this is for content 
        faqPanal.forEach(content => {
            content.classList.remove('faq-active');
        })
        faqPanal[index].classList.add('faq-active');
    });
   
});



// ----------------------------blog page---------------------------------
//     const blogClosed = document.querySelector('.blogClosed');
//     const blogModal = document.querySelector('.blogModal');
//     blogClosed.addEventListener('click', () => {
//         blogModal.style.display = "none";
       
//     });
   
    
//     const homeBlogCard = document.querySelectorAll('.homeBlog-card');
//     const blogModalBody = document.querySelectorAll('.blog-modal-body');

// homeBlogCard.forEach( (btn, index) => {
//     btn.addEventListener('click', () => {

//        homeBlogCard.forEach( btn => {
//             btn.classList.remove('blog-active');
//             blogModal.style.display = "flex";
//         })
//         btn.classList.add('blog-active');

//         blogModalBody.forEach(content => {
//             content.classList.remove('blog-active');
//             blogModal.style.display = "flex";
//         })
//         blogModalBody[index].classList.add('blog-active');
        

//     })
   
// });

// Select necessary elements
const blogClosed = document.querySelector('.blogClosed');
const blogModal = document.querySelector('.blogModal');
const homeBlogCards = document.querySelectorAll('.homeBlog-card');
const blogModalBodies = document.querySelectorAll('.blog-modal-body');

// Function to safely select an element or log a warning
const safeSelect = (element, name) => {
    if (!element) console.warn(`${name} not found in the DOM.`);
    return element;
};

// Ensure elements exist
safeSelect(blogClosed, 'blogClosed');
safeSelect(blogModal, 'blogModal');
if (homeBlogCards.length === 0) console.warn('No elements found for .homeBlog-card');
if (blogModalBodies.length === 0) console.warn('No elements found for .blog-modal-body');

// Function to close the modal
const closeModal = () => {
    if (blogModal) blogModal.style.display = "none";
};

// Function to activate a specific modal content
const activateModalContent = (index) => {
    if (!blogModal) return;

    // Remove active state from all cards and modal bodies
    homeBlogCards.forEach(card => card.classList.remove('blog-active'));
    blogModalBodies.forEach(body => body.classList.remove('blog-active'));

    // Add active state to the selected card and modal body
    homeBlogCards[index]?.classList.add('blog-active');
    blogModalBodies[index]?.classList.add('blog-active');

    // Display the modal
    blogModal.style.display = "flex";
};

// Close modal when the close button is clicked
if (blogClosed) blogClosed.addEventListener('click', closeModal);

// Add click event listeners to each blog card
homeBlogCards.forEach((card, index) => {
    card.addEventListener('click', () => activateModalContent(index));
});


 // <====================================slider twor================================>
    const sliderTwo = document.querySelector('.slider-two');
 const sliderTwoPrev = document.querySelector('#w-leftBtn');
 const sliderTwoNext = document.querySelector('#w-rightBtn');
 
 sliderTwo.addEventListener('wheel', (index) => {
     index.preventDefault();
     sliderTwo.scrollLeft += index.deltaY;
     sliderTwo.style.scrollBehaviour = "auto";
 });
 
 sliderTwoNext.addEventListener('click', () => {
     sliderTwo.style.scrollBehaviour = "smooth";
     sliderTwo.scrollLeft += 1200;
     
 });
 sliderTwoPrev.addEventListener('click', () => {
     sliderTwo.style.scrollBehaviour = "smooth";
     sliderTwo.scrollLeft -= 1200;
     
 });




// <====================================trending one================================>
const trLeftBtn = document.getElementById("tr-left");
const trRightBtn = document.getElementById("tr-right");
const sliderEight = document.getElementById("slider-eight");

// == next btn == 
trRightBtn.addEventListener("click", nextPage);
function nextPage(){
    sliderEight.appendChild(sliderEight.firstElementChild);
};

// == privious btn == 
trLeftBtn.addEventListener("click", previousPage);
function previousPage(){
    sliderEight.prepend(sliderEight.lastElementChild);
};

// <====================================trending two================================>
const trLeftBtn2 = document.getElementById("tr-left2");
const trRightBtn2 = document.getElementById("tr-right2");
const sliderEight2 = document.getElementById("slider-eight2");

// == next btn == 
trRightBtn2.addEventListener("click", nextPage2);
function nextPage2(){
    sliderEight2.appendChild(sliderEight2.firstElementChild);
};

// == privious btn == 
trLeftBtn2.addEventListener("click", previousPage2);
function previousPage2(){
    sliderEight2.prepend(sliderEight2.lastElementChild);
};

    

// ==========================================================
// ==========================================================

