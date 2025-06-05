const codesEligibles = ['4332A', '5610A', '9602B', '4932Z', '4334Z']; // à étendre

document.getElementById('kapForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const ape = document.getElementById('ape').value.trim().toUpperCase();
  const ca = parseFloat(document.getElementById('ca').value);
  const salaries = parseInt(document.getElementById('salaries').value);
  const montant = parseFloat(document.getElementById('montant').value);
  const hauts = document.getElementById('hauts').value;

  const eligible = 
    codesEligibles.includes(ape) &&
    ca <= 1000000 &&
    salaries < 10 &&
    montant >= 5001 && montant <= 19999 &&
    hauts === 'non';

  document.getElementById('resultat').innerHTML = eligible 
    ? "<p style='color: #00e676;'>✅ Vous êtes potentiellement éligible au Kap TPE.</p>"
    : "<p style='color: red;'>❌ Vous ne remplissez pas tous les critères d’éligibilité.</p>";
});
