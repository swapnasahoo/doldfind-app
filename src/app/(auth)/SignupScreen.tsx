import FacebookLogo from "@/assets/icons/facebook-logo.svg";
import GoogleLogo from "@/assets/icons/google-logo.svg";
import InstagramLogo from "@/assets/icons/instagram-logo.svg";

import FloatingLabelInput from "@/components/FloatingInput";
import Slideshow from "@/components/Slideshow";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignupScreen = () => {
  return (
    <View className="flex-1 bg-slate-950">
      <SafeAreaView>
        {/* HEADING */}
        <View className="relative h-60 overflow-hidden">
          <Slideshow />

          <View className="px-6 py-4 flex-row items-center justify-between">
            <Text className="text-4xl font-bold text-white">DoldFind</Text>
          </View>
        </View>

        {/* FORM */}
        <View className="-mt-8 h-full w-full bg-slate-900 rounded-t-4xl items-center">
          <Text className="text-white font-bold text-xl mt-6">SIGN UP</Text>

          <View className="w-full px-8 mt-6 gap-8">
            <FloatingLabelInput label="Name" />

            <FloatingLabelInput
              label="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <FloatingLabelInput label="Password" secureTextEntry />

            <Pressable className="bg-violet-500 rounded-md px-6 py-3 mt-6 items-center active:scale-[0.95] transition-all duration-200 ease-in-out">
              <Text className="text-white font-bold rounded-lg">
                CREATE ACCOUNT
              </Text>
            </Pressable>

            <View className="flex-row items-center justify-between mt-6">
              <View className="h-1 w-[30%] bg-slate-600 rounded-full" />
              <Text className="text-gray-400 text-sm">Or Signup With</Text>
              <View className="h-1 w-[30%] bg-slate-600 rounded-full" />
            </View>

            <View className="px-6 flex-row items-center gap-16 mt-2 justify-center">
              <GoogleLogo height={32} width={32} />

              <FacebookLogo height={32} width={32} />

              <InstagramLogo height={32} width={32} />
            </View>

            <View className="flex-row justify-center -mt-2">
              <Text className="text-slate-400">Already have an account? </Text>

              <Pressable onPress={() => router.push("/(auth)/LoginScreen")}>
                <Text className="text-violet-400 font-semibold">Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignupScreen;
