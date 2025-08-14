import { MaterialIcons } from "@expo/vector-icons";
import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const Sobre = () => {
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
      <Text style={styles.title}>Sobre</Text>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          <Text style={styles.bold}>Vtec: 25 Anos Conectando o Futuro{'\n\n'}</Text>
          Há 25 anos, em uma pequena sala com poucos computadores e muita ambição, nascia a Vtec, uma empresa de informática e automação com um propósito claro: transformar tecnologia em solução.{'\n\n'}
          Fundada por três amigos apaixonados por inovação, a Vtec começou oferecendo suporte técnico e montagem de sistemas personalizados. Naquela época, internet discada ainda era realidade — mas a visão da empresa já estava décadas à frente.{'\n\n'}
          Com o tempo, a Vtec evoluiu. Investiu em automação comercial, desenvolveu sistemas próprios, formou parcerias estratégicas e conquistou a confiança de empresas de todos os portes. Quando a tecnologia mudou, a Vtec mudou junto: da informatização básica às soluções de IoT e inteligência artificial, sempre manteve o foco em atender com excelência.{'\n\n'}
          Hoje, celebrando 25 anos de história, a Vtec é referência em tecnologia, reconhecida pela sua competência, compromisso e capacidade de antecipar tendências. Mais do que uma empresa, tornou-se uma parceira confiável para quem deseja crescer com inovação.{'\n\n'}
          E o melhor? O futuro da Vtec ainda está só começando.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc40',
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
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 16,
    textShadowColor: '#145a32',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
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
    opacity: 0.5,
    zIndex: -1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'flex-start',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});

export default Sobre;