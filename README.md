# React Native - Estudos

Este repositório documenta meus estudos sobre React Native, incluindo conceitos fundamentais, diferenças entre componentes e padrões de desenvolvimento.

## Introdução ao React Native

React Native é um framework desenvolvido pelo Facebook que permite a criação de aplicações móveis usando JavaScript e React. Ele possibilita o desenvolvimento de apps nativos para iOS e Android compartilhando grande parte do código entre as plataformas.

## Componentização

Componentização é um dos princípios fundamentais do React Native. Podemos compará-la a blocos de Lego ou a um quebra-cabeça:

- No quebra-cabeça, cada peça é planejada para ocupar uma posição específica, assim como componentes que têm funções específicas e são criados para serem utilizados em um contexto definido.
- No Lego, existem peças que podem ser reaproveitadas em diferentes construções, assim como componentes reutilizáveis que podem ser utilizados em várias partes do aplicativo.

Um exemplo desse conceito no React Native é um botão personalizado. Podemos criar um componente **Button**, que pode ser reutilizado com diferentes estilos e comportamentos, mas também podemos ter um **Header**, que é projetado para ocupar um espaço específico na tela.

Outra analogia é a de um carro. O pneu é um componente do carro, mas ele também é formado por diversos outros elementos, como a borracha e o aro. No React Native, um exemplo semelhante seria um **Card de Produto** em um e-commerce. Ele pode ser um componente reutilizável, mas dentro dele podem existir outros componentes menores, como uma imagem, um título e um botão de compra.

Essa abordagem facilita a manutenção e escalabilidade do código, garantindo que cada parte do sistema seja modular e reutilizável.

## Diferença entre ScrollView e FlatList

- **ScrollView**: é utilizado para exibir uma lista de elementos quando a quantidade de itens é pequena e pode ser carregada inteiramente na memória. Ele renderiza todos os elementos de uma vez, o que pode impactar a performance em listas longas.
- **FlatList**: é otimizado para exibir listas grandes, carregando os elementos sob demanda, à medida que o usuário rola a tela. Isso melhora a performance e o uso de memória.

## Tópicos Futuros

- **Navegação entre telas**
- **Gerenciamento de estado**
- **Hooks no React Native**
- **Estilização com Styled Components e StyleSheet**
- **Integração com APIs**

---
