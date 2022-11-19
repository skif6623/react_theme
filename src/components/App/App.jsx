import styled from '@emotion/styled';
import { Button } from '../Button/Button';
import {
  IoAddCircleOutline,
  IoAirplaneOutline,
  IoArchiveOutline,
} from 'react-icons/io5';

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
      <Button icon={IoAddCircleOutline}>Пошук</Button>
      <Button icon={IoAirplaneOutline}>Фільтр</Button>
      <Button icon={IoArchiveOutline}>Вікно</Button>
      <Button type="submit">Вхід</Button>
    </>
  );
}

export default App;
