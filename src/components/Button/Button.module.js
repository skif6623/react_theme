import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  margin: ${p => p.theme.space[0]};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  cursor: pointer;
`;
