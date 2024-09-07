import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

const RegisterPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
        <Text style={styles.logo}>HerGuardian</Text>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.signUpButton} onPress={()=> navigation.navigate('HomePage')}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.alreadyAccountText} onPress={() => navigation.navigate("LoginPage")}>
        Already have an account?{" "}
        <Text >Log In</Text>
      </Text>

      <TouchableOpacity style={styles.googleSignUpButton}>
        <Text style={styles.googleSignUpText}>Sign Up with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterPage;
