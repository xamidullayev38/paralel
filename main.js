
const accordeonBtn = document.querySelectorAll('.accordeon__btn');
const accordeonContent = document.querySelectorAll('.accordeon__content');


const activeBtn = document.querySelector('.accordeon__btn-active');

activeBtn.nextElementSibling.style.height = activeBtn.nextElementSibling.scrollHeight + 'px'
accordeonBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('accordeon__btn-active')){
            closePanel();
        }else{
            closePanel();
            btn.classList.add('accordeon__btn-active');
            btn.nextElementSibling.style.height = activeBtn.nextElementSibling.scrollHeight + 'px';
        }
    })
})

function closePanel() {
    const activeBtn = document.querySelector('.accordeon__btn-active');
    if(activeBtn == null) return;
    activeBtn.classList.remove('accordeon__btn-active');
    activeBtn.nextElementSibling.style.height = 0;
}