import AsyncStorage from '@react-native-async-storage/async-storage';

// ⚠️ Se estiver no celular com Expo Go: use o IP do PC
// Android Emulator: http://10.0.2.2:3000
const BASE_URL = 'http://192.168.1.9:3000';

async function request(path: string, options: RequestInit = {}) {
  const token = await AsyncStorage.getItem('token');

  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error((data as any)?.message || 'Erro na requisição');
  }
  return data;
}

/* ===========================================
   LOGIN / REGISTRO
=========================================== */

export async function login(email: string, password: string) {
  const data = await request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  await AsyncStorage.setItem('token', (data as any).token);
  await AsyncStorage.setItem('user', JSON.stringify((data as any).user));
  return data;
}

export async function register(email: string, password: string, name?: string) {
  const data = await request('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ email, password, name }),
  });
  await AsyncStorage.setItem('token', (data as any).token);
  await AsyncStorage.setItem('user', JSON.stringify((data as any).user));
  return data;
}

export async function logout() {
  await AsyncStorage.multiRemove(['token', 'user']);
}

export async function getStoredUser() {
  const data = await AsyncStorage.getItem('user');
  return data ? JSON.parse(data) : null;
}

/* ===========================================
   PERFIL DO CACHORRO
=========================================== */

export type DogProfile = {
  id?: number;
  userId: number;
  dogName: string;
  breed?: string | null;
  age?: number | null;
  bio?: string | null;
  gender?: 'M' | 'F' | null;
  avatarUrl?: string | null;
};

/**
 * Salvar / Atualizar o perfil do cachorro
 */
export async function saveDogProfile(profile: Omit<DogProfile, 'userId'>) {
  const user = await getStoredUser();
  if (!user) {
    throw new Error('Usuário não encontrado no dispositivo');
  }

  const body = {
    ...profile,
    userId: user.id,
  };

  const data = await request('/profiles', {
    method: 'POST',
    body: JSON.stringify(body),
  });

  return data as DogProfile;
}

/**
 * Buscar o perfil do cachorro do usuário logado
 */
export async function getMyDogProfile(): Promise<DogProfile | null> {
  const user = await getStoredUser();
  if (!user) throw new Error('Usuário não encontrado no dispositivo');

  try {
    const data = await request(`/profiles/${user.id}`, {
      method: 'GET',
    });

    return data as DogProfile;
  } catch (e: any) {
    if (e.message?.includes('Perfil não encontrado')) return null;
    throw e;
  }
}
