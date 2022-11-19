import { ButtonStyled } from './Button.module';
import { IoAddCircleOutline } from 'react-icons/io5';

export const Button = ({ type = 'button', children, disabled = false }) => {
  return (
    <ButtonStyled disabled={disabled} type={type}>
      <IoAddCircleOutline />
      {children}
    </ButtonStyled>
  );
};
