/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
/*
   Added global variables 
*/
const students = document.querySelectorAll('.student-item');
const studentsPerPage = 10;

/*  
Created the showPage function to hide all of the items in the 
list except for the ten to show.
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

/*
Created the appendPageLinks function to generate, append, and add 
functionality to the buttons.
*/
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

/*
Added search function
*/

const searchBar = () => {
   const pageDiv = document.querySelector('.page-header');
   const searchDiv = document.createElement('div');
   searchDiv.classList.add('student-search');
   pageDiv.appendChild(searchDiv);
   const searchInput = document.createElement('input')
   searchInput.type = 'text';
   searchInput.placeholder = 'Search for students...';
   searchDiv.appendChild(searchInput);
   const searchButton = document.createElement('button');
   searchButton.type = 'button';
   searchButton.textContent = 'Search';
   searchDiv.appendChild(searchButton);
}
/*
Called functions
*/
showPage(students, 1)    
appendPageLinks(students);




   


