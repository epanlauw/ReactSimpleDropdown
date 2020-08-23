import React, { Component } from 'react';

class SimpleDropdown extends Component{
  constructor(props){
    super(props);
    this.state = {
      objects: [],
      types: [],
      titles: [],
      selectedObject: '--Pilih Object--',
      selectedType: '--Pilih Tipe--',
    };
    this.changeObject = this.changeObject.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  componentDidMount(){
    this.setState({
      objects: [
        { name: 'Game', types: [
          {name: 'Open World', titles: ['Grand Theft Auto V', 'Skyrim', 'Just Cause', 'Minecraft', 'Grand Theft Auto San Andreas']},
          {name: 'Role Playing Game', titles: ['Final Fantasy VII', 'The Witcher 3', 'Fallout 4', 'Suikoden 2', 'Tales of Abyss']},
          {name: 'Survival Game', titles: ['Resident Evil 4', 'The Last of Us', 'Days Gone']},
          {name: 'Battle Royal', titles: ['Call of Duty Mobile', 'PUBG Mobile', 'Free Fire']},
        ]},
        { name: 'Movie', types:[
          {name: 'Action', titles: ['The Expandables', 'James Bond', 'Mission Impossible', 'Fast and Furious']},
          {name: 'Superhero Marvel', titles: ['Iron Man', 'Captain America', 'The Avengers', 'Iron Man 2', 'Thor']},
          {name: 'Fantasy', titles: ['Alladiin', 'Mulan', 'Star Wars']},
        ]}
      ]
    })
  }

  changeObject(event){
    this.setState({selectedObject: event.target.value});
    this.setState({types: this.state.objects.find(obj => obj.name === event.target.value).types});
  }

  changeType(event){
    this.setState({selectedType: event.target.value});
    const typs = this.state.objects.find(obj => obj.name === this.state.selectedObject).types;
    this.setState({titles: typs.find(typ => typ.name === event.target.value).titles});
  }

  render(){
    return(
      <div>
        <h1>Dependent Dropdown</h1>
        <div class="custom-select">
          <label>Objects</label><br/>
          <select placeholder="Object" value={this.state.selectedObject} onChange={this.changeObject}>
            <option>--Choose Country--</option>
            {this.state.objects.map((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>
        <div class="custom-select">
          <label>Types</label><br/>
          <select placeholder="Type" value={this.state.selectedType} onChange={this.changeType}>
            <option>--Choose Type--</option>
            {this.state.types.map((e, key) => {
              return <option key={key}>{e.name}</option>
            })}
          </select>
        </div>
        <div>
          <label>Title</label><br/>
          <select>
            <option placeholder="Title">--Choose Title--</option>
            {this.state.titles.map((e, key) => {
              return <option key={key}>{e}</option>;
            })}
          </select>
        </div>
    </div>
    );
  }
}

export default SimpleDropdown;
