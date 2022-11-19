import { ButtonStyled } from './Button.module';

export const Button = ({ type = 'button', children, disabled = false }) => {
  return (
    <ButtonStyled disabled={disabled} type={type}>
      {children}
    </ButtonStyled>
  );
};
