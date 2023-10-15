import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newQoute, setQoutes } from './redux/action';

function App() {
  const qoutes = useSelector((state) => state.qoutes)
  const qoutesIndex = useSelector((state) => state.qoute_index)
  const dispatch = useDispatch()
  const newQuote = () => {
    dispatch(newQoute())
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
      const result = await response.json();
      const q = result.quotes;
      dispatch(setQoutes(q))
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  let currentQoute = qoutes.length ? qoutes[qoutesIndex] : { quote: 'In seems there was an exception.', author: 'The developer' }
  const colors = randomColors()



  return (

    <div className="app" style={{ backgroundColor: colors.main }}>
      <div className="quote-box" id="quote-box" style={{ backgroundColor: colors.secondary }}>

        <div id="text" className="qoute-text" style={{ color: colors.main }}>{currentQoute.quote} </div>
        <div id="author" className="qoute-author" style={{ color: colors.main }}>{currentQoute.author}</div>
        <div className='actions'>
          <a id="twitter" target="_blank" href={'https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=' 
          + encodeURIComponent(currentQoute.quote + currentQoute.author) } style={{ backgroundColor: colors.main, color:colors.secondary }}><i className="fa fa-twitter"></i></a>

          <button id="new-quote" onClick={newQuote} style={{ backgroundColor: colors.main,color:colors.secondary  }}>New quote</button>
        </div>

      </div>
    </div>
  );
}

export default App;

function randomColors() {
  const r = () => Math.floor(Math.random() * 16);

  const characters = '0123456789ABCDEF';

  const colors = {
    main: '#',
    secondary: '#'
  };

  for (let index = 0; index < 3; index++) {
    const randomPosition = Math.abs(Math.floor(Math.random() * 6) - (Math.random()>0.5 ? 15 : 0));
    colors.main += characters[randomPosition];
    colors.secondary += characters[15 - randomPosition];
  }

  return colors;
}



