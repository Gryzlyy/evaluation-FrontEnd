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
validationDon.addEventListener('click', () => {
    if (montantDon.value > 0)  {
        alert(`Toute l\'équipe de WWF France vous remercie pour votre don de ${montantDon.value}€ !`)
    }
})

    // CCV POP UP 
const ccvInfo = document.getElementById('ccvHelp') 
const infoHelp = document.getElementById('ccvInfoHelp')
const ccvClose = document.getElementById('ccvClose')
ccvInfo.addEventListener('mouseover', () => {
    infoHelp.style.display = 'block'
})
infoHelp.addEventListener('mouseleave', () => {
    infoHelp.style.display = 'none'
})
ccvClose.addEventListener('click', () => {
    infoHelp.style.display = 'none'
})