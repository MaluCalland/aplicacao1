// import React, { Component } from "react";
// import { View, Text, Image } from "react-native";

// class App extends Component {
//   render() {
//     return (
//       <View >
//         <Text style={{color: '#4B0082', fontSize: 25, margin: 5}}>Aplicação Inicial</Text>
//         <Text style={{margin: 5}}>Espaço Inicial da Aplicação</Text>
//         <Text style={{margin: 5}}>Versão 1.0</Text>

//         <View style={{display: 'flex', flexDirection: 'row'}}>
//         <Image
//         source={{ uri: 'data:image/jpeg;base64,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'}}
//         style={{width: 300, height: 200}}
//         />

//         <Jobs
//           largura={300} altura={200}
//         />
//         </View>
//       </View>
//     )
//   }
// }

// export default App;

// class Jobs extends Component {
//   render(){ //usar sempre o let - fluidez 
//     let img = 'https://th.bing.com/th/id/OIP.Izgfu26DtMBSsgrE9TGQJAHaEK?w=296&h=180&c=7&r=0&o=5&pid=1.7';

//     return(
//       <View>
//         <Image
//           source={{uri: img}}
//           style={{width: this.props.largura, height: this.props.altura}}
//         />
//         <Text>
//           Imagem Cachorro
//         </Text>
//       </View>
//     );
//   }
// }

