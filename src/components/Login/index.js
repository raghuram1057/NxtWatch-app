import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import ReactContext from '../../context/ReactContext'

import {
  BgContainer,
  LoginCardContainer,
  Logo,
  InputContainer,
  LabelEl,
  InputEl,
  InputElContainer,
  CheckBoxContainer,
  CustomButton,
  FormContainer,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    passwordType: 'password',
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  getLoginDetails = async () => {
    const {username, password} = this.state

    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const loginUrl = 'https://apis.ccbp.in/login'
    const response = await fetch(loginUrl, options)

    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeCheckBox = event => {
    const isCheck = event.target.checked

    const type = isCheck ? 'text' : 'password'
    this.setState({passwordType: type})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.getLoginDetails()
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDark} = value
          const logoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          console.log(isDark)

          const {passwordType, showErrorMsg, errorMsg} = this.state

          return (
            <BgContainer isDarkMode={isDark}>
              <LoginCardContainer isDarkMode={isDark}>
                <Logo src={logoUrl} alt="website logo" />
                <FormContainer onSubmit={this.onSubmitForm}>
                  <InputContainer>
                    <LabelEl isDarkMode={isDark}>USERNAME</LabelEl>
                    <InputElContainer>
                      <InputEl
                        type="text"
                        placeholder="Username"
                        onChange={this.onChangeUsername}
                        isDark={isDark}
                      />
                    </InputElContainer>
                  </InputContainer>

                  <InputContainer>
                    <LabelEl isDarkMode={isDark}>PASSWORD</LabelEl>
                    <InputElContainer>
                      <InputEl
                        type={passwordType}
                        placeholder="Password"
                        onChange={this.onChangePassword}
                        isDark={isDark}
                      />
                    </InputElContainer>
                    <CheckBoxContainer>
                      <InputEl
                        type="checkbox"
                        onChange={this.onChangeCheckBox}
                        id="checkbox"
                      />
                      <LabelEl isDarkMode={isDark} htmlFor="checkbox">
                        Show Password
                      </LabelEl>
                    </CheckBoxContainer>
                  </InputContainer>
                  <CustomButton type="submit">Login</CustomButton>
                </FormContainer>
                {showErrorMsg && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </LoginCardContainer>
            </BgContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Login
