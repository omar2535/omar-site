import Fade from './Fade';

class Header extends React.Component {
  render(){
    return(
      <Fade timer='2s' name='header'>
        <style jsx>
          {`
          #title {
            position: absolute;
            left: 50%;
            top: 10%;
            width: 100%;
            text-align: center;
            color: rgb(255, 255, 255);
            font-size: 50px;
            transform: translate(-50%, -50%);
            margin-bottom: 2em;
            margin-top: 1em;
          }
          `}
        </style>
          <h1 className={`title blurrable`} id='title'>OMAR TSAI</h1>
      </Fade>
    )
  }
}

export default Header;
