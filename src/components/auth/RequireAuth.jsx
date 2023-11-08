import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth()
  const location = useLocation()

  return(
    // auth.role?.find(role => allowedRoles?.includes(role))
    allowedRoles.includes(auth.role)
      ? <Outlet />
      : auth?.user
        ? <Navigate to="unautorized" state={{ from: location }} replace />
        : <Navigate to="/" state={{ from: location }} replace />
  )
}

export default RequireAuth
