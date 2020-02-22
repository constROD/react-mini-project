import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

/* Components */
import Sidebar from './sidebar'
import Dashboard from './content/dashboard'
import Expenses from './content/expenses'
import Categories from './content/categories'

const Root = () => {
  return (
    <>
      <ToastContainer
        hideProgressBar={true}
        autoClose={3000}
      />
      <div className="internal">
        <Sidebar />
        <div className="content-main">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/expenses" component={Expenses} />
            <Route path="/categories" component={Categories} />
            <Route path="*" render={() => <Redirect to={"/dashboard"} />} />
          </Switch>
        </div>
      </div>
    </>
  )
}

export default Root