const waChat = document.getElementById('waChat');
if (waChat) {
    waChat.addEventListener('click', () => {
        const phone = '+506 87910532';
        const message = encodeURIComponent('Hola, quiero información sobre Lavacar.');
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    });
}

const scrollTop = document.getElementById('scrollTop');
if (scrollTop) {
    window.addEventListener('scroll', () => {
        scrollTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


const openModal = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

if (openModal && modal && closeModal) {
    openModal.addEventListener('click', () => modal.style.display = 'flex');
    closeModal.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => {
        if (e.target === modal) modal.style.display = 'none';
    });
}


const galleryImages = document.querySelectorAll('.photo-grid img');
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const modalImg = document.createElement('div');
        modalImg.style.position = 'fixed';
        modalImg.style.top = 0;
        modalImg.style.left = 0;
        modalImg.style.width = '100%';
        modalImg.style.height = '100%';
        modalImg.style.background = 'rgba(0,0,0,0.8)';
        modalImg.style.display = 'flex';
        modalImg.style.alignItems = 'center';
        modalImg.style.justifyContent = 'center';
        modalImg.style.cursor = 'pointer';
        modalImg.innerHTML = `<img src="${img.src}" style="max-width:90%; max-height:90%; border-radius:10px;">`;
        modalImg.addEventListener('click', () => modalImg.remove());
        document.body.appendChild(modalImg);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});
