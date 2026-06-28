import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="tutor/index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="auth" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="tutor/index" />
      <Stack.Screen name="tutor/step2" />
    </Stack>
  );
}