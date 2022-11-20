import { ButtonStyled } from './Button.module';

export const Button = ({
  icon: Icon = null,
  type = 'button',
  children,
  disabled = false,
}) => {
  return (
    <ButtonStyled disabled={disabled} type={type}>
      {Icon && <Icon size="16" />}
      {children}
    </ButtonStyled>
  );
};
