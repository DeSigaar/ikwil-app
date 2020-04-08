import styled from 'styled-components'
import { colors, layout } from 'src/styles'

export const StyledTimeline = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export interface StyledDateProps {
  first: boolean
  isToday: boolean
}

export const StyledDate = styled.div<StyledDateProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-right: calc(20px + ${layout.unit * 0.75}px);
  height: 50px;
  top: calc(
    ${({ first }): string =>
        first ? `${layout.unit * 0.5}px` : ` ${layout.unit}px`} + 8px
  );
  transform: translateY(-16px);

  color: ${({ isToday }): string =>
    isToday ? colors.colors.orange : colors.colors.darkgrey};

  p {
    font-size: 14px;
  }

  p.month {
    text-transform: uppercase;
    font-weight: bold;
  }

  p.date {
    font-weight: bold;
    font-size: 16px;
  }

  p.day {
    text-transform: lowercase;
    font-size: 12px;
  }
`

export const StyledLine = styled.div`
  position: absolute;
  top: 0;
  right: ${layout.unit}px;
  bottom: 0;
  width: 2px;
  height: 100%;
  background: ${colors.colors.timeline};
`

export interface StyledDotProps {
  first: boolean
}

export const StyledDot = styled.div<StyledDotProps>`
  position: absolute;
  top: calc(
    ${({ first }): string =>
        first ? `${layout.unit * 0.5}px` : ` ${layout.unit}px`} + 8px
  );
  right: ${layout.unit}px;
  transform: translateX(calc(50% - 1px));
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    border-radius: 50%;
  }
`

export const StyledEmptyDot = styled.div`
  width: 10px;
  height: 10px;
  background: ${colors.colors.white};
  border: 2px solid ${colors.colors.timeline};
`

export const StyledYesDot = styled.div`
  width: 22px;
  height: 22px;
  background: ${colors.colors.successGreen};
  color: ${colors.colors.white};
  transform: scale(0.9);
  --ggs: 1;

  .gg-check {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px;
  }
  .gg-check::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px;
    top: -1px;
    width: 6px;
    height: 10px;
    border-width: 0 2px 2px 0;
    border-style: solid;
    transform-origin: bottom left;
    transform: rotate(45deg);
  }
`

export const StyledMaybeDot = styled.div`
  width: 22px;
  height: 22px;
  background: ${colors.colors.warningOrange};
  color: ${colors.colors.white};
  transform: scale(0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledNoDot = styled.div`
  width: 22px;
  height: 22px;
  background: ${colors.colors.errorRed};
  color: ${colors.colors.white};
  --ggs: 0.8;
  transform: scale(0.9);

  .gg-close {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 40px;
  }
  .gg-close::after,
  .gg-close::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 16px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 1px;
  }
  .gg-close::after {
    transform: rotate(-45deg);
  }
`
