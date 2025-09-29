export const selectFavoriteTeachers = state => state.favorite.favoriteTeachers;
export const selectFavorites = state => state.favorite.favorites;
export const selectTeachersLastDoc = state => state.favorite.lastVisibleDoc;
export const selectHasMore = state => state.favorite.hasMore;
export const selectIsLoading = state => state.favorite.isLoading;
export const selectTeachersError = state => state.favorite.error;
