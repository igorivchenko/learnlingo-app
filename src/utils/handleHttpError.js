export function handleHttpError(error) {
  if (error.code) {
    switch (error.code) {
      case 'auth/invalid-credential':
        return 'Невірний email або пароль.';
      case 'auth/user-not-found':
        return 'Користувача не знайдено.';
      case 'auth/wrong-password':
        return 'Невірний пароль.';
      case 'auth/email-already-in-use':
        return 'Ця пошта вже використовується.';
      case 'auth/weak-password':
        return 'Пароль занадто слабкий.';
      case 'auth/network-request-failed':
        return 'Сервер не відповідає.';
      default:
        return `Помилка авторизації: ${error.code}`;
    }
  }

  return 'Сталася непередбачена помилка.';
}
