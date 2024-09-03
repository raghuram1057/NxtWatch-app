import styled from 'styled-components'

export const HomeBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 576px) {
    align-items: center;
  }
`
export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #7e858e;
  max-width: 35vw;
  height: 30px;
  margin: 16px;
  @media screen and (max-width: 576px) {
    max-width: 100vw;
  }
`
export const SearchEl = styled.input`
  outline: none;
  border: none;
  color: ${props => (props.isDark ? '#f4f4f4' : '#606060')};
  font-family: 'Roboto';
  width: 100%;
  height: 100%;
  margin: 6px;
  background-color: transparent;
`
export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDark ? '#606060' : '#ebebeb')};
  border: 1px solid #7e858e;
  cursor: pointer;
  height: 100%;
  padding-left: 13px;
  padding-right: 13px;
  border-left-width: 2px;
`
export const ItemsListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: auto;
  max-height: 100vh;
`
export const ErrorContainer = styled(ItemsListContainer)`
  flex-direction: column;
  flex-wrap: nowrap;
`
export const ErrorImage = styled.img`
  height: 45vh;
  max-width: 55vh;
`
export const ErrorHeadText = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: xx-large;
  font-family: 'Roboto';
  font-weight: 700;
  text-align: center;
`
export const ErrorDescription = styled.p`
  color: ${props => (props.isDark ? ' #475569' : '#7e858e')};
  font-family: 'Roboto';
  font-size: large;
  text-align: center;
`
export const RetryButton = styled.button`
  background-color: #00306e;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: medium;
  cursor: pointer;
  padding: 8px 20px;
  border: none;
  border-radius: 8px;
`
