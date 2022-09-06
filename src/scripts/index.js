class Modal {
    static showModal() {
        const modalBtn = document.querySelector('.modal-btn');
        const modal = document.getElementById('modal');
        modalBtn.addEventListener('click', () => {
            modal.classList.toogle('hidden');
        });
    }
    static closeModal() {
        const closeBtn = document.querySelector('.close');
        const modal = document.getElementById('modal');
        closeBtn.addEventListener('click', () => {
            modal.classList.toogle('hidden');
        });
    }
}
Modal.showModal();
Modal.closeModal();
