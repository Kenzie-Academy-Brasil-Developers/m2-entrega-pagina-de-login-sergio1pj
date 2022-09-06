class Modal {
    static showModal() {
        const modalBtn = document.getElementById('modal-btn');
        const recovery = document.querySelector('.recovery');
        modalBtn.addEventListener('click', () => {
            recovery.classList.remove('modal-wrapper');
        });
    }
    static closeModal() {
        const closeBtn = document.querySelector('.button-close');
        const recovery = document.querySelector('.recovery');
        closeBtn.addEventListener('click', () => {
            recovery.classList.add('modal-wrapper');
        });
    }
}
Modal.showModal();
Modal.closeModal();
