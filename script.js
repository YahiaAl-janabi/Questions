const questionBtns = document.querySelectorAll('.questionBtn');

questionBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const questionText = e.currentTarget.parentElement.nextElementSibling;
    const minusBtn = e.currentTarget.children[0];
    const plusBtn = e.currentTarget.children[1];

    plusBtn.classList.toggle('plusBtnInactive');
    minusBtn.classList.toggle('minusBtnInactive');
    questionText.classList.toggle('questionTextActive');
  });
});
