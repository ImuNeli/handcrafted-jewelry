const openSidebar = document.querySelector('.icon-arrow-right');
const closeSidebar = document.querySelector('.icon-close');
const sidebar = document.querySelector('.aside-opened');

openSidebar.addEventListener('click', (e) => {
    sidebar.classList.add('aside-opened_visible');
})

closeSidebar.addEventListener('click', (e) => {
    sidebar.classList.remove('aside-opened_visible');
})