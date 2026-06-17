import GoogleLogo from "@/assets/icons/google-logo.svg";

import FloatingLabelInput from "@/components/FloatingInput";
import Slideshow from "@/components/Slideshow";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <View className="-mt-3 h-full w-full bg-slate-900 rounded-t-4xl items-center">
          <Text className="text-white font-bold text-xl mt-6">LOGIN</Text>

          <View className="w-full px-8 mt-6 gap-6">
            <FloatingLabelInput
              label="Email Address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <View>
              <FloatingLabelInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              <Pressable
                className="absolute right-3 top-3"
                onPress={() => setIsPasswordHidden((prev) => !prev)}
              >
                <Ionicons
                  name={isPasswordHidden ? "eye" : "eye-off"}
                  size={22}
                  color="white"
                />
              </Pressable>

              <Pressable className="ml-auto mt-1">
                <Text className="text-violet-400 font-medium text-sm">
                  Forgot Password?
                </Text>
              </Pressable>
            </View>

            <Pressable className="bg-violet-500 rounded-md px-6 py-3 mt-6 items-center active:scale-[0.95] transition-all duration-200 ease-in-out">
              <Text className="text-white font-bold rounded-lg">LOGIN</Text>
            </Pressable>

            <View className="flex-row items-center justify-between mt-6">
              <View className="h-1 w-[30%] bg-slate-600 rounded-full" />
              <Text className="text-gray-400 text-sm">Or Login With</Text>
              <View className="h-1 w-[30%] bg-slate-600 rounded-full" />
            </View>

            <Pressable className="px-6 py-3 rounded-md flex-row gap-2 bg-slate-700 items-center justify-center active:scale-[0.95] transition-all duration-200 ease-in-out">
              <GoogleLogo height={32} width={32} />
              <Text className="text-white font-semibold">
                Sign Up with Google
              </Text>
            </Pressable>

            <View className="flex-row justify-center -mt-2">
              <Text className="text-slate-400">Don't have an account? </Text>

              <Pressable onPress={() => router.push("/(auth)/SignupScreen")}>
                <Text className="text-violet-400 font-semibold">Sign Up</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;
