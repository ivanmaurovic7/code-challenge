import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setToken } from '../store/actions/loginFormActions'
import Login from './Login'
import Encoder from './Encoder'

const AppWrapper = ({
  token,
}) => {

  // Would store it in cookies in real app
  useEffect(() => {
    let reuseToken = localStorage.getItem('token')
    if(reuseToken) {
        setToken(reuseToken)
    } else if(token) {
      localStorage.setItem('token', token)
    }
  }, [token])

  return (
    <div>
        {token ? <Encoder/> : <Login/>}
    </div>
  )
}

const mapStateToProps = state => ({
    token: state.loginForm.token,
})

const mapActionsToProps = ({
    setToken,
})

export default connect(mapStateToProps, mapActionsToProps)(AppWrapper)
