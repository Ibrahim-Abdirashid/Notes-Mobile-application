import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import API_URL from '../config/api'; // Import our centralized URL
import axios from 'axios';

export default function NoteScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = async () => {
    if (!title || !content) {
      return Alert.alert("Error", "Fill all fields");
    }

    try {
      // POST request to create data
      const response = await axios.post(`${API_URL}/api/notes`, {
        title: title,
        content: content,
      });

      if (response.status !== 201) {
        Alert.alert("Error", "Could not save note");
      }

      Alert.alert("Success", "Note saved successfully");
      navigation.goBack();

    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Could not save note");
    }
  };

  return (
    <View className="flex-1 p-5 bg-white">
      <TextInput
        className="text-2xl font-bold border border-gray-200 mb-4 pb-2"
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        className="text-lg text-gray-600 flex-1"
        placeholder="Content"
        multiline
        value={content}
        onChangeText={setContent}
        textAlignVertical="top"
      />
      <TouchableOpacity
        className="bg-indigo-600 p-4 rounded-lg items-center mt-4"
        onPress={handleSave}
      >
        <Text className="text-white font-bold text-lg">Save Note</Text>
      </TouchableOpacity>
    </View>
  );
}