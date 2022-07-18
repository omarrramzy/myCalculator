// Function with calling the classes by querySelector
(function(){
    let show = document.querySelector(".shown");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector(".eq-button");
    let acButton = document.querySelector(".ac-button");
    let cButton = document.querySelector(".c-button");

    // Function to allow numbers shown in the input 
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            show.value += value;
        })
    });
    
    // Function to allow the equal button for showing the result for any mathematical method
    equal.addEventListener('click', function(e){
        if (show.value === ''){
            show.value = "";
        } else {
            var result = eval(show.value);
            show.value = result;
        }
    })

    // Function to allow the AC button for deleting any element shown in the input
    acButton.addEventListener('click', function(e){
        show.value = "";
    })

    // Function to allow the C button for deleting the current element
    cButton.addEventListener('click', function(e){
        show.value = show.value.slice(0, -1);
    })

})();
