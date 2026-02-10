const BASE_URL = 'http://localhost:8080/backend';

export async function loginUser(email: string, password: string) {
  const res = await fetch(`${BASE_URL}/login.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}

export async function signUpUser(email: string, password: string) {
  const res = await fetch(`${BASE_URL}/signup.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}

export async function verifyCode(email: string, code: string) {
  const res = await fetch(`${BASE_URL}/verify.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email, code })
  });

  return res.json();
}