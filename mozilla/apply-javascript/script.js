function createParagraph(i) {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!' +(i+1);
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('button');

  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', function() {createParagraph(i)});
  }