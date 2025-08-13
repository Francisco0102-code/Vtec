import { View, Text, Pressable, StyleSheet,ImageBackground } from 'react-native';
import React from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { router } from 'expo-router';

const Contato = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => router.push('/')}>
        <MaterialIcons name="arrow-back" color="#fff" size={28} />
      </Pressable>
       
      <ImageBackground
        source={require('../../../assets/images/Imag.png')}
        style={styles.ImageBackground}
        resizeMode="cover"
      />
      
      <Text style={styles.title}>Contato</Text>
      <Text style={{ color: '#fff', marginTop: 20 }}>Para entrar em contato, ligue para:</Text>
      <Text style={{ color: '#fff', fontSize: 18, marginTop: 10 }}>+55 11 1234-5678</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5bbd67ff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#145a32',
    borderRadius: 20,
    padding: 6,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 40,
  },

  ImageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5, // Ajuste a opacidade conforme necessário
    zIndex: -1, // Certifique-se de que a imagem fique atrás dos outros img ficara por trás dos outros elementos
  },

});

export default Contato;