document.addEventListener('DOMContentLoaded', function() {
  var circle = document.querySelector('.circle');

  circle.addEventListener('click', function() {
    var circleTop = circle.getBoundingClientRect().top; // Get the top position of circle1

    circle.style.display = 'none'; // Hide circle1

    var circle2 = document.createElement('div');
    circle2.classList.add('circle2');
    circle2.innerHTML = '<h2>Current main list</h2>'; // Update text content for circle2
    circle2.style.top = circleTop + 'px'; // Set the top position of circle2
    circle2.style.display = 'block'; // Make circle2 visible

    var circle3 = document.createElement('div');
    circle3.classList.add('circle3');
    circle3.innerHTML = '<h2>Add new notes</h2>'; // Update text content for circle3
    circle3.style.top = circleTop + 'px'; // Set the top position of circle3
    circle3.style.display = 'block'; // Make circle3 visible

    document.body.appendChild(circle2);
    document.body.appendChild(circle3);

    circle2.style.left = '30%'; // Adjust the left position for circle2
    circle3.style.left = '70%'; // Adjust the left position for circle3
  });

  // Initially hide circle2 and circle3
  var circle2 = document.querySelector('.circle2');
  var circle3 = document.querySelector('.circle3');
  if (circle2 && circle3) {
    circle2.style.display = 'none';
    circle3.style.display = 'none';
  }
});
