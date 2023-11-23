const mousew=document.querySelector('.marathi-acters');
mousew.addEventListener('wheel',function(e){
    const race=15;
    if(e.deltaY>0)
    mousew.scrollLeft+=race;
    else
    mousew.scrollLeft-=race;
    e.preventDefault();
});