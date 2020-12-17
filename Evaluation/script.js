// DON FORM
(function() {
    'use strict';
    window.addEventListener('load', function() {
        const forms = document.getElementsByClassName('needs-validation')
        const validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault()
                event.stopPropagation()
            }
                form.classList.add('was-validated')
            }, false)
         })
        }, false)
    })()

    // THANKS FOR DONATION
const validationDon = document.getElementById('btn-validation')
var montantDon = document.getElementById('monDon')
if(validationDon) validationDon.addEventListener('click', () => {
    if (montantDon.value > 0)  {
        alert(`Toute l\'équipe de WWF France vous remercie pour votre don de ${montantDon.value}€ !`)
    }
})

    // CCV POP UP 
const ccvInfo = document.getElementById('ccvHelp') 
const infoHelp = document.getElementById('ccvInfoHelp')
const ccvClose = document.getElementById('ccvClose')
if(ccvInfo) ccvInfo.addEventListener('mouseover', () => {
    infoHelp.style.display = 'block'
})
if(infoHelp) infoHelp.addEventListener('mouseleave', () => {
    infoHelp.style.display = 'none'
})
if(ccvClose) ccvClose.addEventListener('click', () => {
    infoHelp.style.display = 'none'
})

    // INSCRIPTION POP UP
var overLayPopUp = document.getElementById('overlay');
var btnOpenPopUp = document.getElementById('btnOpen');
var btnClosePopUp = document.getElementById('bi-x');
var btnValidationInscription = document.getElementById('btn-inscription')

if(btnOpenPopUp) btnOpenPopUp.addEventListener('click', () => {
    overLayPopUp.style.display = 'block';
})
if(btnClosePopUp) btnClosePopUp.addEventListener('click', () => {
    overLayPopUp.style.display = 'none';
})
if(btnValidationInscription) btnValidationInscription.addEventListener('click', () => {
    alert(`Bienvenu à bord ! \n Vous allez recevoir un mail avec toute la procédure à suivre afin d'être officiellement l'un des nôtres.
    \n L'équipe WWF France vous remercie !`);
    overLayPopUp.style.display = 'none';
})

    // VALUES FROM INDEX TO DON
if($_GET('don')){
    document.getElementById('monDon').value = $_GET('don');
}
function $_GET(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace( 
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );
    if ( param ) {
        return vars[param] ? vars[param] : null;    
    }
    return vars;
}