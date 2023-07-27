import styled from 'styled-components'
import { colors } from '../../../themeColors'

export const StyledContactUs = styled.div`
  font-family: 'Poppins';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.blue2};
  color: ${colors.white};
  width: 223px;
  height: 201px;
  border-radius: 24px;
  font-size: 18px;
  font-weight: 200;
  padding: 0 20px 16px 14px;
  text-align: center;
  margin: 210px auto 0;

  img {
    margin: -70px auto 5px;
    width: 190px;
  }

  span {
    font-weight: 700;
  }
`

export const StyledBtnContactUs = styled.button`
  font-family: 'Poppins';
  width: 100%;
  height: 50px;
  background-color: ${colors.blue1};
  border-radius: 100px;
  padding: 0px 18px;
  color: white;
  border: none;
  font-size: 16px;
  margin-top: 10px;
  font-weight: 600;
  cursor: pointer;
`
