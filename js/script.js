/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


//Added global variables 

let students = document.querySelectorAll('.student-item');
const studentsPerPage = 10;
let studentList = Array.from(students);
const pageDiv = document.querySelector('.page');
/*  
Created the showPage function to hide all of the items in the 
list except for the items to show.
*/
const showPage = (list, page) => {
   for (let i = 0; i < list.length; i++) {
      if (i >= (page * studentsPerPage) - studentsPerPage && i < (page * studentsPerPage)) {
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
   pageDiv.appendChild(div);
   const ul = document.createElement('ul');
   div.appendChild(ul);
   for (let i = 1; i <= pagesNeeded; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      a.textContent = i;
      a.href = '#';
      li.appendChild(a);
      a.addEventListener('click', (e) => {
         showPage(list, i);
         const buttons = document.getElementsByTagName('a');
         for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
         }
         if (e.target) {
            a.classList.add('active');
         }
      });
   }
}


//Called functions

showPage(studentList, 1);
appendPageLinks(studentList);


/*
Added searchBar function to generate, append, and add 
functionality to the search bar.
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

   searchInput.addEventListener('keyup', () => {
      searchFunction();
   });
   searchButton.addEventListener('click', () => {
      searchFunction();
   });
}

//Called searchBar function
searchBar();

//Added searchFunction for search bar functionality

const searchFunction = () => {
   const textInput = document.querySelector('input').value.toLowerCase();
   studentList.length = 0;
   const result = document.querySelectorAll('h3');

   for (let i = 0; i < students.length; i++) {
      if (result[i].innerHTML.includes(textInput)) {
         studentList.push(students[i])
      } else {
         result[i].parentNode.parentNode.style.display = 'none';
      }
   }

   noStudents();
   showPage(studentList, 1);
   appendPageLinks(studentList)
   const pagDiv = document.querySelector('.pagination');
   if (pagDiv !== null) {
      pageDiv.removeChild(pagDiv);

   }
}

//Added noStudents function to add message if no students are found

const noStudents = () => {
   const h2 = document.querySelector('h2');
   if (studentList.length === 0) {
      h2.textContent = 'No Students Found';
   } else if (studentList.length > 0) {
      h2.textContent = 'Students';
   }
}
      



















