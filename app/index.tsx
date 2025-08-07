import { AnimatedCanvas, AnimatedHeader } from "@/components";
import { AVATAR_IMAGE_URL, SCROLL_VIEW_PRESET } from "@/constants";
import { useAnimatedCanvasStyle } from "@/hooks";
import { useAnimationValues } from "@/hooks/use-animation-styles";
import { AntDesign } from "@expo/vector-icons";
import { useImage } from "@shopify/react-native-skia";
import { useRef } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const routes = [
  {
    id: 1,
    title: "Home",
    icon: "home",
  },
  {
    id: 2,
    title: "Settings",
    icon: "settings",
  },
  {
    id: 3,
    title: "Profile",
    icon: "profile",
  },
  {
    id: 4,
    title: "Messages",
    icon: "messages",
  },
  {
    id: 5,
    title: "Notifications",
    icon: "notifications",
  },
  {
    id: 6,
    title: "Settings",
    icon: "settings",
  },
  {
    id: 7,
    title: "Settings",
    icon: "settings",
  },
  {
    id: 8,
    title: "Settings",
    icon: "settings",
  },
  {
    id: 9,
    title: "Settings",
    icon: "settings",
  },
  {
    id: 10,
    title: "Settings",
    icon: "settings",
  },
  {
    id: 11,
    title: "Settings",
    icon: "settings",
  },
];

export default function Index() {
  const scrollViewRef = useRef<ScrollView>(null);

  const avatarImageSource = useImage(AVATAR_IMAGE_URL);
  const { width: screenWidth } = useWindowDimensions();

  const animationValues = useAnimationValues(screenWidth);
  const canvasStyle = useAnimatedCanvasStyle(animationValues.currentScrollY);

  const handleScrollChange = ({
    nativeEvent: { contentOffset },
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    animationValues.currentScrollY.value = contentOffset.y;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      <AnimatedHeader
        headerOpacity={animationValues.headerOpacity}
        headerTitle="John Doe"
        headerSubtitle="Software Engineer"
      />

      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScrollChange}
        contentContainerStyle={{ paddingBottom: 64 }}
        {...SCROLL_VIEW_PRESET}
      >
        <AnimatedCanvas
          animationValues={animationValues}
          canvasStyle={canvasStyle}
          avatarImageSource={avatarImageSource}
          screenWidth={screenWidth}
        />

        <View style={{ flex: 1, marginTop: 64, gap: 24 }}>
          {routes.map(({ id, title }) => (
            <Pressable
              key={id}
              style={({ pressed }) => ({
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderWidth: 1,
                borderColor: "#e5e5e5",
                borderRadius: 16,
                marginHorizontal: 16,
                backgroundColor: "#FFF",
                padding: 16,
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Text>{title}</Text>
              <AntDesign name="caretright" size={8} color="black" />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
