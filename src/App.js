import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar';
import Game from './Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: this.createTileObjects(),
      halfPair: false,
      matchedColor: ''
    }
    this.handleMatch = this.handleMatch.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  getRandomColors() {
    let Colors = [];
    for(let i = 1; i <= 8; i++){
      let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
      let currentColor = this.props.allColors[colorIndex];
      if(Colors.includes(currentColor)){
        i--;
      } else {
        Colors.push(currentColor,currentColor);
      }
    }
    let randomColors = [];
    while (Colors.length > 0) {
      let currentIndex = Math.floor(Math.random() * Colors.length);
      randomColors.push(Colors[currentIndex]);
      Colors.splice(currentIndex,1);
    }
    return randomColors;
  }

  createTileObjects(){
    return this.getRandomColors().map((color,i) => {
      return ({id: i, color, status: 'hidden', enabled: true})
    });
  }

  handleMatch(id,color,enabled){
    if(enabled){
      let tiles = this.show(id);
      if(this.state.halfPair){
        this.setState({tiles, halfPair: false});
        if(this.state.matchedColor === color){
          tiles = this.state.tiles.map(tile => {
            if(tile.status === 'shown'){
              tile.status = 'matched';
            }
            return tile;
          });
          tiles = this.enable(false,'matched');
          this.setState({tiles});
        } else {
          this.enable(false,'shown');
          this.enable(false,'hidden');
          this.setState({tiles});
          setTimeout(() => {
            tiles = this.enable(true,'shown');
            tiles = this.enable(true,'hidden');
            tiles = this.hide('shown');
            this.setState({tiles})
          },1000)
        }
      } else {
        this.enable(false,'shown');
        this.setState({halfPair: true, matchedColor: color, tiles});
      }
    }
  }

  show(id){
    return this.state.tiles.map(tile => {
      if (id === tile.id){
        tile.status = 'shown';
      }
      return tile;
    });
  }

  hide(status){
    return this.state.tiles.map(tile => {
      if (status){
        if(tile.status === status){
          tile.status = 'hidden';
        }
      } else {
        tile.status = 'hidden';
      }
      return tile;
    });
  }

  enable(direction,status){
    return this.state.tiles.map(tile => {
      if(tile.status === status){
        tile.enabled = direction;
      }
      return tile;
    });
  }

  newGame(){
    this.setState({
      tiles: this.createTileObjects(),
      halfPair: false,
      matchedColor: ''
    });
  }

  render(){
    return (
      <div className="App">
        <Navbar newGame={this.newGame} />
        <Game tiles={this.state.tiles} handleMatch={this.handleMatch} />
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default App;
