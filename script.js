// const questionBtns = document.querySelectorAll('.questionBtn');

// questionBtns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const questionText = e.currentTarget.parentElement.nextElementSibling;
//     const minusBtn = e.currentTarget.children[0];
//     const plusBtn = e.currentTarget.children[1];

//     plusBtn.classList.toggle('plusBtnInactive');
//     minusBtn.classList.toggle('minusBtnInactive');
//     questionText.classList.toggle('questionTextActive');
//   });
// });

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  const btn = question.querySelector('.questionBtn');
  const plusBtn = question.querySelector('.plusBtn');
  const minusBtn = question.querySelector('.minusBtn');
  const questionText = question.querySelector('.questionText');

  btn.addEventListener('click', function () {
    questions.forEach(function (item) {
      if (item.querySelector('.questionText') !== questionText) {
        item
          .querySelector('.questionText')
          .classList.remove('questionTextActive');
        item.querySelector('.plusBtn').classList.remove('plusBtnInactive');
        item.querySelector('.minusBtn').classList.remove('minusBtnInactive');
      }
    });

    plusBtn.classList.toggle('plusBtnInactive');
    minusBtn.classList.toggle('minusBtnInactive');
    questionText.classList.toggle('questionTextActive');
  });
});
