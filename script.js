document.addEventListener('DOMContentLoaded', () => {
   const body = document.body;
   const heroSection = document.getElementById('hero-section');
   const contentSection = document.getElementById('content-section');
   const finalSection = document.getElementById('final-section');
   const nextSection = document.getElementById('next-section');
   const hiSection = document.getElementById('hi-section');
   const helloSection = document.getElementById('hello-section');
   const nopeSection = document.getElementById('nope-section');
   const tadaSection = document.getElementById('tada-section');
   const bravoSection = document.getElementById('bravo-section');
   const yesSection = document.getElementById('yes-section');


   const sections = [
       { element: heroSection, className: 'arcadia' },
       { element: contentSection, className: 'blackwell-academy' },
       { element: finalSection, className: 'madsen-house' }
       { element: nextSection, className: 'two-whales' }
       { element: hiSection, className: 'junkyard' }
       { element: helloSection, className: 'beach' }
       { element: nopeSection, className: 'hospital' }
       { element: nopeSection, className: 'barn' }
       { element: tadaSection, className: 'dark-room' }
       { element: bravoSection, className: 'lighthouse' }
       { element: yesSection, className: 'debrief' }
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

   updateBackground();

   window.addEventListener('scroll', updateBackground);
});
