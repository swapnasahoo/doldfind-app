import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignupScreen = () => {
  return (
    <View className="flex-1 bg-slate-950">
      <SafeAreaView>
        <View className="px-6 py-4">
          {/* HEADING */}
          <View className="flex-row items-center justify-between">
            <Text className="font-3xl font-extrabold text-white">DoldFind</Text>

            <Image
              source={require("../../../assets/temp/jaipur-mountain-image.jpeg")}
              style={{
                height: 90,
                width: 190,
                borderRadius: 16,
                aspectRatio: 16 / 9,
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignupScreen;
