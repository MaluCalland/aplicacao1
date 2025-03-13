import React, { Component } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useFonts, Inter_300Light } from "@expo-google-fonts/inter"; 

const Card = ({title, description}) => {
  return(
    <View style={styles.card} >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };

    this.entrar = this.entrar.bind(this);
  };

  entrar(nome){
    this.setState({
      nome: nome
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#4B0082', fontSize: 25, margin: 10, fontFamily: Inter_300Light}}>Aplicação Inicial</Text>
        <Text style={{margin: 5}}>Espaço Inicial da Aplicação</Text>
        <Text style={{margin: 5}}>Versão 1.0</Text>
      <Button title="Entrar" onPress={() => this.entrar('Seja bem vindo a minha aplicação')}/>
      <Text style={{fontSize: 16, color: 'green', textAlign: 'center'}}>
        {this.state.nome}
      </Text>
        <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6lBZD_1cRR1H6iB1Dq0Z-zmRr_soYubCCvQ&s'}}
        style={{width: 300, height: 200}}
        />

        <Card title='Animais' description='aaaaaaaaaaaaaaaaaaaaaaaa'/>

        <Jobs
          largura={300} altura={200}
        />
        </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green'
  },
  card: {
    width: 300,
    height: 200, 
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  }, 
  description: {
    fontSize: 12,
    color: 'blue'
  },
})

class Jobs extends Component {
  render(){ //usar sempre o let - fluidez 
    let img = 'https://th.bing.com/th/id/OIP.Izgfu26DtMBSsgrE9TGQJAHaEK?w=296&h=180&c=7&r=0&o=5&pid=1.7';

    return(
      <View>
        <Image
          source={{uri: img}}
          style={{width: this.props.largura, height: this.props.altura}}
        />
        <Text>
          Imagem Cachorro
        </Text>
      </View>
    );
  }
}