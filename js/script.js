function calcularIMC() {
    
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const idade = document.getElementById("idade").value;


  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    alert("Por favor, insira valores válidos para altura e peso.");
    return;
  }

  
  let imc;
  if (idade === "adulto") {
    imc = peso / (altura * altura);
  } else {
    imc = peso / (altura * altura * 1.5);
  }

  
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `Seu IMC é ${imc.toFixed(2)}.`;

  let figura;
  if (imc < 18.5) {
    figura = "magro";
  } else if (imc < 25) {
    figura = "normal";
  } else if (imc < 30) {
    figura = "sobrepeso";
  } else if (imc < 35) {
    figura = "obesidade1";
  } else if (imc < 40) {
    figura = "obesidade2";
  } else {
    figura = "obesidade3";
  }
  resultadoDiv.classList.add(figura);
}