import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const technologies = [
  {
    id: '1',
    name: 'Tempo',
    description: 'Sistemas que simulam a inteligência humana para tarefas complexas.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Computação Quântica',
    description: 'Uso de bits quânticos para resolver problemas impossíveis para computadores clássicos.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: '5G',
    description: 'Nova geração de redes móveis com alta velocidade e baixa latência.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '4',
    name: 'Biotecnologia',
    description: 'Uso da biologia para desenvolver novas tecnologias e produtos.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '5',
    name: 'Carros Autônomos',
    description: 'Veículos que utilizam IA para navegar sem intervenção humana.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '6',
    name: 'Blockchain',
    description: 'Tecnologia descentralizada que garante segurança e transparência em transações.',
    image: 'https://via.placeholder.com/150',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Tecnologias Emergentes</Text>
      <FlatList
        data={technologies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;


// import React, { Component } from "react";
// import { View, Text, Image } from "react-native";

// class Teste extends Component{
//   render(){
//     let img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA7VBMVEX///8HAwjDKB4AAAAAAAbMKh+FGxako6RgFBHGKR7OKh+kIho9DQ3X19fS0tJsFhJ7GhW0JRy+AADCIBSGHBbNWVPPYl735eTuyce6AAC/EgDCHxLCIxjTKyDAGAngnZrSa2fqwL7s7OzGOzT88/L67u3HQz7dlZLz2Nbvz83LUUzbjov29vZ6eHpHDw4cGRyUk5TWfnripaLXgn/ntrTHQTvTcm6VHxhBP0HDwsMzMTOsq6xiYWKIh4hTUlQsCQrBMCsXFRhkFREiBwoWBglUEg82NDZvbW+fIRmqqaomJSdLSkwlCAo2Cwy7uruTIPLdAAALUUlEQVR4nO2daUPbuBaGE9uhtYG2UcjiNZuTOAuUrHSHlqHTgRn+/8+5liV5ydZQy7aU6/cLwXEoD0c6m07SQiFXrly5cuXK9f+uzise1IlB+EbkQW9iERbZl3ieE+aExaJER+wSSldnFHR1mxAiDUKzREHmBcOEJWFTQLUMQybacsO6lBOuCGWh3p5Xu4JRMQxDMHRLA8CqHBOhoDXh87bd69muenVnOJuPLKAfD6HR33J7fVED1rEQCmC49RX1qbpjsXJHaE13vKY+AsdBKIBJodBrNKfVfrdfm8+Gtv+qAdjmW/kj1AaDrgpGq/Gg2ZwCACqrBnlZexsih4RqdeZgw9mGLMgWqNbx6xpq5NYKj4RAG/RCN/Y9CB3M8PeLMKJVrXBHaFnN6I0tTdMN9wl1ji+MNXyrrKuzIeCNENR6aze2FrNa13J3o0rQl4ab5sDtWW0U6pwRyv5aDLRquZvRTWwaDdVBV4Zqu+HKgX+LHl+r1PBjvdNYLIbImiuVBIvZHYEOAqbt5rH8EBoWcpj1KVDvRn1NbcHva4FdQRtjEWu6NrQ4sqGsIcCxqo28BzUN2nSpd8lrZlX8YEweFBye9iFaorabmVUQQE2XQb1nyMCzmN1oLAB2Q7a6wPFxFiKk1BEJ9UXoEuLF2HeXnU8o6DXXSMDLaOoq0Px9OlcBCh4t3SeUrt5SlESdUK95l1cw2AWEgjAyCKH7jEa2pPsNgMGj56XimPDGVKjJpE+oeQsQJSxhQjfYhwjHGLAGewGuj63qIcKLrSngn0mmTqgNvKtLY51Q2EZowWdcxzRG1RQXhMC72Ea/8W5CtPk89yJYwykuF3kgBCgjq1V+Q4hs2DXQE6StwQGhbE3gNRvbZDeh52kcfJtfKXJAiCNFW/0NIYoW0/WWFPuElS5KPQfafkLPfaJUlC9CDeA0s6XvJ7RW8MFsox3FOqE2JyXhyNhP6P0lbMHgjnBArvX3E1ot+HWKl3KIk3VCw68dRpW9hDrchcQbacsAkXVCAZA+2iq6D6vA8jo0JPOeOUOnDWRZkA1NHQ+DjhTzhBppwDSjvnQ2nraWmgr8Veo1ZwzDkPvzoR88eSA0lvhaOxrxkZzZUq3Vt/wEi6OID3BL295GCCFr6mDzJxgcEeLa0Pct64Sw092arF/T/F+HfUL/PC1aW4RVF0b22hWOPI2LNMJXI/Xhql9tNcmZjL3stjytFpG/BieEJPXGvzaJh5aha6q6wm5mpOmegODlQFWO4iGUijHm630atwoEuLIf4XBpwaeHoeyUC8IKObyvahs5jayhPWiT+KDahd4dR1kbkrbCT4T7pfipdg3xO9i5qE5vGR7N4INQIGuxMFWtWoQQtAsjxL9AS1MbRAdsCCGVASskJQHCALHRB024LVG5aGguoa0iV7RCQVAThC2EDyfv6CkJQgH4R0rtqirUxksNzkP1Z3obnqih1v7dRnEocNPVh6ap+sejcBRjtZoO4PmEd+Q0QDWWo+4mpC/6J6R6ZbHlVnSotkSp6WDLSA1HhIKsdhsbtyJCBx8aVjeHv3gidB2L2p9FaiXbQYR1gNap3d2Y4eOLEJ51a6P5wqm7ctrN1R3AhBpujNcNjGhonBLCzs24C1RVcz0pnDQhhKTdUe+rWsXNWI0Gbs7xR+jlNLbdWu8m6qQEaYxrtXEbHeJzSai3vFtI9x41jOu6LIBoqT/TeCXErSnc5Jd1L0ra8MQpMnrqh3/+CFXEgWtcA69NuGgNIdTMmHPraSq4RYyPYFQcIb2026r5P2Hhx37eCOUKiYdNj8nPVr2DUX8rLtb7NPwQasFs2wiuQ78D5ageInp6sFHj80MoWGOSgNtuiVi5WxDGBrKim7sOIxPf3BEKml6bDd2kxmk0LZjj3LVmDcdxGjPUfQLzavTdF/wRulsRTZAC7C119K1GJhTW3pXANOHxv7Pr4oSCLh7YJTz+d1gyrpwwJ4SitA/pixYhHV+agC6odYQpNuKpKpGuPlNK4mSGLeWEOWFOmL1ywsMJD/nYiyx0/IQCNcKsQXbq+AnFYycsx7fhOfojlbNG2S6ZGqFUZtPVyKfUCE/ZJCzdxCfsiBBRumEz5JcoVMCd7x7hiZI1zFYp3tSXWIzzyZCTR4/wLZuE5g+P8HFjuPwl+uARPphZw2yVeeURfogDWPjmEZ6xSah4n+InfolFeOkR3rPpaeS/PMKvsQivPcIim9FC8Bqm4qtYhM84bVOybhxukYJTmo+xCHFi+vDjNXv68RA/HMKQz3JbHzX144RDVyLrZzPi93iAhZ/MEz7FJPybecJ4waJQeMU84eeYhB+ZJ4zzeeVQHeYJY+XdUO/ZRhQ/xQUsfGGc8DI2IeOuJrajYX4cI2bOBjVhOqsRv8d2NLgIZlUxy1+kr0wTXlMgZDrmx473UKijyKZi9tmIGN6IVLYh0xGRQjSEOmeWUIpb3xM9sooo/qQDyG68oBIroJhN3CikbFiMJm6xm1CBLpnrKSLCuC2aQLgv/PqUEZWp9IIjQseI96bMhpSid2BBy5NCfWXqPF/+hUxIy5NC4YkFRk5K0cko1UVaKDwxNaSIpny+0QTEuSkbIwsK/lgaOjkpUaeIfA0ThOjo9z2VwikQaipKv7Jfp2ROKH4bMSpU6UtX2RtROUOENKr7iB4ZGXEjw2w0gyHSPzivydqICg4Vz9QJcfotbXyKdboiE5dF+oBo8KQo/cjWiOYD/XyGqCOiTyPLeCOiaE+rfRHVJTZilqmb+VqiXDeFdU52YnYiuzAZE5KphSyNSExIO9oTnXs7UZIyG2xP2oS+Ed9mZcSkTQjPEotZJjbYhBSGE3YL1/pX2RjRPEsuFhLhA+Fs2hmkqKBx7LtbuBIuZmFEU0qi8l3X5BNCfJd+7mbi/4Ms3uD67/WMnU3qU8MKcTPxRoIPEDovle7PUtbVPTIhnTPRfTrPrMPv/bPJBftAmZ61JRopfGU4uSA+pgGY5fgJ/fbTdmU2rphgQhoVag9nAPg+BTeD9DkjwgT6a7uUyToV/04PMJORzEQaiLuVgT9Ny48SpR7304n1YX1IF5HyeeghSjdkiN9TCxSBUt2KyddM25TiVkx/EyKlNlqbQlG4XbilkTxg0o2L3eqk8qYo8TEDL0N0nkJuI9KdDHqpnlMgzMSNBrpOGjHh9ugBukwWMaGz0Bcp0fdCp1bV71UQFqk2Dj3ArALhmp4wolSmI+EUI2aQbu/QE+kSl2mMvSllMsfNDGBh8o0gnsY/sVF+EUBGlqinAPEm7rmbecEiYMF3N5L0Lh6i+ZZRwCBoSA+lPz8glktoLq8osRAH13WNc1TpVvhTf1Mq32MDxvxopIT0D0GUfv3ZSjVvyApNs/f7En0UY23GYAum3Tg8XH4xJV29eDPK8hmJ88VMy6X96pAeo/RX+WWRUTkluZr4lGHB+3tNfJcqnZiHm1FW3vmATOTa+/QqWKnCoWZUyv4KZdOJRvXGRzw0wfHTGHcLMutjwnJTOOJTzw4woyLc+j70S6IDXRR1HZjxQtm/G+XSicTTCiV68+gj/lfet1TN01tS7oqfuFihRJPLwIyvdy5VU3gIDHjJywol+uiP3bgpztalWlLe+v0K8ZErA2L5ZoRedYOxpFwEfCxWEofozc9gqd7eKKUI382/wQL9wKMBka5DZvzvxk9ySubNbciAHLnQTXW+hBj/vTGhHRXz5j7E94XpNPQAffwZYixeyKZ8IoX4OF6ggT6/DzFKr8N8j5kfStDR5KsYbosXfcBr3kLgbnUu1w8aJTdC8L4Bo4KMAaT7+PK4+KA6l0XM6H45MvsRdb5Cn+P6l+vj5IOaPD+J356Px79s1ZHj5cqVK1euXLmy0f8AGtS302OrBesAAAAASUVORK5CYII='

//     return(
//       <>
//       <View style={{display: 'flex', flexDirection: 'column', padding: 30, boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)'}}>
//         <Image
//           source={{uri: img}}
//           style={{height: 135, width: 135}}
//         />
//         <Text style={{padding: 10}}>
//           Clube de Regatas do Flamengo
//         </Text>
//       </View>

//       <Text style={{padding: 10, backgroundColor: 'black', color: 'white'}}>
//         O Flamengo foi fundado em 17 de novembro de 1895 para as disputas de remo. A entrada da equipe no futebol aconteceu em 1912. Atualmente, o time rubro-negro é o maior vencedor da história do Campeonato Carioca, com 31 títulos. Segundo diversas pesquisas, é o clube com o maior número de torcedores do País.      </Text>

//       </>
//     )
//   }
// }

// export default Teste;