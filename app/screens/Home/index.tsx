import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default function Home() {

  function handleParcipantAdd() {
    console.log('Adicionar participante');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Hello World!
      </Text>
      <Text style={styles.eventDescription}>
        Hello React!
      </Text>

      <TextInput 
        style={styles.input}
        placeholder='Nome do Participante'
        placeholderTextColor='#6b6b6b'
        keyboardType='default'
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleParcipantAdd}
      >
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}