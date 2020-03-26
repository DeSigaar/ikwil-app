import * as React from 'react'

import styled from 'styled-components'
import { colors, layout, fonts } from 'src/styles'
import ChevronGrey from 'src/assets/general/chevron_grey.svg'

const ActivityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`

const ActivityItem = styled.div<StyleProps>`
  width: 75%;
  max-height: ${({ toggle }) => (toggle ? '300px' : '40px')};
  min-height: ${({ toggle }) => (toggle ? '200px' : '40px')};
  transition: 0.2s;
  box-shadow: ${colors.shadows.default};
  display: flex;
  align-items: flex-start;
  justify-items: center;
  flex-direction: column;
  /* background-color: ${({ color }) => color}; */
  border-radius: ${layout.borderRadius};
  color: ${colors.colors.darkgrey};
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: ${fonts.size.normal};
  font-weight: ${fonts.fontWeights.bold};

`
const ActivityBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const LogoAndTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Toggle = styled.button<StyleProps>`
  width: 40px;
  height: 40px;
  border: 0;
  padding: 0;
  background: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ toggle }) => toggle && 'rotate(180deg)'};
  transition: 0.3s;

  &:focus {
    outline: unset;
  }
`

const Details = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: unset;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.fontWeights.normal};
`
const Line = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border-width: 1px;
  width: 70%;
`

const Meedoen = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.fontWeights.normal};
`
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin: 5px;
`

const Detail = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

interface StyleProps {
  toggle: boolean
}

interface Props {
  name: string
  organisers: string[]
  repeats: boolean
  room: string
  categoryName: string
  categoryColor: string
  days: any //TODO any veranderen
}

const Activity: React.FC<Props> = (props: Props) => {
  const [toggle, setToggle] = React.useState(false)

  {
    console.log(props)
    console.log(toggle)
  }
  return (
    <ActivityContainer>
      <ActivityItem toggle={toggle} color={props.categoryColor}>
        <ActivityBar>
          {/* <span> |{props.categoryName}| </span> */}
          <LogoAndTitle>
            <span> |icon| </span>
            <span>{props.name}</span>
          </LogoAndTitle>

          <Toggle toggle={toggle} onClick={(): void => setToggle(!toggle)}>
            <img width="20px" height="20px" src={ChevronGrey} />
          </Toggle>
        </ActivityBar>

        {toggle && (
          <>
            <Details>
              <Detail>
                <span> |icon| </span> {props.room}
              </Detail>
              <Detail>
                <span> |icon| </span> {props.room}
              </Detail>
              <Detail>
                <span> |icon| </span> {props.room}
              </Detail>
              <Detail>
                <span> |icon| </span> {props.room}
              </Detail>
            </Details>
            <Line />
            <Meedoen>
              <span>Meedoen met {props.name}?</span>
              <Buttons>
                <button>Ja</button>
                <button>Misschien</button>
                <button>Nee</button>
              </Buttons>
            </Meedoen>
          </>
        )}
      </ActivityItem>
    </ActivityContainer>
  )
}

export default Activity
