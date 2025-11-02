import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// Припускаємо, що цей файл існує
import { selectIsLoggedIn } from '../redux/auth/authSelector'; 


/**
 * Компонент PrivateRoute
 * Перенаправляє користувача на сторінку входу, якщо він не авторизований.
 * @param {object} children - Вкладений компонент, який потрібно відобразити, якщо користувач авторизований.
 */
export const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  // Якщо користувач залогінений, відображаємо вкладені компоненти
  // Інакше — перенаправляємо на сторінку входу
  return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
};
