(() => {
  const refs = {
    openModalBtn: document.querySelector('.menu-btn'),
    closeModalBtn: document.querySelector('.modal-button-close'),
    modal: document.querySelector('.modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
