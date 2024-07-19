import './App.css';
import AddTodosButton from './components/AddTodosButton/AddTodosButton';
import CardButton from './components/CardButton/CardButton';
import TextContainer from './components/TextContainer/TextContainer';
import CardsContainer from './components/CardsContainer/CardsContainer';
import TodosWrapper from './components/TodosWrapper/TodosWrapper';
import MainTitle from './components/MainTitle/MainTitle';

function App() {

  const DATA = [
    {
      title: 'Title 1',
      subtitle: 'Subtitle 1 Subtitle 1 Subtitle 1 Subtitle 1 Subtitle 1',
      date: new Date()
    },
    {
      title: 'Title 2',
      subtitle: 'Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2',
      date: new Date()
    },
    {
      title: 'Title 3',
      subtitle: 'Subtitle 3 Subtitle 3 Subtitle 3 Subtitle 3 Subtitle 3',
      date: new Date()
    }
  ];

  return (
    <>
      <MainTitle>Todoer.</MainTitle>
      <TodosWrapper>
        <CardButton>+ Добавить заметку</CardButton>
        <CardsContainer>
          {DATA.map((item, index) => (
            <CardButton key={index}>
              <TextContainer data={item} />
            </CardButton>
          ))}
        </CardsContainer>
      </TodosWrapper>
    </>
  );
}

export default App;
