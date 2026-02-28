function login(e) {
  e.preventDefault();

  // demo credentials
  if (doctorId.value === 'doctor01' && password.value === 'med123') {
    localStorage.setItem('loggedInDoctor', doctorId.value);
    location.href = 'index.html';
  } else {
    alert('Invalid credentials');
  }
}

function protectPage() {
  if (!localStorage.getItem('loggedInDoctor')) {
    location.href = 'login.html';
  }
}

function logout() {
  localStorage.removeItem('loggedInDoctor');
  location.href = 'login.html';
}
