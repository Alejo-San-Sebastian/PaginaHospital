window.addEventListener('scroll', function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("abajo", window.scrollY>0);
})
window.addEventListener('scroll', function(){
    var men = this.document.querySelector("men");
    nav.classList.toggle("abajo", window.scrollY>0);
})
