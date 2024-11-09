import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "react-query";

export const queryClient = new QueryClient();
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "Home" }}
        />
        <Stack.Screen name="transfer" options={{ title: "Transfer" }} />
        <Stack.Screen name="history" options={{ title: "History" }} />
        <Stack.Screen name="scan" options={{ title: "Scan" }} />
        <Stack.Screen name="fxrate" options={{ title: "Exchange Rate" }} />
      </Stack>
    </QueryClientProvider>
  );
}
