let tab1 = document.querySelector("#tab1");
let tab2 = document.querySelector("#tab2");
let tab3 = document.querySelector("#tab3");
let tab4 = document.querySelector("#tab4");
let tabs = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".content");

/*Funciones para cada uno de los Tabs*/ 
function firstTab(){
    if (tab1.checked) {

        const href = document.createElement("a").href = "#howitworks";
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });

    }
}
function secondTab(){
    if (tab2.checked) {
        const href = document.createElement("a").href = "#documentation";
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}
function thirdTab(){
    if (tab3.checked) {
        const href = document.createElement("a").href = "#api";
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}
function fourthTab(){
    if (tab4.checked) {
        const href = document.createElement("a").href = "#prices";
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}

//Añadimos los On-Click de cada Tab
tab1.onclick = function(){firstTab();};
tab2.onclick = function(){secondTab();};
tab3.onclick = function(){thirdTab();};
tab4.onclick = function(){fourthTab();};
