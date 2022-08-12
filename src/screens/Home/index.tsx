import { useState } from 'react'
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export default function Home() {
  // const participants = ["Moura"]
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert("Já existe")
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    //return console.log(participants.filter(participant => participant !== name))

    Alert.alert("Remover", `Remover o participante ${name}`, [
      {
        text: 'Sim',
        // onPress: () => Alert.alert("Deletado!")
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)),
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
      data={participants}
      keyExtractor={item => item}
      renderItem={
        ({item}) => (
          <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}/>
        )
      }
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        () => (
          <Text style={styles.listEmptyText}>Ninguem Chegou No Evento Ainda</Text>
        )
      }
      />

             
 
    </View>
  )
}
