# old-redux
npx create-react-app [name] --template redux
or 
npm install redux react-redux redux-thunk redux-devtools-extension react-router-dom
mkdir -p src/actions src/components src/pages src/reducers

# toolkit-redux
npm i @reduxjs/toolkit
mkdir -p src/components src/pages src/slices

# redux class component
import { getMe,  } from "slices/user";
import {connect, } from "react-redux";

class Video extends Component {
    componentDidMount() {
        this.props.dispatch(getMe())
	}

	render() {
        return (
            <pre className="text-sm">
                {JSON.stringify(this.props.me, null, '  ')}
            </pre>
        )
    }
}
const mapStateToProps = function(state) {
	console.log('state', state)
	return {
		me: state.users.me,
	}
}
export default connect(mapStateToProps)(Video);


