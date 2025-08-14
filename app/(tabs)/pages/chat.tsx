import { View, Text, Alert,  } from 'react-native'
import React from 'react'
import { Pressable, TextInput } from 'react-native-gesture-handler'

const chat = () => {
  return (
    <View>
      <Text>Como posso te ajudar?</Text>
        <Text>Digite sua mensagem abaixo:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, paddingLeft: 10 }}
          placeholder="Digite sua mensagem"
            onChangeText={(text) => console.log(text)}
            
        />
        <View style={{ margin: 10 }}>
            <Pressable onPress={() => alert('Mensagem enviada')}>
              <Text style={{ color: 'blue', textAlign: 'center' }}>Enviar</Text>
            </Pressable>
        
            </View>
    </View>
  )
}

export default chat