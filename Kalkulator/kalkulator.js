function sabiranje() {
  let unos1 = parseInt(document.getElementById("unos1").value);
  let unos2 = parseInt(document.getElementById("unos2").value);
  let prikaz = document.querySelector(".prikaz");
  prikaz.innerHTML = ""; // Očisti prethodni prikaz
  let rezultat = unos1 + unos2;
  prikaz.innerHTML = `Rezultat sabiranja: ${rezultat}`;
  document.getElementById("unos1").value = "";
  document.getElementById("unos2").value = "";
  prikaz.style.backgroundColor = "chartreuse";
}
function oduzimanje() {
  let unos1 = parseInt(document.getElementById("unos1").value);
  let unos2 = parseInt(document.getElementById("unos2").value);
  let prikaz = document.querySelector(".prikaz");
  prikaz.innerHTML = "";
  let rezultat = unos1 - unos2;
  prikaz.innerHTML = `Rezultat oduzimanja: ${rezultat}`;
  document.getElementById("unos1").value = "";
  document.getElementById("unos2").value = "";
  prikaz.style.backgroundColor = "chartreuse";
}

function mnozenje() {
  let unos1 = parseInt(document.getElementById("unos1").value);
  let unos2 = parseInt(document.getElementById("unos2").value);
  let prikaz = document.querySelector(".prikaz");
  prikaz.innerHTML = "";
  let rezultat = unos1 * unos2;
  prikaz.innerHTML = `Rezultat mnozenja: ${rezultat}`;
  document.getElementById("unos1").value = "";
  document.getElementById("unos2").value = "";
  prikaz.style.backgroundColor = "chartreuse";
}

function deljenje() {
  let unos1 = parseInt(document.getElementById("unos1").value);
  let unos2 = parseInt(document.getElementById("unos2").value);
  let prikaz = document.querySelector(".prikaz");
  prikaz.innerHTML = "";
  let rezultat =
    unos1 > 0 ? unos1 / unos2 : alert("Greska unesite ponovo podatke");
  prikaz.innerHTML = `Rezultat deljenja: ${rezultat}`;
  document.getElementById("unos1").value = "";
  document.getElementById("unos2").value = "";
  prikaz.style.backgroundColor = "chartreuse";
}
