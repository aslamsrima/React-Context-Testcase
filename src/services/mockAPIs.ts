export function mockLogin({ email, password }: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Login successful', token: 'mockToken123', data: { email, password } });
    }, 1000);
  });
}

export function mockSignUp({ name, email, password }: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Sign up successful', token: 'mockToken123', data: { name, email, password } });
    }, 1000);
  });
}
