import styled from 'styled-components'

export const MenuItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  line-height: 0.2;
  padding-right: 10px;
`
export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => {
    const {isDark} = props
    const bgColor = isDark ? '#424242' : '#d7dfe9'
    return props.isActive ? bgColor : ''
  }};
  margin-top: 10px;
  padding-left: 10px;
`
export const MenuText = styled.p`
  font-family: 'Roboto';
  font-size: medium;
  font-weight: ${props => (props.isActive ? 700 : 400)};
  margin-left: 20px;
  color: ${props => {
    const {isDark} = props
    const inActive = isDark ? '#ebebeb' : '#424242'
    const active = isDark ? '#ffffff' : '#000000'
    return props.isActive ? active : inActive
  }};
`
