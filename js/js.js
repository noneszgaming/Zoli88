var pont = 0
document.getElementById("pont").innerHTML= pont;
var timer

function ko() {
    document.getElementById("jatekosValasztasa").src = "img/ko.jpg";
    document.getElementById("gepValasztasa").src = "img/ko.jpg";

    timer = setTimeout(ko2, 1000);

}
function ko2() {
    document.getElementById("jatekosValasztasa").src = "img/papir.jpg";
    document.getElementById("gepValasztasa").src = "img/papir.jpg";

    timer = setTimeout(ko3, 1000);

}
function ko3() {
    document.getElementById("jatekosValasztasa").src = "img/ollo.jpg";
    document.getElementById("gepValasztasa").src = "img/ollo.jpg";

    timer = setTimeout(kovege, 1000);

}

function papir() {
    document.getElementById("jatekosValasztasa").src = "img/ko.jpg";
    document.getElementById("gepValasztasa").src = "img/ko.jpg";

    timer = setTimeout(papir2, 1000);

}
function papir2() {
    document.getElementById("jatekosValasztasa").src = "img/papir.jpg";
    document.getElementById("gepValasztasa").src = "img/papir.jpg";

    timer = setTimeout(papir3, 1000);

}
function papir3() {
    document.getElementById("jatekosValasztasa").src = "img/ollo.jpg";
    document.getElementById("gepValasztasa").src = "img/ollo.jpg";
setTimeout(papirvege, 1000);

}

function ollo() {
    document.getElementById("jatekosValasztasa").src = "img/ko.jpg";
    document.getElementById("gepValasztasa").src = "img/ko.jpg";

    timer = setTimeout(ollo2, 1000);

}
function ollo2() {
    document.getElementById("jatekosValasztasa").src = "img/papir.jpg";
    document.getElementById("gepValasztasa").src = "img/papir.jpg";

    timer = setTimeout(ollo3, 1000);

}
function ollo3() {
    document.getElementById("jatekosValasztasa").src = "img/ollo.jpg";
    document.getElementById("gepValasztasa").src = "img/ollo.jpg";

    timer = setTimeout(ollovege, 1000);

}

function kovege() {
    var gepval = [
        "Kő",
        "Papír",
        "Olló",
    ]
    var gepvalasztasa
    gepval = [Math.round(Math.random() * 2)];
    gepvalasztasa = gepval = [Math.round(Math.random() * 2)];
    document.getElementById("jatekosValasztasa").src = "img/ko.jpg"
    timer = setTimeout(ko2, 1000);

    if (0 == gepvalasztasa) {
        document.getElementById("gepValasztasa").src = "img/ko.jpg";

    }
    if (1 == gepvalasztasa) {
        document.getElementById("gepValasztasa").src = "img/papir.jpg";

    }
    if (2 == gepvalasztasa) {
        document.getElementById("gepValasztasa").src = "img/ollo.jpg";
    }

    if (0 == gepvalasztasa) [
        document.getElementById("gyoztes").src = "img/draw.png"
    ]
    if (0 < gepvalasztasa && gepvalasztasa != 1) [
        document.getElementById("gyoztes").src = "img/win.jpg",
        pont = pont * 1 + 1,
        document.getElementById("pont").innerHTML = pont

    ]
    if (0 < gepvalasztasa && gepvalasztasa != 2) [
        document.getElementById("gyoztes").src = "img/lose.png",
        pont = pont * 1 - 1,
        document.getElementById("pont").innerHTML = pont

    ]
    clearTimeout(timer)
}

function papirvege() {
    var gepval = [
        "Kő",
        "Papír",
        "Olló",
    ]
    var gepvalasztasa
    gepval=[Math.round(Math.random()*2)];
    gepvalasztasa = gepval=[Math.round(Math.random()*2)];
    document.getElementById("jatekosValasztasa").src ="img/papir.jpg"

    if (0 == gepvalasztasa){
        document.getElementById("gepValasztasa").src ="img/ko.jpg";

    }
    if (1 == gepvalasztasa){
        document.getElementById("gepValasztasa").src ="img/papir.jpg";

    }
    if (2 == gepvalasztasa){
        document.getElementById("gepValasztasa").src ="img/ollo.jpg";

    }




    if (1 == gepvalasztasa) [
        document.getElementById("gyoztes").src= "img/draw.png"
    ]
    if ( 2 != gepvalasztasa && gepvalasztasa!=1 ) [
        document.getElementById("gyoztes").src= "img/win.jpg",
        pont = pont*1 + 1 ,
        document.getElementById("pont").innerHTML= pont

    ]
    if ( 1!= gepvalasztasa && gepvalasztasa!=0)[
        document.getElementById("gyoztes").src= "img/lose.png",
        pont = pont*1 - 1 ,
        document.getElementById("pont").innerHTML= pont

    ]

}

function ollovege() {
    var gepval = [
        "Kő",
        "Papír",
        "Olló",
    ]
    var gepvalasztasa
    gepval=[Math.round(Math.random()*2)];
    gepvalasztasa = gepval=[Math.round(Math.random()*2)];
    document.getElementById("jatekosValasztasa").src ="img/ollo.jpg"

    if (0 == gepvalasztasa){
        document.getElementById("gepValasztasa").src ="img/ko.jpg";

    }
    if (1 == gepvalasztasa){
        document.getElementById("gepValasztasa").src ="img/papir.jpg";

    }
    if (2 == gepvalasztasa){
        document.getElementById("gepValasztasa").src ="img/ollo.jpg";

    }




    if (2 == gepvalasztasa) [
        document.getElementById("gyoztes").src= "img/draw.png"
    ]
    if ( 0 != gepvalasztasa && gepvalasztasa!=2 ) [
        document.getElementById("gyoztes").src= "img/win.jpg",
        pont = pont*1 + 1 ,
        document.getElementById("pont").innerHTML= pont

    ]
    if (1 != gepvalasztasa && gepvalasztasa!=2)[
        document.getElementById("gyoztes").src= "img/lose.png",
        pont = pont*1 - 1 ,
        document.getElementById("pont").innerHTML= pont


    ]

}