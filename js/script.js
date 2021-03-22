const body = document.querySelector('.page-body');
const sliderButtons = body.querySelectorAll('.slider-controls button');
const modal =  body.querySelector('.callback');
const modalForm =  modal.querySelector('.modal');
const inputName = modal.querySelector('#callback-name');
const inputMail = modal.querySelector('#callback-email');
const modalBtn = body.querySelector('.btn-reach');
const closeBtn = body.querySelector('.close');
let currentSliderBtn = Array.from(sliderButtons).filter(btn => btn.classList.contains('current'))[0];

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  modalForm.classList.add('modal-open');
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modalForm.classList.remove('modal-open');
});

modalForm.addEventListener('submit', function (evt) {
  if (!inputName.value || !inputMail.value) {
    evt.preventDefault();
    modalForm.classList.remove("modal-error");
    modalForm.offsetWidth = modal.offsetWidth;
    modalForm.classList.add("modal-error");
  }
});

sliderButtons.forEach(btn => {
  btn.addEventListener('click', evt => {
    if(!evt.target.classList.contains('current')) {
      evt.target.classList.toggle('btn-controls');
      evt.target.classList.toggle('current');
      currentSliderBtn.classList.toggle('current');
      currentSliderBtn.classList.toggle('btn-controls');
      body.classList.toggle(`bg-slider-${currentSliderBtn.dataset.color}`);
      body.classList.toggle(`bg-slider-${evt.target.dataset.color}`);
      currentSliderBtn = evt.target;
    }
  });
});
