const inputEmail = document.getElementById('input-email');
    const inputPass = document.getElementById('input-pass');
    document.getElementById('confirmBtn').addEventListener('click', function() {
        const checkValueEm = "hello";
        const checkValuePs = "sorry";

        if (inputEmail.value === "tausif.ritu@gmail.com" && inputPass.value === "ddd") {
console.log('object');
        } else {
            alert("tumar dhara kichui hobe nah");
        }

    })