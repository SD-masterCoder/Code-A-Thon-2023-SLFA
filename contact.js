const name__modal = document.querySelector("#recipient-name");
        const email__modal = document.querySelector("#recipient-email");
        const message__modal = document.querySelector("#message-text");
        const response = document.querySelector("#message-response");
        const form_modal = document.querySelector("#modal_form");
        const submit__modal = document.querySelector("#send-button");

        submit__modal.addEventListener("click", function(event){
            event.preventDefault();
            if(name_modal.value == "" || emailmodal.value == "" || message_modal.value == ""){       
                response.textContent = "Please fill all the fields";
            } else {
                //Validate email
                var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var emailValid = emailRegex.test(String(email__modal.value).toLowerCase());
                if (!emailValid){
                    response.textContent = "Invalid email address";
                }else{
                response.textContent = "Thank you ❤ We received your message";
                form__modal.reset()
            }
            }
        });