/* Alert Close */

document.addEventListener("DOMContentLoaded", function () {
    
    const closeButtons = document.querySelectorAll(".alert .close");

    closeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          
            const alert = this.parentElement;
            alert.style.transition = "opacity 0.5s"; 
            alert.style.opacity = "0";

           
            setTimeout(() => alert.remove(), 500);
        });
    });
});