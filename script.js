const iris = document.getElementsByClassName('ball');
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
    iris[i].style.left = x;
    iris[i].style.top = y;
    iris[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};

