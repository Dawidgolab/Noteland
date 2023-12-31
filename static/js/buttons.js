document.addEventListener('DOMContentLoaded', function() {
  var circle = document.querySelector('.circle');

  circle.addEventListener('click', function() {
    var circleTop = circle.getBoundingClientRect().top; // Get the top position of circle1

    circle.style.display = 'none'; // Hide circle1


    circle2.classList.add('circle2');
    circle2.style.display = 'block'; // Make circle2 visible

    circle3.classList.add('circle3');
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
