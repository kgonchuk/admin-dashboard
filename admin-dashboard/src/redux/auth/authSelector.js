import { createSelector } from "@reduxjs/toolkit";

export const selectAccessToken = state => state.auth.accessToken;

// Перевіряє, чи користувач автентифікований
export const selectIsLoggedIn = createSelector(
  [selectAccessToken],
  (accessToken) => !!accessToken
);

// Припускаємо, що у вас є поле для стану оновлення (завантаження)
export const selectIsRefreshing = state => state.auth.isRefreshing; 