import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

const RoutePrivate = ({ children, isAuthenticated }: { children: ReactElement<any>; isAuthenticated: boolean }) =>
  isAuthenticated ? children : <Navigate to="/login" />

RoutePrivate.propTypes = {
  children: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}

export default RoutePrivate
