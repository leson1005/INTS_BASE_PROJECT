import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

const RoutePublic = ({ children, isAuthenticated }: { children: ReactElement<any>; isAuthenticated: boolean }) =>
  isAuthenticated ? <Navigate to="/home" /> : children

RoutePublic.propTypes = {
  children: PropTypes.object.isRequired,
}

export default RoutePublic
