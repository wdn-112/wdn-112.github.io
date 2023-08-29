window.onload = () => {
    const tabSwitchers = document.querySelectorAll('[data-switcher]');

    for(let i=0; i < tabSwitchers.length; i++)
    {
        const tabSwitcher = tabSwitchers[i];
        const pageId =  tabSwitcher.dataset.tab;

        tabSwitcher.addEventListener('click', () => {
            document.querySelector('.tabs .active').classList.remove('active');
            tabSwitcher.parentNode.classList.add('active');
            
            switchPage(pageId);

        });
    }

    function switchPage(pageId) {
        const currentPage = document.querySelector('.page.active');
        currentPage.classList.remove('active');

        const nextPage = document.querySelector(`.pages .page[data-page="${pageId}"]`);
        nextPage.classList.add('active');
        
    }
    
}
const button = document.querySelector('#button');
const menu = document.querySelector('.wrapper');
const a = document.querySelectorAll('a');
button.addEventListener('click', function() {
    menu.classList.toggle('drop');
})
a.forEach( (e) => {

    e.addEventListener('click', function() {
        menu.classList.toggle('drop');
    })
});