window.addEventListener("keydown", function (e) {
    console.log(e);
    document.getElementById("code").innerHTML = e.code;
    document.getElementById("key").innerHTML = e.key;
    document.getElementById("keyCode").innerHTML = e.keyCode;

    document.getElementById("alt").innerHTML = e.altKey;
    document.getElementById("shift").innerHTML = e.shiftKey;
    document.getElementById("ctrl").innerHTML = e.ctrlKey;
    document.getElementById("meta").innerHTML = e.metaKey;
});
