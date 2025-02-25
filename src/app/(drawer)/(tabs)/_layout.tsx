import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{headerShown:false, tabBarHideOnKeyboard:true, }}>
            <Tabs.Screen name="home"   options={{tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />}} />
            <Tabs.Screen name="profile"  options={{tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />}}/>
        </Tabs>
    );
}