# react-router-dom
npm i react-router-dom
/src/App.js
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./components/Login"
<BrowserRouter>
    <div className="App">
        <Switch>
            <Route exact path={`/`} component={Login}/>
        </Switch>
    </div>
</BrowserRouter>

# react-sortable-hoc
https://github.com/clauderic/react-sortable-hoc
npm install react-sortable-hoc
npm install array-move
[SortableComponentBasic.js](components/SortableComponentBasic.js)
[SortableComponentImage.js](components/SortableComponentImage.js)

# react-json-pretty
https://www.npmjs.com/package/react-json-pretty
npm i react-json-pretty
[JsonPretty.js](components/JsonPretty.js)

# react-json-editor-ajrm
https://www.npmjs.com/package/react-json-editor-ajrm
npm i react-json-editor-ajrm
[JsonEditor.js](components/JsonEditor.js)

# react-number-format
https://www.npmjs.com/package/react-number-format
npm i react-number-format
<NumberFormat value={100000} displayType={'text'} thousandSeparator={true}/>
