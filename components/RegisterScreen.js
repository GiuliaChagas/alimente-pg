import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Header from './Header';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('pf'); // 'pf' para pessoa física, 'pj' para pessoa jurídica
  const [documento, setDocumento] = useState('');
  const [senha, setSenha] = useState('');

  const handleRegister = () => {
    // Lógica para realizar o registro
    console.log('Email:', email);
    console.log('Nome:', nome);
    console.log('Tipo:', tipo);
    console.log('Documento:', documento);
    console.log('Senha:', senha);
    navigation.navigate('Welcome'); // Navegar de volta para a tela de boas-vindas
  };

  const handleChangeTipo = (value) => {
    setTipo(value);
    setDocumento('');
  };

  return (
    <View style={styles.container}>
      <Header />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setNome}
        value={nome}
      />
      <View style={styles.radioContainer}>
        <RadioButton
          label="Pessoa Física"
          value="pf"
          checked={tipo === 'pf'}
          onChange={handleChangeTipo}
        />
        <RadioButton
          label="Pessoa Jurídica"
          value="pj"
          checked={tipo === 'pj'}
          onChange={handleChangeTipo}
        />
      </View>
      {tipo !== 'pj' && (
        <TextInput
          style={styles.input}
          placeholder="Cad. único"
          onChangeText={setDocumento}
          value={documento}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder={tipo === 'pf' ? 'CPF' : 'CNPJ'}
        onChangeText={setDocumento}
        value={documento}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

const RadioButton = ({ label, value, checked, onChange }) => {
  return (
    <View style={styles.radioButton}>
      <TouchableOpacity style={styles.radioButtonCircle} onPress={() => onChange(value)}>
        {checked && <View style={styles.radioButtonCheckedCircle} />}
      </TouchableOpacity>
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  radioButtonCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonCheckedCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
});

export default RegisterScreen;
