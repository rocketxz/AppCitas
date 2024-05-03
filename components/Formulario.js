import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function Formulario() {
  const [paciente, setPaciente] = useState("");
  const [dueno, setDueno] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleSubmit = () => {
    // Manejar la lógica de envío del formulario aquí
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        label="Paciente"
        value={paciente}
        onChangeText={(text) => setPaciente(text)}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Dueño"
        value={dueno}
        onChangeText={(text) => setDueno(text)}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Teléfono de contacto"
        value={telefono}
        onChangeText={(text) => setTelefono(text)}
        keyboardType="phone-pad"
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Síntomas"
        value={sintomas}
        onChangeText={(text) => setSintomas(text)}
        multiline
        style={{ marginBottom: 20 }}
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={{ marginBottom: 10 }}
      >
        Enviar
      </Button>
    </View>
  );
}
