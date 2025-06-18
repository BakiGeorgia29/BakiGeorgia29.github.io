function sendData(){
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const mail = document.getElementById('mail').value;
    const suj = document.getElementById('texte').value;

    window.location.href = `mailto:bakilamkedonkouotatah@gmail.com?subject=Message de ${encodeURIComponent(nom)}$body=${encodeURIComponent(
        `Nom : ${nom} \n Prenom: ${prenom} \nEmail:${mail} \nSujet:${suj}\n`
    )}`;

    const formData = {
        nom,
        prenom,
        mail,
        suj,
        date:new Date().toISOString()
    };
    localStorage.setItem('lastContactAttempt', JSON.stringify(formData));

}

document.addEventListener('DOMContentLoaded', function(){
    const flipcard  = document.getElementById('flipper');
    if(!flipcard){
        console.error("L element #flipper n'a pas ete trouve");
        return;
    }
    flipcard.addEventListener('click', function(){
        this.classList.toggle('flipped');
    })
    console.log('succes');
})
