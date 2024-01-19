document.addEventListener('DOMContentLoaded', function() {
  var circle = document.querySelector('.circle');
  var circle2 = document.querySelector('.circle2');
  var circle3 = document.querySelector('.circle3');
  var notesContainer = document.querySelector('.notes-container');
  var circleSave = document.querySelector('.circle-save');
  var backButton = document.querySelector('.fas.fa-chevron-left');
  var List = document.querySelector('.Titles_list');
  var ListField = document.querySelector('.container_title');
  var noteTitleInput = document.getElementById('note-title');
  var noteContentInput = document.getElementById('note-content');
  var titlesList = document.getElementById('titles-list');

titlesList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            var selectedIndex = Array.from(titlesList.children).indexOf(event.target);
            var selectedNote = savedNotes[selectedIndex];

            // Populate the existing form fields with the selected note's title and content
            noteTitleInput.value = selectedNote.title;
            noteContentInput.value = selectedNote.content;

            // Display the existing form container
            notesContainer.style.display = 'block';

            // Hide other elements if needed
            circle.style.display = 'none';
            circle2.style.display = 'none';
            circle3.style.display = 'none';
            circleSave.style.display = 'none';
            List.style.display = 'none';
            ListField.style.display = 'none';
        }
    });

  circle.addEventListener('click', function() {
    List.style.display = 'none';
    ListField.style.display = 'none';
    circle.style.display = 'none';
    circle2.style.display = 'block';
    circle3.style.display = 'block';
    circle2.style.left = '30vw';
    circle3.style.left = '71vw';
    localStorage.setItem('currentPage', 'circle2');
  });

  circle3.addEventListener('click', function() {
    circle.style.display = 'none';
    circle2.style.display = 'none';
    circle3.style.display = 'none';
    notesContainer.style.display = 'block';
    ListField.style.display = 'none';
    circleSave.style.display = 'block';
    localStorage.setItem('currentPage', 'notesContainer');
  });

  circle2.addEventListener('click', function() {
    circle.style.display = 'none';
    circle2.style.display = 'none';
    circle3.style.display = 'none';
    notesContainer.style.display = 'none';
    circleSave.style.display = 'none';
    List.style.display = 'block';
    ListField.style.display = 'block';
    localStorage.setItem('currentPage', 'notesContainer');
  });


    backButton.addEventListener('click', function() {
    var currentPage = localStorage.getItem('currentPage');
    if (currentPage === 'circle2' || currentPage === 'circle3') {
      circle.style.display = 'flex';
      circle2.style.display = 'none';
      circle3.style.display = 'none';
      notesContainer.style.display = 'none';
      circleSave.style.display = 'none';
      List.style.display = 'none';
      ListField.style.display = 'none';
      localStorage.setItem('currentPage', 'circle');
    } else if (currentPage === 'notesContainer') {
      circle.style.display = 'none';
      circle2.style.display = 'block';
      circle3.style.display = 'block';
      notesContainer.style.display = 'none';
      circleSave.style.display = 'none';
      localStorage.setItem('currentPage', 'circle2');
      List.style.display = 'none';
      ListField.style.display = 'none';
    }
  });

var savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    renderTitlesList(savedNotes);

    circleSave.addEventListener('click', function () {
        var title = noteTitleInput.value.trim();
        var content = noteContentInput.value.trim();
        if (title !== '') {
            // Dodaj nową notatkę do listy
            var newNote = { title: title, content: content };
            savedNotes.push(newNote);

            // Zapisz notatki w localStorage
            localStorage.setItem('notes', JSON.stringify(savedNotes));

            // Wyrenderuj listę tytułów
            renderTitlesList(savedNotes);

            // Czyszczenie pól po dodaniu notatki
            noteTitleInput.value = '';
            noteContentInput.value = '';
        }
    });



    function renderTitlesList(notes) {
        // Wyczyść listę przed ponownym renderowaniem
        titlesList.innerHTML = '';

        // Renderuj każdą notatkę jako element listy
        notes.forEach(function (note) {
            var newTitleItem = document.createElement('li');
            newTitleItem.textContent = note.title;
            titlesList.appendChild(newTitleItem);
        });
    }

  hideElements();

  function hideElements() {
    List.style.display = 'none';
    circle2.style.display = 'none';
    circle3.style.display = 'none';
    notesContainer.style.display = 'none';
    circleSave.style.display = 'none';
    ListField.style.display = 'none';
  }
});