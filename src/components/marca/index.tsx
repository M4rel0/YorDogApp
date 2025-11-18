import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';

import Svg, { Path } from 'react-native-svg';

export function Marca() {
  return (
    <View style={s.container}>
      <Image
        source={require('../../../assets/images/tituloMarca.png')}
        style={s.imagem}
      />
    </View>
  );
}

export function MarcaMarrom({
  backgroundColor = '#FBC5AC',
}: {
  backgroundColor?: string;
}) {
  return (
    <View style={[s.container2, { backgroundColor }]}>
      <Image
        source={require('../../../assets/images/tituloMarcaMarrom.png')}
        style={s.imagem}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: '#291C0F',
    justifyContent: 'center',
    flexDirection: 'row', // Alinha horizontalmente
    alignItems: 'center',
    padding: 0,
    marginBottom: 0,
  },
  container2: {
    height: 60,
    width: '100%',
    backgroundColor: '#FBC5AC',
    justifyContent: 'center',
    flexDirection: 'row', // Alinha horizontalmente
    alignItems: 'center',
    padding: 0,
    marginBottom: 0,
  },

  imagem: {
    height: '60%',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'transparent',
  },
});
