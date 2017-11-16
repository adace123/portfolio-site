document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll('.projects div a').forEach(project => {
       project.addEventListener('mouseenter', e => {
           e.target.querySelector('.project').style.transform = 'rotateY(180deg)';
       });
       
       project.addEventListener('mouseleave', e => {
           e.target.querySelector('.project').style.transform = 'rotateY(0deg)';
       });
   });
});
