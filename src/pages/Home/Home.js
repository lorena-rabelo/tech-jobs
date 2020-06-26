import React, { Component } from "react";
import GeneralTemplate from "../../templates/GeneralTemplate/GeneralTemplate";
import HomeContent from "../../components/organisms/HomeContent/HomeContent";
import "./home.css";


class Home extends Component {
  constructor() {
    super();

    // estado da classe
    this.state = {
      inputValue: "",
      data: []            //esse data é mutável
    };
  }

  componentDidMount = async () => {
    console.log('O componente foi montado')
    const getData = await this.props.data;
    this.setState( {data:getData} );
    console.log(this.state.data);
  }

  onClick = async () => {
    console.log("click");
    const { inputValue } = this.state;
    const { data } = this.props; //imutável

    if (inputValue && data.length){
      const result = await data.filter(item => item.position.toLowerCase().includes(inputValue.toLowerCase()));

      console.log({result});
      this.setState({ inputValue: "", data: result });
    } else {
      console.log("sem input ou sem data")
    }
  };

  onChange = (e) => {
    const value = e.target.value;
    this.setState({ inputValue: value })
    console.log("mudou");
  };

  render() {
    console.log('O Render foi chamado');
    const { inputValue, data } = this.state;  // tira a repetição do this.state
   
    return (
      <GeneralTemplate>
        {/*Todos os componentes aqui dentro sao filhos (children) do General Template*/}
        <HomeContent
          texto="Buscar"
          onClick={this.onClick}
          type="text"
          placeholder="O que voce procura?"
          value={inputValue}      // value={this.state.inputValue} 
          data = {data}          // data = {this.state.data}
          onChange={this.onChange}
        />
      </GeneralTemplate>
    )
  }
}


export default Home;