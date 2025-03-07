import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { styles } from './styles';

import { Participant } from '@/components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante já cadastrado", "Já existe um participante com esse nome (=^.^=)");
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {

    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)),
      }
    ])
  }

  function handleState(value: string) {
    setParticipantName(value);
    console.log(participantName);
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.eventName}>
          Sistema de Eventos foda!
        </Text>
        <Text style={styles.eventDescription}>
          03/04/1999 - 10:00h
        </Text>
        <Text style={styles.eventDescription}>
          Nasce um anjo
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do Participante'
          placeholderTextColor='#6b6b6b'
          keyboardType='default'
          // onChangeText={e => console.log(e)}
          onChangeText={handleState}
          value={participantName}
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}