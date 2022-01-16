import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect, useLocation} from "react-router-dom";
import Auth from "./common/Auth";

const App = () => {

  return (
    <BrowserRouter>
    <Switch>
        <Route exact path={`/FilesPage`} component={FilesPage}/>
        <Route exact path={`/`} render={() => <Redirect to="/UsersPage" />} />
    </Switch>
    </BrowserRouter>
  )
}

export default App