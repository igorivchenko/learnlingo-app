export function handleHttpError(error) {
  if (error.code) {
    switch (error.code) {
      case 'auth/invalid-credential':
        return 'Некоректні дані для входу.';
      case 'auth/user-not-found':
        return 'Користувача не знайдено.';
      case 'auth/wrong-password':
        return 'Невірний пароль.';
      case 'auth/email-already-in-use':
        return 'Ця пошта вже використовується.';
      case 'auth/weak-password':
        return 'Пароль занадто слабкий.';
      default:
        return `Помилка авторизації: ${error.code}`;
    }
  }

  return 'Сталася непередбачена помилка.';
}
