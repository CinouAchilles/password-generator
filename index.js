let pswd_all ;
function gene(low,upp,num,sym,leng){

    let chars = '';
    if (low) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (upp) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (num) chars += '0123456789';
    if (sym) chars += '!@#$%^&*()_+[]{}|;:,.<>?';
    let pass = "";
    if (chars.length === 0) return 'Please select at least one option.';
    for(let i = 0 ; i < leng ; i++){

        pass += chars.charAt(Math.floor(Math.random() * chars.length));

    }
    return pass;

}



let btn_generator = document.getElementById("btn_gn");
btn_generator.onclick = function(){
    pswd_all = "";
    let lower = document.getElementById('lower').checked;
    let upper = document.getElementById('upper').checked;
    let num = document.getElementById('numb').checked;
    let sym = document.getElementById('symbols').checked;
    let h3 = document.getElementById("pass");
    h3.style.display = "block";
    let leng = Number(document.getElementById("len").value);
    if(leng < 6|| leng > 20){
        h3.textContent = "choose another number ";
        console.log(pswd_all);
    }else{
        pswd_all = gene(lower,upper,num,sym,leng);
        h3.textContent = pswd_all;
        console.log(pswd_all);
    }

}
function copyPassword(){
    let passw = document.getElementById("pass").innerHTML;
    if (!pswd_all || passw === "Choose a number between 6 and 20." || passw === 'Please select at least one option.') {
        Swal.fire({
            title: "Nothing To Copy!",
            text: "You clicked the button!",
            icon: "error"
          });        
          return;
    }else{
        navigator.clipboard.writeText(passw).then( ()=>{
            Swal.fire({
                title: "Done!",
                text: "Password copied to clipboard!",
                icon: "success"
            });
        });
    }
}

