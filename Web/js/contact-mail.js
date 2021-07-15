function sendMail() {

    if (document.getElementById("form_name").value != "" && document.getElementById("form_email").value != "" && document.getElementById("form_message").value != "") {
        let tempParams = {
            from_name: document.getElementById("form_name").value,
            from_mail: document.getElementById("form_email").value,
            to_mail: "durmusikartci@gmail.com",
            message: document.getElementById("form_message").value
        }
        console.log(tempParams)
        emailjs.send("service_880b6o7", "template_0kcpfca", tempParams).then(function(res) { console.log("succes : " + res.status) })
    } else {
        console.log("Mesajınız gönderilemedi")
    }
}