document.getElementById('deposit-btn').addEventListener('click', function () {
    let depositAmountInt = getValue('deposit-amount');

    const depositMoney = document.getElementById('deposit-money');
    depositMoney.innerText = depositAmountInt;
    sumPlus();

})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    let withdrawAmountInt = getValue('withdraw-amount');
    let withdrawMoney = document.getElementById('withdraw-money');
    withdrawMoney.innerText = withdrawAmountInt;
    sumMinus()
})

function setInnerTextInt(id) {
    let setText = document.getElementById(id);
    return parseInt(setText.innerText);
}
function getValue(id) {
    let valueGet = document.getElementById(id).value;
    return parseInt(valueGet);
}
sumPlus = () => {
    const depositValue = getValue('deposit-amount');
    const balance = setInnerTextInt('acc-balance');
    document.getElementById('acc-balance').innerText = balance + depositValue;
}
sumMinus = () => {
    const withdrawValue = getValue('withdraw-amount');
    const balance = setInnerTextInt('acc-balance');
    document.getElementById('acc-balance').innerText = balance - withdrawValue;
}
