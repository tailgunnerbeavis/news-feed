import React, { Component } from 'react';
import './App.css';
import Feed from './Feed.js';
import Editor from './Editor.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      editing: null, 
      list: [
        {name: "Test1", type: "Test", value: "Test Data"},
        {name: "Test2", type: "Test", value: "More Test Data"},
        {title: "Test Blog", type: "Blog", author: "Seymour Buttz", text: "My Awesome Article"},
        ],
      types: [
        {
          name: "Test",
          entries: ["name", "value"],
          template: ({name, type, value}) => this.htmlTemplate`<h3>${name} - ${type}</h3><span>${value}</span>`
        },
        {
          name: "Blog",
          entries: ["title", "author", "text", "image"],
          template: ({title, author, text, image}) => this.htmlTemplate`<h3>${title}<h3><span>by ${author}</span><p>${text}</p>`
        }
      ]
      };
  }

  htmlTemplate(pieces) {
    var result = pieces[0];
    var substitutions = [].slice.call(arguments, 1);
    for (var i = 0; i < substitutions.length; ++i) {
        result += substitutions[i] + pieces[i + 1];
    }

    return result;
  }

  edit = (i) =>{
    this.setState({editing: i})
  }

  save = (item, i) =>{
    let newList = this.state.list
    newList[i] = item
    this.setState({list: newList})
  }

  add = (item) =>{
    let newList = this.state.list
    newList.push(item)
    this.setState({list: newList})
  }

  doneEditing = () =>{
    this.setState({editing: null})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <h1 onClick={() => this.add({type: "Test?"})}>+</h1>
        <Feed list={this.state.list} edit={this.edit} types={this.state.types} />
        {this.state.editing !== null? <Editor list={this.state.list} itemNum={this.state.editing} save={this.save} doneEditing={this.doneEditing} types={this.state.types} /> : null}
      </div>
    );
  }
}

export default App;
