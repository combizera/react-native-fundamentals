import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { styles } from './styles';

import { Participant } from '../../../components/Participant';

export default function Home() {
  const participants = [
    { name: 'Ygor' },
    { name: 'Diego' },
    { name: 'Mayk' },
    { name: 'Robson' },
    { name: 'Cleiton' },
    { name: 'Dani' },
    { name: 'Rafael' },
    { name: 'Guilherme' },
    { name: 'Vinicius' },
    { name: 'Pedro' },
    { name: 'Lucas' },
    { name: 'Fernando' },
    { name: 'João' },
    { name: 'Carlos' },
    { name: 'José' },
    { name: 'Maria' },
    { name: 'Ana' },
    { name: 'Paula' },
    { name: 'Mariana' },
    { name: 'Juliana' },
    { name: 'Camila' },
    { name: 'Carla' },    
  ]

  function handleParticipantAdd() {
    console.log('Adicionar participante');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Remover participante: ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Hello World!
      </Text>
      <Text style={styles.eventDescription}>
        Hello React!
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do Participante'
          placeholderTextColor='#6b6b6b'
          keyboardType='default'
          />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
          >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Meio que um foreach */}
        {
          participants.map(participant => (
            <Participant 
              key={participant.name}
              name={participant.name}
              onRemove={() => handleParticipantRemove(participant.name)}
            />
          ))
        }
      </ScrollView>

    </View>
  )
}