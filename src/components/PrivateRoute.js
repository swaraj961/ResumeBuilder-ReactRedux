import React from 'react'
import { Route, Redirect} from 'react-router-dom'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

export default function PrivateRoute({component: Component,...remaningProps}) { // sending path and components

    // use selector is same as mapStatetoProp
    const authFirebase = useSelector(state=>state.firebase.auth)
    return (
        <Route  {...remaningProps}

        // props is here are like -> BrowerRouter props ex - history ,location we can't directly pass props to componet so we use callback render method to pass them to componets

        render={({props})=>isLoaded(authFirebase) && !isEmpty(authFirebase) ?
        
        (<Component{...props}/>) : (<Redirect to='/'  />)
        }
        
        />
    )
}
