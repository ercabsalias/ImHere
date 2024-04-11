import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
export function Participant({ name }: any) {
  const handleParticipantRemove = () => {
    console.log("Você clicou no botão de excluir");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={handleParticipantRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
