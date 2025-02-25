import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerButton from '@/src/components/drawer/DrawerButton';
import DrawerContent from '@/src/components/drawer/DrawerContent';
import HomeSearchBar from '@/src/components/common/HomeSearchBar';


export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{headerTitle:"", headerShadowVisible:false,headerLeft:()=><DrawerButton />,headerRight:()=><HomeSearchBar/>}} drawerContent={(props)=><DrawerContent {...props}/>}  >
      <Drawer.Screen name='(tabs)'  />
      </Drawer>

    </GestureHandlerRootView>
  );
}
