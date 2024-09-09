function buttonClicked(id) {
  const body = document.querySelector('body');
  body.style.backgroundColor = id;

  const face = document.querySelectorAll('.face');
  for (let i = 0; i < face.length; i++) {
    face[i].style.color = id;
  }
}
