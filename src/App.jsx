import './App.css';
// import AddTodosButton from './components/AddTodosButton/AddTodosButton';
import CardButton from './components/CardButton/CardButton';
import TextContainer from './components/TextContainer/TextContainer';
import CardsContainer from './components/CardsContainer/CardsContainer';
import TodosWrapper from './components/TodosWrapper/TodosWrapper';
import MainTitle from './components/MainTitle/MainTitle';

function App() {

  const DATA = [
    {
      title: 'Title 1 Title 1 Title 1Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 ',
      subtitle: 'Subtitle 1 Subtitle 1Subtitle 1Subtitle 1Subtitle 1Subtitle 1Subtitle 1Subtitle 1 Subtitle 1 Subtitle 1 Subtitle 1 Subtitle 1',
      date: new Date(),
      id: 4545,
    },
    {
      title: 'Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2Title 2',
      subtitle: 'Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2Subtitle 2Subtitle 2Subtitle 2Subtitle 2Subtitle 2',
      date: new Date(),
      id: 454645,
    },
    {
      title: 'Title 3 Title 3 Title 3 Title 3 Title 3',
      subtitle: 'Subtitle 3 Subtitle 3 Subtitle 3 Subtitle 3 Subtitle 3 Subtitle 3Subtitle 3Subtitle 3Subtitle 3Subtitle 3Subtitle 3Subtitle 3Subtitle 3Subtitle 3Subtitle 3Subtitle 3',
      date: new Date(),
      id: 459075,
    }
  ];

  return (
    <>
      <MainTitle>Todoer.</MainTitle>
      <TodosWrapper>
        <CardButton className='card-button__add'>+ Добавить заметку</CardButton>
        <CardsContainer>
          {DATA.map((item) => (
            <CardButton key={item.id}>
            {console.log(item)}
              <TextContainer data={item}/>
            </CardButton>
          ))}
        </CardsContainer>
      </TodosWrapper>
    </>
  );
}

export default App;
