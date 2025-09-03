export const selectFavoriteTeachers = state => state.auth.favoriteTeachers;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;
export const selectName = state => state.auth.user.name;
export const selectEmail = state => state.auth.user.email;
export const selectUserId = state => state.auth.user.id;
