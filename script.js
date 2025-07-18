document.addEventListener("DOMContentLoaded", function() {
    // Get references to the form elements and the result display
    const form = document.getElementById("calorias-form");
    const resultadoDiv = document.getElementById("resultado");

    // Add an event listener for the form submission
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get the values from the input fields
        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);
        const edad = parseInt(document.getElementById("edad").value);
        const sexo = document.querySelector('input[name="sexo"]:checked').value;
        const actividad = parseFloat(document.getElementById("actividad").value);

        let tmb; // Variable to store Basal Metabolic Rate (Tasa Metabólica Basal)

        // Calculate TMB using Mifflin-St Jeor Equation
        // For men: (10 * weight in kg) + (6.25 * height in cm) - (5 * age in years) + 5
        // For women: (10 * weight in kg) + (6.25 * height in cm) - (5 * age in years) - 161
        if (sexo === "masculino") {
            tmb = (10 * peso) + (6.25 * altura) - (5 * edad) + 5;
        } else { // sexo === "femenino"
            tmb = (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
        }

        // Calculate daily caloric needs by multiplying TMB by the activity factor
        const calorias = tmb * actividad;

        // Display the result in the designated div
        resultadoDiv.textContent = `Tu necesidad calórica diaria es: ${Math.round(calorias)} calorías.`;
        resultadoDiv.classList.remove('hidden'); // Make the result div visible
        resultadoDiv.classList.add('block'); // Ensure it takes up space
    });
});