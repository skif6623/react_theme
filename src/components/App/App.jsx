import styled from '@emotion/styled';
import { Button } from '../Button/Button';
import {
  IoAddCircleOutline,
  IoAirplaneOutline,
  IoArchiveOutline,
} from 'react-icons/io5';
import Box from '../Box/Box';

const Text = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.xl};
  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  padding: ${p => p.theme.space[6]}px;
`;

function App() {
  return (
    <Box bg="tomato">
      <Text>Доброго вечора. Ми з України!!!!</Text>
      <Button icon={IoAddCircleOutline}>Пошук</Button>
      <Button icon={IoAirplaneOutline}>Фільтр</Button>
      <Button icon={IoArchiveOutline}>Вікно</Button>
      <Button type="submit">Вхід</Button>
    </Box>
  );
}

export default App;
