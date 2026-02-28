// Enable pregnancy field only if gender is Female
function togglePregnancy() {
  const gender = document.getElementById('gender').value;
  const pregnancy = document.getElementById('pregnancy');

  if (gender === 'Female') {
    pregnancy.disabled = false;
  } else {
    pregnancy.disabled = true;
    pregnancy.value = '';
  }
}

// Store patient data and proceed to simulation
document.getElementById('patientForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const patientData = {
    age: age.value,
    gender: gender.value,
    height: height.value,
    weight: weight.value,

    vitals: {
      temperature: temperature.value,
      bp: bp.value,
      heartRate: heartRate.value,
      rhythm: rhythm.value,
      spo2: spo2.value,
      glucose: glucose.value,
    },

    history: {
      priorSurgeries: priorSurgeries.value,
      cardiac: cardiacHistory.value,
    },

    pregnancy: pregnancy.value,
    fasting: fasting.value,
    dental: dental.value,

    blood: {
      hb: hb.value,
      wbc: wbc.value,
      platelets: platelets.value,
      inr: inr.value,
      bloodGroup: bloodGroup.value,
    },
  };

  localStorage.setItem('patientData', JSON.stringify(patientData));
  window.location.href = 'simulation.html';
});
