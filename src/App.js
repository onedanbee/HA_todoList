import React, {Component} from 'react';
import TOC from "./components/TOC"
import Content from "./components/Content"
// import Subject from "./components/Subject"
import './App.css';





class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:"welcome",
      subject:{title:"WEB", sub:"World wide web!"},
      welcome:{title:"Welcome", desc:"Hello, React!"},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for infomation'},
        {id:2, title:'CSS', desc:'HTML is for infomation'},
        {id:3, title:'JS', desc:'HTML is for infomation'}
      ]
    }

  }
  render(){
    var _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === "read"){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/*<Subject title={this.state.subject.title} sub={this.state.subject.sub} />*/}
        <TOC data={this.state.contents} />
        <Content title={_title} desc={_desc} />
        <header>
              <h1><a href="/" onClick={function(e){
                console.log(e);
                e.preventDefault();
                this.setState({
                  mode:'welcome'
                })
              }.bind(this)}>{this.state.subject.title}</a></h1>
               {this.state.subject.sub}
        </header>
      </div>
    );
  }
}

export default App;
