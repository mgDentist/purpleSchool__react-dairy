import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import TextContainer from './components/TextContainer/TextContainer';
import CardsContainer from './components/CardsContainer/CardsContainer';

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
      <div>Проект</div>
      <CardsContainer>
      {DATA.map((item, index) => (
        <Card key={index}>
          <TextContainer data={item}/>
          <Button>OK</Button>
        </Card>
      ))}
      </CardsContainer>
    </>
  );
}

export default App;
