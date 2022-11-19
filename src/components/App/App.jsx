import styled from '@emotion/styled';
import { Button } from '../Button/Button';

const Text = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.xl};
  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  padding: ${p => p.theme.space[6]}px;
`;

function App() {
  return (
    <>
      <Text>Доброго вечора. Ми з України!!!!</Text>
      <Button>Пошук</Button>
      <Button>Фільтр</Button>
      <Button>Вікно</Button>
      <Button type="submit">Вхід</Button>
      <Button type="submit" disabled>
        Вхід
      </Button>
    </>
  );
}

export default App;
