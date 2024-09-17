import { View, Text, Pressable } from "react-native";
import { styler } from "./First.style";

export const First = () => {
  const sayMsg = () => {
    alert("Wow React native is like react with minor differences");
  };

  const greet = () => {
    alert("Good Morning to long press");
  };

  return (
    <View style={styler.container}>
      <Pressable onPress={sayMsg} onLongPress={greet}>
        <Text style={styler.textDisplay}>Welcome to react native</Text>
      </Pressable>
    </View>
  );
};
