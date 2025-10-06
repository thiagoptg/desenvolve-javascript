const todomundove = 'todo mundo ve essa variavel em escopo local';
function executaescopoglobal (){
    console.log(todomundove)
};
function executaescopolocal (){
    const visivelemescopolocal = 'so quem esta dentro do bloco da funçao ve';
    console.log(visivelemescopolocal);
    function chamadentrodoescopo (){
        console.log('dentro do escopo =>',visivelemescopolocal)
        const dentrodolocal = false;
        console.log(dentrodolocal)
    }
    chamadentrodoescopo()
};
executaescopoglobal();

executaescopolocal();
