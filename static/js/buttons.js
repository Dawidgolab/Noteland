document.addEventListener('DOMContentLoaded', function() {
  var circle = document.querySelector('.circle');
  var circle2 = document.querySelector('.circle2');
  var circle3 = document.querySelector('.circle3');
  var notesContainer = document.querySelector('.notes-container');
  var circleSave = document.querySelector('.circle-save');
  var backButton = document.querySelector('.fas.fa-chevron-left');


  circle.addEventListener('click', function() {
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
    circleSave.style.display = 'block';
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
      localStorage.setItem('currentPage', 'circle');
    } else if (currentPage === 'notesContainer') {
      circle.style.display = 'none';
      circle2.style.display = 'block';
      circle3.style.display = 'block';
      notesContainer.style.display = 'none';
      circleSave.style.display = 'none';
      localStorage.setItem('currentPage', 'circle2');
    }
  });

  hideElements();

  function hideElements() {
    circle2.style.display = 'none';
    circle3.style.display = 'none';
    notesContainer.style.display = 'none';
    circleSave.style.display = 'none';
  }
});
