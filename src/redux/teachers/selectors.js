export const selectTeachers = state => state.teachers.items;
export const selectIsLoading = state => state.teachers.isLoading;
export const selectTeachersError = state => state.teachers.error;
export const selectTeachersLastDoc = state => state.teachers.lastVisibleDoc;
export const selectHasMore = state => state.teachers.hasMore;
