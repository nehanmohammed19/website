
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.1 }
);

sections.forEach((section) => {
    observer.observe(section);
});


function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        modal.style.width = '100%'; 
        modal.style.height = '100%'; 
        modal.style.overflow = 'auto'; 
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('project1-trigger').addEventListener('click', () => showModal('project1-modal'));
document.getElementById('project2-trigger').addEventListener('click', () => showModal('project2-modal'));
document.getElementById('project3-trigger').addEventListener('click', () => showModal('project3-modal'));
document.getElementById('project4-trigger').addEventListener('click', () => showModal('project4-modal'));


function updateModalContent(modalId, title, description, images = []) {
    const modal = document.getElementById(modalId);
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const modalImages = modal.querySelector('.modal-images');

    if (modalTitle) modalTitle.textContent = title;
    if (modalDescription) modalDescription.innerHTML = description;
    if (modalImages) {
        modalImages.innerHTML = '';
        images.forEach((src) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Project Image';
            img.style.width = '100%';
            img.style.marginBottom = '1rem';
            modalImages.appendChild(img);
        });
    }
}

const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
    const images = carousel.querySelector('.carousel-images');
    const prevButton = carousel.querySelector('.carousel-button.prev');
    const nextButton = carousel.querySelector('.carousel-button.next');
    const imageCount = images.children.length;
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + imageCount) % imageCount;
        images.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % imageCount;
        images.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
});




updateModalContent('project1-modal', '1P13 Project 1 - International Airport Challenge', 'Details about Project 1.', [

]);

updateModalContent('project2-modal', 'Hand Gesture Controlled Rover', [
]);

updateModalContent('project3-modal', 'BOGOCHIB- Boid Simulation', [
]);
