import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";

export default function App() {
  // definir el state del citas
  const [citas, setCitas] = useState([
    {
      id: "1",
      paciente: "Jordy Alejandro",
      propietario: "Marco Cordova",
      sintomas: "Mareo y dolor de cabeza",
    },
    {
      id: "2",
      paciente: "Sede",
      propietario: "Jesus",
      sintomas: "No presenta examenes",
    },
    {
      id: "3",
      paciente: "Sede",
      propietario: "Paulo",
      sintomas: "No presenta explica bien",
    },
  ]);

  //Elimna citas del state
  const eliminarCita = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Administrador de citas</Text>
        <Formulario />
        <Text style={styles.titulo}>
          {" "}
          {citas.length > 0
            ? "Administra tus citas"
            : "No hay citas, agrega una"}{" "}
        </Text>
        {citas.map((cita) => (
          <Cita key={cita.id} item={cita} eliminarCitas={eliminarCita} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1b4b",
  },
  titulo: {
    color: "#99f6e4",
    marginTop: 60,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
