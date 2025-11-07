document.addEventListener('DOMContentLoaded', () => {
   const body = document.body;
   const heroSection = document.getElementById('hero-section');
   const contentSection = document.getElementById('content-section');
   const finalSection = document.getElementById('final-section');
   const nextSection = document.getElementById('next-section');
   const hiSection = document.getElementById('hi-section');
    const helloSection = document.getElementById('hello-section');
     const nopeSection = document.getElementById('nope-section');
     const yesSection = document.getElementById('yes-section');
      const tadaSection = document.getElementById('tada-section');


   const sections = [
       { element: heroSection, className: 'blue-bg' },
       { element: contentSection, className: 'green-bg' },
       { element: finalSection, className: 'red-bg' }
       { element: nextSection, className: 'yellow-bg' }
       { element: hiSection, className: 'orange-bg' }
       { element: helloSection, className: 'purple-bg' }
       { element: nopeSection, className: 'grey-bg' }
        { element: nopeSection, className: 'cool-bg' }
         { element: tadaSection, className: 'amazing-bg' }
   ];

   function updateBackground() {
       const scrollPosition = window.scrollY + window.innerHeight / 2; // Check midpoint of viewport

       for (let i = sections.length - 1; i >= 0; i--) {
           const section = sections[i];
           if (scrollPosition >= section.element.offsetTop) {
               body.className = ''; // Clear existing classes
               body.classList.add(section.className);
               break;
           }
       }
   }

   // Set initial background
   updateBackground();

   // Listen for scroll events
   window.addEventListener('scroll', updateBackground);
});
