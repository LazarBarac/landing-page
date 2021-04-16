const linkoviHeaderSlika = document.getElementById("linkoviHeaderSlika");
const sve = document.getElementById("sve");
const meniZaMobilni = document.getElementById("meniZaMobilni");
const zatvori = document.getElementById("zatvori");

linkoviHeaderSlika.addEventListener("click", prikaziMeni);
zatvori.addEventListener("click", sakrijMeni);

function prikaziMeni(){
    sve.style.display = "none";
    meniZaMobilni.style.display = "flex";
    document.body.style.backgroundColor = "black";
}
function sakrijMeni(){
    sve.style.display = "initial";
    meniZaMobilni.style.display = "none";
    document.body.style.backgroundColor = "white";
}