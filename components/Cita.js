import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";

export default function Cita(props) {
  const procesoEliminar = (id) => {
    props.eliminarCitas(id);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.cita}>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <Text style={styles.texto}>{props.item.paciente}</Text>
        </View>
        <View>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.texto}>{props.item.propietario}</Text>
        </View>
        <View>
          <Text style={styles.label}>Síntomas:</Text>
          <Text style={styles.texto}>{props.item.sintomas}</Text>
        </View>
        <Button
          mode="contained"
          onPress={() => procesoEliminar(props.item.id)}
          style={styles.btnEliminar}
          labelStyle={styles.textoEliminar}
        >
          Eliminar
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  cita: {
    backgroundColor: "#e9d5ff",
    marginBottom: 10,
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  texto: {
    fontSize: 16,
    marginBottom: 10,
  },
  btnEliminar: {
    marginTop: 10,
    borderRadius: 5,
  },
  textoEliminar: {
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
