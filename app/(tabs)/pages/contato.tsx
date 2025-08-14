import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { router } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

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

      {/* Linha de contato */}
      <View style={styles.row}>
        <View style={styles.iconBox}>
          <MaterialIcons name="phone" size={50} color="#fff" />
          <Text style={styles.iconText}>Telefone: (11) 1234-5678</Text>
        </View>

        <View style={styles.iconBox}>
          <MaterialIcons name="email" size={50} color="#fff" />
          <Text style={styles.iconText}>Email: exemplo@email.com</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.iconBox}>
          <MaterialIcons name="location-on" size={50} color="#fff" />
          <Text style={styles.iconText}>Endereço: Rua Exemplo, 123</Text>
        </View>

        <View style={styles.iconBox}>
          <MaterialIcons name="access-time" size={50} color="#fff" />
          <Text style={styles.iconText}>Horário: 7h às 17h</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.iconBox}>
          <Entypo name="instagram" size={50} color="#fff" />
          <Text style={styles.iconText}>@Vtec_automacao</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5bbd67ff',
    paddingTop: 60,
    alignItems: 'center',
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
    marginBottom: 20,
  },
  ImageBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5,
    zIndex: -1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 20,
  },
  iconBox: {
    alignItems: 'center',
    backgroundColor: '#145a32',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    opacity: 0.8,
  },
  iconText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 14,
  },
});

export default Contato;
