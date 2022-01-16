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

// Selects all the question elements

const questions = document.querySelectorAll('.question');

// Iterates over every question element

questions.forEach(function (question) {
  // constants for every element inside the current question element

  const btn = question.querySelector('.questionBtn');
  const plusBtn = question.querySelector('.plusBtn');
  const minusBtn = question.querySelector('.minusBtn');
  const questionText = question.querySelector('.questionText');

  // Add's an click event listener to the button element inside of the current question element

  btn.addEventListener('click', function () {
    // iterate over the question elements again

    questions.forEach(function (item) {
      // If the question element that is been iterated over again is not the same as the current question then remove the following classes

      if (item.querySelector('.questionText') !== questionText) {
        item
          .querySelector('.questionText')
          .classList.remove('questionTextActive');
        item.querySelector('.plusBtn').classList.remove('plusBtnInactive');
        item.querySelector('.minusBtn').classList.remove('minusBtnInactive');
      }
    });

    // Once the current question's button is clicked it will then toggle the following classes

    plusBtn.classList.toggle('plusBtnInactive');
    minusBtn.classList.toggle('minusBtnInactive');
    questionText.classList.toggle('questionTextActive');
  });
});
