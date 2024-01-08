document.addEventListener('DOMContentLoaded', function() {
  var circle = document.querySelector('.circle');
  var circle2 = document.querySelector('.circle2');
  var circle3 = document.querySelector('.circle3');
  var notesContainer = document.querySelector('.notes-container');
  var circleSave = document.querySelector('.circle-save');

  circle.addEventListener('click', function() {
    circle.style.display = 'none'; // Hide circle1
    circle2.style.display = 'block'; // Make circle2 visible
    circle3.style.display = 'block'; // Make circle3 visible

    circle2.style.left = '30%'; // Adjust the left position for circle2
    circle3.style.left = '70%'; // Adjust the left position for circle3
  });

  circle3.addEventListener('click', function() {
    circle.style.display = 'none'; // Hide circle1
    circle2.style.display = 'none'; // Hide circle2
    circle3.style.display = 'none'; // Hide circle3
    notesContainer.style.display = 'block'; // Show notes form
    circleSave.style.display = 'block';
  });

  // Initially hide circle2, circle3, and notes container
  if (circle2 && circle3 && notesContainer && circleSave) {
    circle2.style.display = 'none';
    circle3.style.display = 'none';
    notesContainer.style.display = 'none';
    circleSave.style.display = 'none';
  }
});
