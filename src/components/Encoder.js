import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setEncoderInput, encode, setError, clearError } from '../store/actions/encoderActions'
import { TextField, Button } from '@material-ui/core'

const Encoder = ({
  error,
  loading,
  setEncoderInput,
  encoderInput,
  encoderOutput,
  encode,
  clearError,
  token,
}) => {
    
  useEffect(() => {
    clearError()
  }, [encoderInput])

  const hasError = error => error ? true : false

  return (
    <div className="encoder">
        <TextField className="input" error={hasError(error)} value={encoderInput} onChange={e => setEncoderInput(e.target.value)} label="Input a value" />
        <br></br>
        <span className="error">{error}</span>
        <Button 
          className="button login-button"
          variant="contained" color="primary"
          style={{backgroundColor: loading ? 'rgba(0, 0, 0, 0.12)' : '', color: loading ? '#333' : ''}} 
          disabled={loading} 
          onClick={() => encode(encoderInput, token)}
        >Encode</Button>
        <br></br>
        {encoderOutput && <span>Output value is {encoderOutput}</span>}
    </div>
  )
}

const mapStateToProps = state => ({
    loading: state.encoder.loading,
    error: state.encoder.error,
    encoderInput: state.encoder.input,
    encoderOutput: state.encoder.output,
    token: state.loginForm.token
})

const mapActionsToProps = ({
    encode,
    setError,
    clearError,
    setEncoderInput,
    encode
})

export default connect(mapStateToProps, mapActionsToProps)(Encoder)
