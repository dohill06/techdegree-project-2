/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables 
***/
const students = document.querySelectorAll('.student-item');
const studentsPerPage = 10;




 /*  Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
*/
const showPage = (list, page) => {
   for (let i = 0; i < list.length; i ++) {
      if ( i >= (page * studentsPerPage) - studentsPerPage && i < (page * studentsPerPage) ) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
   }
}



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
   const pagesNeeded = Math.ceil(list.length / studentsPerPage);
   const div = document.createElement('div');
   div.classList.add('pagination');
   const pageDiv = document.querySelector('.page');
   pageDiv.appendChild(div);
   const ul = document.createElement('ul');
   div.appendChild(ul);
   for (let i = 1; i <= pagesNeeded; i ++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      a.textContent = i;
      a.href = '#';
      li.appendChild(a);
      a.addEventListener('click', (e) => {
         showPage(students, i);
         const buttons = document.getElementsByTagName('a');
         for (let i = 0; i < buttons.length; i ++) {
            buttons[i].classList.remove('active');
         }
         if (e.target) {
            a.classList.add('active');
         }
      });
   } 
}
   
showPage(students, 1)    
appendPageLinks(students);


