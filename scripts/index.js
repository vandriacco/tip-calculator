var slider = document.getElementById("tip");
var output = document.getElementById("tip-display");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  calculateTip()
}
function updateTextInput(value) {
    document.getElementById("tip-display").textContent = value
    
}
function calculateTip() {
    // document.getElementById("input-cost").textcontent = cost
    // let percent = updateTextInput(value)/100
    // let tip = percent * cost
    // return tip
    let total = Number(document.getElementById("input-cost").value)
    let percent = Number(document.getElementById("tip").value) / 100
    let tip = total * percent
    let bill = total + tip
    tip = tip.toFixed(2);
    bill = bill.toFixed(2);
    if (isNaN(total)) {
        alert('Please Enter a Number');
    } else {
        document.getElementById("tip-value").textContent = `$${tip}`;
        document.getElementById("cost-display").textContent = `$${bill}`;
    }
}
//sets slider to original position and clears textbox
function resetCalculator() {
    document.getElementById("tip").value = 20
    updateTextInput(20)
    document.getElementById("input-cost").value = ""
    document.getElementById("tip-value").textContent = "";
    document.getElementById("cost-display").textContent = "";
}