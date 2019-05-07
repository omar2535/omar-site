import Layout from '../components/Layout';
import Fade from '../components/Fade';

class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quotes: [
        {
          author: 'Fidel Castro',
          quote: `The equal right of all citizens to health, education, work, food, security, culture, science,
                  and wellbeing - that is, the same rights we proclaimed when we began our struggle, in addition to those which emerge from our dreams of
                  justice and equality for all inhabitants of our world - is what I wish for all.`
        },
        {
          author: 'Mark Twain',
          quote: `Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.`
        },
        {
          author: 'David Brinkley',
          quote: `A successful man is one who can lay a firm foundation with the bricks others have thrown at him`
        },
        {
          author: 'Albert Einstein',
          quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`
        },
        {
          author: 'Charles Darwin',
          quote: `A man who dares to waste one hour of time has not discovered the value of life`
        },
        {
          author: 'Neil deGrasse Tyson',
          quote: `The good thing about science is that it's true whether or not you believe in it.`
        },
        {
          author: 'Marie Curie',
          quote: `Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.`
        },
        {
          author: 'Issac Newton',
          quote: `If I have seen further it is by standing on the shoulders of Giants.`
        },
        {
          author: 'Stephen Hawking',
          quote: `One, remember to look up at the stars and not down at your feet. Two, never give up work.
                  Work gives you meaning and purpose and life is empty without it.
                  Three, if you are lucky enough to find love, remember it is there and don't throw it away.`
        }
      ]
    };
  }

  chooseRandomQuote(){
    var random_quote_index =  Math.floor(Math.random() * Math.floor(this.state.quotes.length));
    var quote_object = this.state.quotes[random_quote_index];
    return(
      <p>
        <i>
          “{quote_object.quote}”
        </i>
        <br/>
        - {quote_object.author}
      </p>
    )
  }

  render(){
    return(
      <div className='app' id='app'>
        <Layout>
          <style jsx>
            {`
              #main-text{
                padding-left: 15em;
                padding-right: 15em;
              }
            `}
          </style>
          <Fade timer='3s' name='index'>
            <div id='main-text' className={`blurrable`}>
              {this.chooseRandomQuote()}
            </div>
            </Fade>
        </Layout>
      </div>
    )
  }
}

export default Index