import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { History } from 'history'
import { RootProps } from 'types/common'
import { Container } from 'semantic-ui-react'
import { Routes } from 'react-router-dom'

import routes from './routes'
import { Route } from 'react-router'
import RoutePublic from './components/routes/RoutePublic'
import RoutePrivate from './components/routes/RoutePrivate'
import NotFound from './pages/NotFound'

const App: React.FC<RootProps> = ({ history }: { history: History }) => {
  const user = useSelector((state: any) => state.user)

  useEffect(() => {
    //Mount
    return () => {
      //Unmount
    }
  }, [])

  return (
    <Router history={history}>
      <Container>
        <Routes>
          {routes.map(({ component, path, isPublic }) => {
            return (
              <Route
                path={path}
                key={path}
                element={
                  isPublic ? (
                    <RoutePublic isAuthenticated={user.isAuthenticated}>{component()}</RoutePublic>
                  ) : (
                    <RoutePrivate isAuthenticated={user.isAuthenticated}>{component()}</RoutePrivate>
                  )
                }
              />
            )
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
