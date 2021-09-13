const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');
const openBtn = document.getElementById('btn');


/*show nav bar */
toggleBtn.addEventListener('click',()=>{
    document.body.classList.toggle('show-now');
})

/**show modal */
openBtn.addEventListener('click',()=>{
    modal.classList.add('show-modal');
});
/**close modal */
closeBtn.addEventListener('click',()=>{
    modal.classList.remove('show-modal');
});
/**close with out side */
modal.addEventListener('click',()=>{
    modal.classList.remove('show-modal');
})