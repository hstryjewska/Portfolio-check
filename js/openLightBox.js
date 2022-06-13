const modalBox = document.querySelector('.modal-holder');

document.getElementById('previewGallery').addEventListener('click', turnOff);
document.querySelectorAll('.about-item').forEach((item) => item.addEventListener("click", toggleModal));
document.getElementById('about-modal-holder').addEventListener('click', openLightboxModal);

const toggleModal = (event) => {
    modalBox.classList.toggle('visible');
    document.querySelector('#preview-src').src = event.currentTarget.querySelector('img').src;
}


const turnOff = () => {
    modalBox.classList.toggle('visible');
}

const openLightboxModal = (event) => {
    if (event.target === modalBox) {
        toggleModal();
        turnOff();
    }
}

export { openLightboxModal };