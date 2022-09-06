class Modal {
    static showModal() {
        const modalBtn = document.getElementById('modal-btn');
        const modalRecovery = document.getElementById('modal-recovery');
        modalBtn.addEventListener('click', () => {
            modalRecovery.classList.toggle('modal-wrapper');
        });
    }
    static closeModal() {
        const closeBtn = document.querySelector('.button-close');
        const modalRecovery = document.getElementById('modal-recovery');
        closeBtn.addEventListener('click', () => {
            modalRecovery.classList.toggle('modal-wrapper');
        });
    }
}
Modal.showModal();
Modal.closeModal();
