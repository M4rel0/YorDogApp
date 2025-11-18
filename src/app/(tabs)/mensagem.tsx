import { View } from 'react-native';
import { MarcaMarrom } from '@/components/marca';
import { TituloText } from '@/components/tituloText/TituloText';

export default function Mensagens() {
  return (
    <View style={styles.container}>
      <MarcaMarrom backgroundColor="#FFE7DB" />

      <TituloText Texto="Aumigos" />
      <TituloText Texto="Conversas" />
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF3E8',
    padding: 0,

    margin: 0,
  },
};
