import * as B from "./Button.Styles";
import { DetailedHTMLProps } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "danger" | "text" | "primary";
  label: string;
}

export default function Button({ label, variant, ...props }: ButtonProps) {
  return (
    <B.Wrapper variant={variant} {...props}>
      {label}
    </B.Wrapper>
  );
