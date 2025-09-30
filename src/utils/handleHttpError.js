export function handleHttpError(error) {
  if (error.code) {
    switch (error.code) {
      case 'auth/invalid-credential':
        return 'Invalid email or password.';
      case 'auth/user-not-found':
        return 'User not found.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      case 'auth/email-already-in-use':
        return 'This email is already in use.';
      case 'auth/weak-password':
        return 'Password is too weak.';
      case 'auth/network-request-failed':
        return 'Server is not responding.';
      default:
        return `Authorization error: ${error.code}`;
    }
  }

  return 'An unexpected error occurred.';
}
