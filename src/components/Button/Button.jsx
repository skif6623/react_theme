import { ButtonStyled } from './Button.module';

export const Button = ({ type = 'button', children }) => {
  return <ButtonStyled type={type}>{children}</ButtonStyled>;
};
