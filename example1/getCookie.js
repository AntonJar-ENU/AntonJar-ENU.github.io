function getCookie(cookie_name)
{
    var name = cookie_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt(0) == ' ')
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(name, value, expiry)
{
    var d = new Date();
    d.setTime(d.getTime() + (expiry*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires;
}

function readForm() 
{
    let fname = document.getElementById("fname").value;
    setCookie("firstName",fname,1);

}

function showQuestion()
{
    var prompt = 'Hi ' + getCookie("firstName") + ' are you happy?';
    if (confirm(prompt)) {
        alert('Happy to hear!');
    } else {
        alert('Sorry to hear');
    }
}