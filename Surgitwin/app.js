const form = document.getElementById('patientForm');
const nextActions = document.getElementById('nextActions');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Show medical next actions window
  nextActions.style.display = 'block';
});
