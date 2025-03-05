import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { styles } from './styles';

import { Participant } from '../../../components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState([
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
  ]);

  function handleParticipantAdd() {
    if (participants.find(participant => participant.name === 'Ygor')) {
      return Alert.alert("Participante já cadastrado", "Já existe um participante com esse nome (=^.^=)");
    }
    console.log('Adicionar participante:');
  }


  function handleParticipantRemove(name: string) {
    Alert.alert(
      'Remover participante',
      `Deseja remover o participante ${name}?`,
      [
        {
          text: 'Sim',
          onPress: () => {
            setParticipants(prevParticipants => prevParticipants.filter(participant => participant.name !== name));
            console.log('Deletado');
          }
        },
        {
          text: 'Não',
          onPress: () => console.log('Cancelado'),
          style: 'cancel'
        }
      ]
    )
    console.log(`Removido o participante: ${name}`);
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

      <FlatList
        data={participants}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Nenhum participante cadastrado
          </Text>
        )}
        renderItem={({ item }) => (
          <Participant
            name={item.name}
            onRemove={() => handleParticipantRemove(item.name)}
          />
        )}
      />

    </View>
  )
}