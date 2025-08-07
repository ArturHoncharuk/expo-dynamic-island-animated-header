import { ScrollViewProps } from "react-native";

export const AVATAR_SIZE = 148;
export const BLUR_HEIGHT = 30;
export const DYNAMIC_ISLAND_HEIGHT = 28;
export const DYNAMIC_ISLAND_WIDTH = 110;
export const MAX_SCROLL_Y = 70;
export const HEADER_HEIGHT = 60;
export const HEADER_TOP_OFFSET = 50;

export const CANVAS_HEIGHT = 220;
export const AVATAR_IMAGE_URL =
  "https://i.pinimg.com/736x/20/b9/2d/20b92d0cf87f5f88418d075f8fd4c506.jpg";

export const COLORS = {
  background: "#DDD",
  listItemBackground: "#222",
  listItemText: "#FFF",
  transparent: "transparent",
  overlay: "#000",
} as const;

export const SCROLL_VIEW_PRESET: ScrollViewProps = {
  bounces: false,
  scrollEventThrottle: 16,
};
