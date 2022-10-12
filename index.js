const modal = document.getElementById("modal")
const modalBtnClose = document.getElementById("modal-close-btn")
const modalText = document.getElementById("modal-text")
const formConsent = document.getElementById("consent-form")
const modalBtnsChoise = document.getElementById("modal-choice-btns")
const btnDecline = document.getElementById("btn-decline")


setTimeout( () => {
    modal.style.display = `inline`
}, 1500)

modalBtnClose.addEventListener( 'click' , () => {
    modal.style.display = `none`
} )

formConsent.addEventListener( "submit" , e => {
    e.preventDefault()
    const formDataConsent = new FormData(formConsent) 
    const name = formDataConsent.get(`full-name`)
    modalText.innerHTML =  `
    <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
    Uploading your data to the dark web...
    </p>
    </div>`         
    
    setTimeout( () => {
        document.getElementById('uploadText').textContent = `Making the sale...`
    }, 1500)
    
    setTimeout( () => {
        document.getElementById('modal-inner').innerHTML =
            `<h2>Thanks 
            <span class="modal-display-name">${name}</span>, you sucker!  
            </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
            <img src="images/pirate.gif">
            </div>` 
        modalBtnClose.disabled = false
    }, 3000)
})

btnDecline.addEventListener( "mouseover" , () => {
    modalBtnsChoise.classList.toggle("reverse")
} )
