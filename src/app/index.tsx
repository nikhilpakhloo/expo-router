import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

export default function App() {
  const { user } = useUser()
  if (user) {
    return <Redirect href="/(drawer)/(tabs)/home" />
  }

  return <Redirect href="/(auth)" />;
}
