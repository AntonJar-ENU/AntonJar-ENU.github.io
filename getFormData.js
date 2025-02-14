function readForm() {
    let fname = document.getElementById("fname").value;
    setCookie("firstName",fname,1);

    let alertName = getCookie("firstName");
    alert('Hi ' + alertName);
}