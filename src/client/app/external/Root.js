import React, { useEffect } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'

import Login from './login'

const Root = (props) => {
  useEffect(() => {
    console.log("props: ", props)
    console.log("process.env: ", process.env)
  }, [])

  return (
    <div className="external">
      <div className="alert-main">
        <ToastContainer
          hideProgressBar={true}
          autoClose={2500}
        />
      </div>
      <div className="layout-main">
        <div className="layout-header"></div>
        <div className="layout-body">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path='*' render={
              () => <Redirect to='/login' />
            } />
          </Switch>
        </div>
        <div className="layout-footer"></div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps)(Root)