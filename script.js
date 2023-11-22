idSection = document.querySelector('#id-section');


function idKnownSelector(){
    console.log('running');
    let idKnown = document.querySelector('input[name="player_league ID"]:checked').value;
    console.log(idKnown);
    if(idKnown == 'yes'){
        console.log('YES');
        idSection.classList.remove('hidden');
    }
    else{
        console.log('NO');
        document.querySelector('#id-value').value = '';
        idSection.classList.add('hidden');

    }
}