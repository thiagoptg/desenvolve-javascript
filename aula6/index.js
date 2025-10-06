function chamaprimeiro () {
    console.log('chama essa primeiro')
};
chamaprimeiro()

function chamadepois () {
    chamaprimeiro();
    console.log('chamou a segunda funçao')
}
chamadepois();
function recebeprimeiro (primeirafuncao) {
    primeirafuncao()
    
}
recebeprimeiro(chamadepois);