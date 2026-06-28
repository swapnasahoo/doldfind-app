import { useRef } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type FloatingLabelInputProps = TextInputProps & {
  label: string;
  isPasswordHidden?: boolean;
};

const DURATION = 180;
const REST_COLOR = "#64748b";
const ACTIVE_COLOR = "#a78bfa";

const FloatingLabelInput = ({
  label,
  value,
  isPasswordHidden,
  onFocus,
  onBlur,
  onChangeText,
  ...rest
}: FloatingLabelInputProps) => {
  // progress: 0 = resting inside the field (placeholder), 1 = floated as label
  const progress = useSharedValue(value ? 1 : 0);
  const hasValue = useRef(!!value);

  const handleFocus: NonNullable<TextInputProps["onFocus"]> = (e) => {
    progress.value = withTiming(1, { duration: DURATION });
    onFocus?.(e);
  };

  const handleBlur: NonNullable<TextInputProps["onBlur"]> = (e) => {
    // Keep the label floated if the user has typed something.
    if (!hasValue.current) {
      progress.value = withTiming(0, { duration: DURATION });
    }
    onBlur?.(e);
  };

  const handleChangeText = (text: string) => {
    hasValue.current = text.length > 0;
    onChangeText?.(text);
  };

  const labelStyle = useAnimatedStyle(() => ({
    top: interpolate(progress.value, [0, 1], [14, -22]),
    fontSize: interpolate(progress.value, [0, 1], [14, 13]),
    color: interpolateColor(progress.value, [0, 1], [REST_COLOR, ACTIVE_COLOR]),
  }));

  return (
    <View className="relative">
      <Animated.Text
        pointerEvents="none"
        style={[
          {
            position: "absolute",
            left: 0,
            fontWeight: "500",
          },
          labelStyle,
        ]}
      >
        {label}
      </Animated.Text>

      <TextInput
        value={value}
        placeholder={label}
        placeholderTextColor="#90a1b9"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        className="bg-slate-800 text-white border border-slate-600 rounded-md px-6 py-3 pl-4"
        {...rest}
        secureTextEntry={isPasswordHidden}
      />
    </View>
  );
};

export default FloatingLabelInput;
