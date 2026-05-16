            const form =
              document.getElementById("REGISTRATION FORM");
            const usernameInput =
              document.getElementById("username");
            const emailInput =
              document.getElementById("email");
            const passInput =
              document.getElementById("password");
            const usernameError =
              document.getElementById("usernameError");
            const emailError=
              document.getElementById("emailError");
            const passError=
              document.getElementById("passwordError");
            const result=
              document.getElementById("result");

            //function to display error
            function showError(el, message){
                el.innerHTML = message;
            }
            //function to clear error
            function clearError(el){
                el.innerHTML="";
            }
            //function to validate username
            function validateusername(){
                let value = usernameInput.value.trim();
                if(value.length<3){
                    showError(usernameError,"Name must be atleast 3 characters");
                    return false;
                } else{
                    //clear error if the name is long enough
                clearError(usernameError);
                return true;
                }
            }
            //function to validate email
            function validateEmail(){
                let value=emailinput.value.trim();
                    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.text(value))) {
                        showError(emailError,"enter avalid address.")
                    return false;
                } else{
                    clearError(emailError);
                return true;
                }
            }
            //function to validate password
            function validatePassword(){
                let value =passInput.value;
                if(value.length<5){
                    showError(passError,
                        "password must be atleast5 characters");
                        return false;
                } else{
                clearError(passError);
                return true;
                }
            }
            //function to validate form
            function validateForm(){
                let okUsername =validateUsername();
                let okEmail =validateEmail();
                let okPass =validatePassword();
                return okUsername && okEmail&& okPass;
            }
            //prevent default Reloading
            form.addEventListener("submit",
                  function(e){
                    if (!validateUsername()){
                e.preventDefault();
                    }
                //clear result
                result.innerHTML ="";
                result.className ="";
                //validate form
                if (validateForm()){
                    result.innerHTML ="Form is valid! OK";
                    result.className ="success";
                }  else{
                    result.innerHTML ="please fix the errors.";
                    result.className ="error";
                }
            });



                  



            //select all images
     const slides =
     document.querySelectorAll("slide");
     //starting slide
     let currentslide =0;
     //function to show slides
     function showSlide(){
        //hide all images
        slides.forEach(function(slide){
            slide.style.display="none";
        });
        //show current image
        slides. currentSlide.style.display ="block";
        //move to the next image
        currentslide++;
        //restart slider
        if(currentslide >= slides.length){
             currentSlide =0;
        }
     }
     //show first image immediately
     showSlide();
     //change image every 3 seconds
     setInterval (showSlide,3000);