import { forwardRef } from "react";
import { InputContainer } from "./styles";

export const Input = forwardRef(({ title, ...rest }, ref) => {
  return (
    <InputContainer>
      {title && title}
      <input ref={ref} {...rest} />
    </InputContainer>
  );
});
