function playSound(song) {
    document.getElementById(song).play();
};

function prompteur(taille) {
    //$('#defile').animate({'marginLeft': '600'}, 1000);

    $('#defile').animate({ 'marginLeft': '-=1px' }, 1000);
    prompteur(taille);

}

jQuery(document).ready(
    function() {
        taille = $('#defile').width();
        //document.write(taille);
        $('#defile').css({ 'margin-left': '600px' });
        prompteur(taille);

    }
);

const elements = document.getElementsByClassName('bounce');

for (let i = 0; i <= elements.length; i++) {
	elements[i].addEventListener('animationend', function(e) {
    elements[i].classList.remove('animated');
	});

elements[i].addEventListener('mouseover', function(e) {
    elements[i].classList.add('animated')
})
}
