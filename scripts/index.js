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
    document.getElementById("tip-value").textContent = tip;
    document.getElementById("cost-display").textContent = total * (1 + percent)
}