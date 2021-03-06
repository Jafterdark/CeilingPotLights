// node-minify --compressor uglify-es --input 'script.js' --output 'script.min.js'

var wsc;

document.addEventListener("DOMContentLoaded", function(){
    wsc = new ReconnectingWebSocket('ws://' + window.location.hostname + ':81');
    //wsc = new ReconnectingWebSocket('ws://echo.websocket.org');
    
    wsc.timeoutInterval = 3000;

    wsc.onopen = function (e) {
        console.log("WebSocketClient connected:", e);
    }

    wsc.onmessage = function (data, flags, number) {
        console.log('WebSocketClient message #${number}: ', data);
        var switchstatus = JSON.parse(data.data);
        if(switchstatus.light1 == "on") {
            document.getElementById("onoff1").checked = true;
        } else {
            document.getElementById("onoff1").checked = false;
        }
        if(switchstatus.light2 == "on") {
            document.getElementById("onoff2").checked = true;
        } else {
            document.getElementById("onoff2").checked = false;
        }
        if(switchstatus.light3 == "on") {
            document.getElementById("onoff3").checked = true;
        } else {
            document.getElementById("onoff3").checked = false;
        }
        if(switchstatus.light4 == "on") {
            document.getElementById("onoff4").checked = true;
        } else {
            document.getElementById("onoff4").checked = false;
        }
        if(switchstatus.light5 == "on") {
            document.getElementById("onoff5").checked = true;
        } else {
            document.getElementById("onoff5").checked = false;
        }
        if(switchstatus.light6 == "on") {
            document.getElementById("onoff6").checked = true;
        } else {
            document.getElementById("onoff6").checked = false;
        }
        if(switchstatus.light7 == "on") {
            document.getElementById("onoff7").checked = true;
        } else {
            document.getElementById("onoff7").checked = false;
        }
        if(switchstatus.light8 == "on") {
            document.getElementById("onoff8").checked = true;
        } else {
            document.getElementById("onoff8").checked = false;
        }

        document.getElementById("brightness1").value = Math.round(switchstatus.light1b/ 2.55);
        document.getElementById("br1").innerHTML = Math.round(switchstatus.light1b / 2.55);
        document.getElementById("brightness2").value = Math.round(switchstatus.light2b/ 2.55);
        document.getElementById("br2").innerHTML = Math.round(switchstatus.light2b / 2.55);
        document.getElementById("brightness3").value = Math.round(switchstatus.light3b/ 2.55);
        document.getElementById("br3").innerHTML = Math.round(switchstatus.light3b / 2.55);
        document.getElementById("brightness4").value = Math.round(switchstatus.light4b/ 2.55);
        document.getElementById("br4").innerHTML = Math.round(switchstatus.light4b / 2.55);
        document.getElementById("brightness5").value = Math.round(switchstatus.light5b/ 2.55);
        document.getElementById("br5").innerHTML = Math.round(switchstatus.light5b / 2.55);
        document.getElementById("brightness6").value = Math.round(switchstatus.light6b/ 2.55);
        document.getElementById("br6").innerHTML = Math.round(switchstatus.light6b / 2.55);
        document.getElementById("brightness7").value = Math.round(switchstatus.light7b/ 2.55);
        document.getElementById("br7").innerHTML = Math.round(switchstatus.light7b / 2.55);
        document.getElementById("brightness8").value = Math.round(switchstatus.light8b/ 2.55);
        document.getElementById("br8").innerHTML = Math.round(switchstatus.light8b / 2.55);
    }

    document.getElementById("onoff1").onchange = function () {
        var JsonData;
        if (document.getElementById("onoff1").checked) {
            JsonData = { light: 1, state: "ON" };
        } else {
            JsonData = { light: 1, state: "OFF" };
        }
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("brightness1").onchange = function (e) {
        var brival = e.target.value;
        document.getElementById("br1").innerHTML = brival;
        if(brival>0){
            document.getElementById("onoff1").checked = true;
        } else {
            document.getElementById("onoff1").checked = false;
        }
        var JsonData = { light: 1, state: "ON", brightness: Math.round(Number(brival * 2.55)) };
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("onoff2").onchange = function () {
        var JsonData;
        if (document.getElementById("onoff2").checked) {
            JsonData = { light: 2, state: "ON" };
        } else {
            JsonData = { light: 2, state: "OFF" };
        }
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("brightness2").onchange = function (e) {
        var brival = e.target.value;
        document.getElementById("br2").innerHTML = brival;
        if(brival>0){
            document.getElementById("onoff2").checked = true;
        } else {
            document.getElementById("onoff2").checked = false;
        }
        var JsonData = { light: 2, state: "ON", brightness: Math.round(Number(brival * 2.55)) };
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("onoff3").onchange = function () {
        var JsonData;
        if (document.getElementById("onoff3").checked) {
            JsonData = { light: 3, state: "ON" };
        } else {
            JsonData = { light: 3, state: "OFF" };
        }
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("brightness3").onchange = function (e) {
        var brival = e.target.value;
        document.getElementById("br3").innerHTML = brival;
        if(brival>0){
            document.getElementById("onoff3").checked = true;
        } else {
            document.getElementById("onoff3").checked = false;
        }
        var JsonData = { light: 3, state: "ON", brightness: Math.round(Number(brival * 2.55)) };
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("onoff4").onchange = function () {
        var JsonData;
        if (document.getElementById("onoff4").checked) {
            JsonData = { light: 4, state: "ON" };
        } else {
            JsonData = { light: 4, state: "OFF" };
        }
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("brightness4").onchange = function (e) {
        var brival = e.target.value;
        document.getElementById("br4").innerHTML = brival;
        if(brival>0){
            document.getElementById("onoff4").checked = true;
        } else {
            document.getElementById("onoff4").checked = false;
        }
        var JsonData = { light: 4, state: "ON", brightness: Math.round(Number(brival * 2.55)) };
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("onoff5").onchange = function () {
        var JsonData;
        if (document.getElementById("onoff5").checked) {
            JsonData = { light: 5, state: "ON" };
        } else {
            JsonData = { light: 5, state: "OFF" };
        }
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("brightness5").onchange = function (e) {
        var brival = e.target.value;
        document.getElementById("br5").innerHTML = brival;
        if(brival>0){
            document.getElementById("onoff5").checked = true;
        } else {
            document.getElementById("onoff5").checked = false;
        }
        var JsonData = { light: 5, state: "ON", brightness: Math.round(Number(brival * 2.55)) };
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("onoff6").onchange = function () {
        var JsonData;
        if (document.getElementById("onoff6").checked) {
            JsonData = { light: 6, state: "ON" };
        } else {
            JsonData = { light: 6, state: "OFF" };
        }
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("brightness6").onchange = function (e) {
        var brival = e.target.value;
        document.getElementById("br6").innerHTML = brival;
        if(brival>0){
            document.getElementById("onoff6").checked = true;
        } else {
            document.getElementById("onoff6").checked = false;
        }
        var JsonData = { light: 6, state: "ON", brightness: Math.round(Number(brival * 2.55)) };
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("onoff7").onchange = function () {
        var JsonData;
        if (document.getElementById("onoff7").checked) {
            JsonData = { light: 7, state: "ON" };
        } else {
            JsonData = { light: 7, state: "OFF" };
        }
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("brightness7").onchange = function (e) {
        var brival = e.target.value;
        document.getElementById("br7").innerHTML = brival;
        if(brival>0){
            document.getElementById("onoff7").checked = true;
        } else {
            document.getElementById("onoff7").checked = false;
        }
        var JsonData = { light: 7, state: "ON", brightness: Math.round(Number(brival * 2.55)) };
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("onoff8").onchange = function () {
        var JsonData;
        if (document.getElementById("onoff8").checked) {
            JsonData = { light: 8, state: "ON" };
        } else {
            JsonData = { light: 8, state: "OFF" };
        }
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("brightness8").onchange = function (e) {
        var brival = e.target.value;
        document.getElementById("br8").innerHTML = brival;
        if(brival>0){
            document.getElementById("onoff8").checked = true;
        } else {
            document.getElementById("onoff8").checked = false;
        }
        var JsonData = { light: 8, state: "ON", brightness: Math.round(Number(brival * 2.55)) };
        wsc.send(JSON.stringify(JsonData));
    }
});