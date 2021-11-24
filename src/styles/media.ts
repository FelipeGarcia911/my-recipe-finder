import { css } from '@emotion/css'

export const breakpoints = {
  xs: 0,
  sm: 420,
  md: 768,
  lg: 1025,
  xl: 1440,
}

export const mq = (key: keyof typeof breakpoints) => {
  return (template: TemplateStringsArray, ...args: any[]) =>
    css`
      @media (min-width: ${breakpoints[key]}px) {
        ${css(template, ...args)};
      }
    `
}
