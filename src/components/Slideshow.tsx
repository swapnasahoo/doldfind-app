import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// Order matches the files inside assets/images/slideshow-images
const IMAGES = [
  require("../../assets/images/slideshow-images/slideshow-img-1.png"),
  require("../../assets/images/slideshow-images/slideshow-img-2.png"),
  require("../../assets/images/slideshow-images/slideshow-img-3.png"),
  require("../../assets/images/slideshow-images/slideshow-img-4.png"),
  require("../../assets/images/slideshow-images/slideshow-img-5.png"),
  require("../../assets/images/slideshow-images/slideshow-img-6.png"),
  require("../../assets/images/slideshow-images/slideshow-img-7.png"),
];

type SlideshowProps = {
  /** Time each image stays fully visible, in ms. */
  interval?: number;
  /** Slide transition duration, in ms. */
  slideDuration?: number;
  style?: ViewStyle;
};

// A clone of the last image is prepended so we can wrap around seamlessly
// while always sliding the row to the right (images enter from the left).
const slides = [IMAGES[IMAGES.length - 1], ...IMAGES];

const Slideshow = ({
  interval = 3500,
  slideDuration = 800,
  style,
}: SlideshowProps) => {
  const [width, setWidth] = useState(0);
  const translateX = useSharedValue(0);
  // Position within `slides`; lives in a shared value so the JS interval and
  // the UI-thread animation callback stay in sync. Starts at 1 (first real
  // image), with the prepended clone sitting at position 0.
  const index = useSharedValue(1);

  useEffect(() => {
    if (!width) return;

    // Begin on the first real image.
    index.value = 1;
    translateX.value = -width;

    const id = setInterval(() => {
      const next = index.value - 1;
      index.value = next;
      // translateX moves toward 0, shifting the row to the right.
      translateX.value = withTiming(
        -next * width,
        { duration: slideDuration },
        (finished) => {
          // next === 0 means we just slid onto the prepended clone of the
          // last image — snap to the real last image instantly so the loop
          // is seamless and keeps moving in the same direction.
          if (finished && next === 0) {
            index.value = IMAGES.length;
            translateX.value = -IMAGES.length * width;
          }
        },
      );
    }, interval);

    return () => clearInterval(id);
  }, [width, interval, slideDuration, index, translateX]);

  const onLayout = (e: LayoutChangeEvent) => {
    setWidth(e.nativeEvent.layout.width);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      style={[StyleSheet.absoluteFill, style]}
      pointerEvents="none"
      onLayout={onLayout}
    >
      {width > 0 && (
        <Animated.View
          style={[
            {
              flexDirection: "row",
              height: "100%",
              width: width * slides.length,
            },
            animatedStyle,
          ]}
        >
          {slides.map((source, i) => (
            <Image
              key={i}
              source={source}
              style={{ width, height: "100%" }}
              contentFit="cover"
              transition={0}
            />
          ))}
        </Animated.View>
      )}
    </View>
  );
};

export default Slideshow;
