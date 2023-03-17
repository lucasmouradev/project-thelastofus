const carouselButton = document.querySelectorAll('.button');
const listImage = document.querySelectorAll('.image');

carouselButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        selectButtonDeactive();

        selectCarouselButton(button);

        removeBackgroundImageActive();

        showBackgroundImage(index);
        
    })
})

function showBackgroundImage(index) {
    listImage[index].classList.add('active');
}

function selectCarouselButton(button) {
    button.classList.add('select');
}

function removeBackgroundImageActive() {
    const imageActive = document.querySelector('.active');
    imageActive.classList.remove('active');
}

function selectButtonDeactive() {
    const buttonSelect = document.querySelector('.select');
    buttonSelect.classList.remove('select');
}
