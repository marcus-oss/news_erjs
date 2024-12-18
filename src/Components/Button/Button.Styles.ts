import styled from "styled-components";

const THEME = {
  danger: {
    bg: "#F84735",
    color: "#FFFFFF",
    onHover: `
        box-shadow: 0 3px 6px rgba(0,0,0,.2);
      `,
  },
  primary: {
    bg: "#0099FF",
    color: "#FFFFFF",
    onHover: `
        box-shadow: 0 3px 6px rgba(0,0,0,.2);
      `,
  },
  text: {
    bg: "transparent",
    color: "#274060",
    onHover: `
        border-color: #274060;
      `,
  },
};

export const Wrapper = styled.button<{
  variant: "danger" | "primary" | "text";
}>`
  padding: 6px 8px 4px;
  border: 1px solid ${(p) => THEME[p.variant].bg};

  color: ${(p) => THEME[p.variant].color};
  background-color: ${(p) => THEME[p.variant].bg};

  &:hover,
  &:focus {
    ${(p) => THEME[p.variant].onHover};
  }
  &:disabled {
    background-color: ${(p) => THEME[p.variant].disabled.bg};
    color: ${(p) => THEME[p.variant].disabled.color};

    pointer-events: none;
    border-color: transparent;
  }
`;
