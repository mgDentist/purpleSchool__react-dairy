import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import TextContainer from './components/TextComtainer/TextContainer';
import CardsContainer from './components/CardsContainer/CardsContainer';

function App() {

  const DATA = [
    {
      title: 'Title 1',
      subtitle: 'Subtitle 1 Subtitle 1 Subtitle 1 Subtitle 1 Subtitle 1'
    },
    {
      title: 'Title 2',
      subtitle: 'Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2'
    },
    {
      title: 'Title 3',
      subtitle: 'Subtitle 3 Subtitle 3 Subtitle 3 Subtitle 3 Subtitle 3'
    }
  ];

  return (
    <>
      <div>Проект</div>
      <CardsContainer>
        <Card>
          <TextContainer
            title={DATA[0].title}
            subtitle={DATA[0].subtitle}
          />
          <Button>Ok</Button>
        </Card>

        <Card>
          <TextContainer
            title={DATA[1].title}
            subtitle={DATA[1].subtitle}
          />
          <Button>Ok</Button>
        </Card>

        <Card>
          <TextContainer
            title={DATA[2].title}
            subtitle={DATA[2].subtitle}
          />
          <Button>Ok</Button>
        </Card>
      </CardsContainer>

    </>
  );
}

export default App;
