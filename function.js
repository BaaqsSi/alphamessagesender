document.addEventListener("DOMContentLoaded",function(){
    let button = document.getElementById("submit")
    //visac gindat gamoiyenet serveris webhook 😉😉😉
    let jsonhook = "https://discord.com/api/webhooks/1265295925379600476/lxuwpERrelJoMwSmgSO4OJ9XQE8HpWU8yattN1REEIrq3juSH4PZ4nsxdAZHdK_b9Cu_"
    button.addEventListener("click", function(event) {

        event.preventDefault()

        let username = document.getElementById("username").value;
        let message = document.getElementById("message").value;
        let email = document.getElementById("useremail").value;



        if (!email.includes("@gmail.com")){
            alert("please input correct email!!. ")
            return;
        }

        if (message.length < 8 || username < 4 || email == ''){
            alert("message length  needs to be more than 8 characters and username more than 4");
            return;
        }


        fetch(jsonhook, {
            body: JSON.stringify({
                username: username,
                content: `message : ${message}\nemail : ${email}`
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        .then(function(res) {
            if (res.ok){
                alert("message sent succesfully");
                console.log(res);
            }else{
                alert("message failed to send idk why");
                console.log(res);
            }
        })
        .catch(function(res) {
            console.log(res);
        });
    })
});