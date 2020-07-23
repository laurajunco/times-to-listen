var getUmbral = new XMLHttpRequest();
var getIntro = new XMLHttpRequest();
var getBojaya = new XMLHttpRequest();
var getMampujan = new XMLHttpRequest();
var getHacer = new XMLHttpRequest();
var getCreditos = new XMLHttpRequest();
var getMenu = new XMLHttpRequest();


getUmbral.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("barra_1").innerHTML = this.responseText;
    }
};

getIntro.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("barra_2").innerHTML = this.responseText;
    }
};

getBojaya.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("barra_3").innerHTML = this.responseText;
    }
};

getMampujan.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("barra_4").innerHTML = this.responseText;
    }
};

getHacer.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("barra_5").innerHTML = this.responseText;
    }
};

getCreditos.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("barra_6").innerHTML = this.responseText;
    }
};

getMenu.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("menu").innerHTML = this.responseText;
    }
};

getUmbral.open("GET", "ajax/umbral.html", true);
getIntro.open("GET", "ajax/intro.html", true);
getBojaya.open("GET", "ajax/bojaya.html", true);
getMampujan.open("GET", "ajax/mampujan.html", true);
getHacer.open("GET", "ajax/hacer.html", true);
getCreditos.open("GET", "ajax/creditos.html", true);
getMenu.open("GET", "ajax/creditos.html", true);

getUmbral.send();
getIntro.send();
getBojaya.send();
getMampujan.send();
getHacer.send();
getCreditos.send();
getMenu.send();