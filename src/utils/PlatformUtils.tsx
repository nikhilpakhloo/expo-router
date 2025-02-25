import { Dimensions } from "react-native";

const WINDOW = Dimensions.get("window");
const SCREEN_WIDTH = WINDOW.width;
const SCREEN_HEIGHT = WINDOW.height;
const SCREEN_SCALE = WINDOW.scale;

export { SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_SCALE };