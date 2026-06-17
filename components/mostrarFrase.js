import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import api from '../services/api';

export default function MostrarFrase({ idFrase }) {
  const [frase, setFrase] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  // ID recebido por prop
  async function carregarDados() {
    if (!idFrase) return; // Segurança caso não passe ID
    
    try {
      setCarregando(true);
      setErro(null);
      const response = await api.get(`/${idFrase}`);
      setFrase(response.data);
    } catch (error) {
      setErro("Erro ao carregar frase.");
      console.error(error);
    } finally {
      setCarregando(false);
    }
  }

  // Executa a busca sempre que o componente nascer ou o idFrase mudar
  useEffect(() => {
    carregarDados();
  }, [idFrase]);

  if (carregando) {
    return <ActivityIndicator size="small" color="#0000ff" style={styles.espaco} />;
  }

  if (erro) {
    return <Text style={styles.erro}>{erro}</Text>;
  }

  if (!frase) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Frase #{idFrase}:</Text>
      <Text style={styles.texto}>{frase.ataque || "Campo 'ataque' não encontrado"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
    width: '100%',
  },
  titulo: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
  erro: {
    color: 'red',
    marginVertical: 10,
  },
  espaco: {
    marginVertical: 10,
  }
});