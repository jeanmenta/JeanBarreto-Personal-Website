const ball = document.getElementsByClassName('ball');
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  if (ball.length > 0) {
    for (let i = 0; i < ball.length; i++) {
      ball[i].style.left = x;
      ball[i].style.top = y;
      ball[i].transform = 'translate(-' + x + ',-' + y + ')';
    }
  }
};

function setEqualHeight() {
  const cards = document.querySelectorAll('.project-card');
  let maxHeight = 0;

  // Reset card body heights to auto
  cards.forEach((card) => {
    card.querySelector('.card-body').style.height = 'auto';
  });

  // Find the tallest card body
  cards.forEach((card) => {
    const cardBodyHeight = card.querySelector('.card-body').offsetHeight;
    if (cardBodyHeight > maxHeight) {
      maxHeight = cardBodyHeight;
    }
  });

  // Set all card bodies to the tallest height
  cards.forEach((card) => {
    card.querySelector('.card-body').style.height = `${maxHeight}px`;
  });
}

// Call the function on window load and resize events
window.addEventListener('load', setEqualHeight);
window.addEventListener('resize', setEqualHeight);
