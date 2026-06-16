import { Image, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignupScreen = () => {
  return (
    <View className="flex-1 bg-slate-950">
      <SafeAreaView>
        <View className="px-6 py-4">
          {/* HEADING */}
          <View className="flex-row items-center justify-between">
            <Text className="text-4xl font-bold text-white">DoldFind</Text>

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

        {/* FORM */}
        <View className="mt-25 h-full w-full bg-slate-900 rounded-t-4xl items-center">
          <Text className="text-white font-bold text-xl mt-6">SIGN UP</Text>

          <View className="w-full px-8 mt-6 gap-6">
            <View className="gap-2">
              <Text className="text-white text-sm font-medium">Name</Text>
              <TextInput
                placeholder="John Doe"
                className="bg-slate-800 text-white placeholder:text-slate-500 border border-slate-600 rounded-md px-6 py-3 pl-4"
              />
            </View>

            <View className="gap-2">
              <Text className="text-white text-sm font-medium">
                Email Address
              </Text>
              <TextInput
                placeholder="john.doe@example.com"
                className="bg-slate-800 text-white placeholder:text-slate-500 border border-slate-600 rounded-md px-6 py-3 pl-4"
              />
            </View>

            <View className="gap-2">
              <Text className="text-white text-sm font-medium">Password</Text>
              <TextInput
                placeholder="••••••••"
                secureTextEntry
                className="bg-slate-800 text-white placeholder:text-slate-500 border border-slate-600 rounded-md px-6 py-3 pl-4"
              />
            </View>

            <Pressable className="bg-violet-500 rounded-md px-6 py-3 mt-6 items-center active:scale-[0.95] transition-all duration-200 ease-in-out">
              <Text className="text-white font-bold rounded-lg">
                CREATE ACCOUNT
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignupScreen;
