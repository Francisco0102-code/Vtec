import { MaterialIcons } from "@expo/vector-icons";
import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { IconProps } from "@expo/vector-icons/build/createIconSet";
type MaterialIconName = NonNullable<IconProps<any>["name"]>;

const listaServicos: { icon: MaterialIconName; nome: string }[] = [
  { icon: "computer", nome: "Suporte técnico remoto e presencial" },
  { icon: "settings-ethernet", nome: "Montagem e configuração de redes" },
  { icon: "store", nome: "Automação comercial" },
  { icon: "videocam", nome: "Instalação de câmeras de segurança (CFTV)" },
  { icon: "cloud", nome: "Soluções em nuvem" },
  { icon: "backup", nome: "Backup e recuperação de dados" },
  { icon: "print", nome: "Instalação e manutenção de impressoras" },
  { icon: "developer-mode", nome: "Desenvolvimento de sistemas personalizados" },
  { icon: "shopping-cart", nome: "Venda de equipamentos de informática" },
  { icon: "school", nome: "Treinamento e capacitação em tecnologia" },
  { icon: "security", nome: "Instalação de softwares e antivírus" },
  { icon: "home", nome: "Automação residencial e predial" },
];
// acima é a lista de serviços que serão exibidos na tela , uma array de objetos com ícones e nomes


const Servicos = () => {
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
      <Text style={styles.title}>Serviços</Text>
      <ScrollView contentContainerStyle={styles.servicosList} showsVerticalScrollIndicator={false}>
        {listaServicos.map((servico, idx) => (
          <View key={idx} style={styles.servicoItem}>
            <MaterialIcons name={servico.icon} size={28} color="#145a32" style={{ marginRight: 12 }} />
            <Text style={styles.servicoText}>{servico.nome}</Text>
          </View>
        ))}
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
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 40,
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
  servicosList: {
    paddingBottom: 40,
    paddingHorizontal: 16,
    alignItems: 'flex-start',
  },
  servicoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.90)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    width: 320,
    maxWidth: '100%',
    elevation: 2,
  },
  servicoText: {
    fontSize: 16,
    color: '#145a32',
    fontWeight: 'bold',
    flexShrink: 1,
 
  },
});

export default Servicos;