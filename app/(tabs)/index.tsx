import { MaterialIcons } from '@expo/vector-icons'
import { Tabs, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const Home = () => {
  const router = useRouter()
  const [rating, setRating] = useState(0)

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Imag.png')}
        style={styles.ImageBackground}
        resizeMode="cover"
      />
      
      <Image source={require('../../assets/images/logex.png')} style={{ width: 100, height: 100, borderRadius: 100 }} />
      
      {/* Topo com ícone e nome lado a lado */}
      <View style={styles.header}>
        <MaterialIcons name="computer" size={32} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.title}>Vtec Informática & Automação</Text>
      </View>

      {/* Botões lado a lado no topo */}
      <View style={styles.topButtons}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push('/pages/servicos')}
        >
          <MaterialIcons name="build" size={24} color="#fff" />
          <Text style={styles.buttonText}>Serviços</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push('/pages/contato')}
        >
          <MaterialIcons name="phone" size={24} color="#fff" />
          <Text style={styles.buttonText}>Contato</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push('/pages/suporte')}
        >
          <MaterialIcons name="support-agent" size={24} color="#fff" />
          <Text style={styles.buttonText}>Suporte</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push('/pages/sobre')}
        >
          <MaterialIcons name="info" size={24} color="#fff" />
          <Text style={styles.buttonText}>Sobre</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push('/pages/chat')}
        >
          <MaterialIcons name="home" size={24} color="#fff" />
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.subtitle}>Soluções em tecnologia para o seu negócio</Text>

      {/* Avaliação interativa */}
      <View style={styles.rating}>
        {[1,2,3,4,5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <MaterialIcons
              name={rating >= star ? "star" : "star-border"}
              size={28}
              color="#FFD700"
            />
          </TouchableOpacity>
        ))}
        <Text style={styles.ratingText}>{rating > 0 ? rating : ''}</Text>
      </View>

      {/* Botão de enviar avaliação */}
      <TouchableOpacity
        style={styles.sendButton}
        onPress={() => {
          // quando onOnPress for acionado roda o alert  pois a função onPress foi chamada 
          // Aqui você pode implementar o envio da avaliação para um backend ou exibir para outros usuários
          alert('Avaliação enviada! Em breve outros usuários poderão ver sua nota.');
        }}
        disabled={rating === 0}
      >
        <MaterialIcons name="send" size={22} color="#fff" />
        <Text style={styles.sendButtonText}>Enviar Avaliação</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc40',
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  topButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite quebrar linha
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    width: '100%', // Ocupa toda a largura da tela
    paddingHorizontal: 8, // Espaço nas laterais
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(20, 90, 50, 1)',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 80,
    margin: 6, // Espaço entre botões
    minWidth: 120, // Largura mínima para melhor visualização
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fffffffb',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 6,
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
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  ratingText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#145a32',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
    opacity: 1,
    
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
})

export default Home