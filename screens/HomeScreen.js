import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import API_URL from "../config/api"; // Import our centralized URL
import { useFocusEffect } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/api/notes`);
      if (response.status !== 200) {
        console.log("Error fetching notes");
        Alert.alert("Error", "Could not fetch notes");
      }
      setNotes(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Could not fetch notes");
    } finally {
      setLoading(false);
    }
  };

  // fetch notes when the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchNotes();
      return () => {}; // Cleanup function (optional)
    }, [])
  );

  return (
    <View className="flex-1 bg-gray-50 pt-4">
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item._id} // Assuming the note ID is _id
          renderItem={({ item }) => (
            <TouchableOpacity
              className="bg-white p-4 mb-3 rounded-lg shadow-sm"
              onPress={() => navigation.navigate("Note", { note: item })} // Pass note data
            >
              <Text className="text-lg font-bold">{item.title}</Text>
              <Text numberOfLines={1} className="text-gray-500">
                {item.content}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Floating Action Button */}
      <TouchableOpacity
        className="absolute bottom-10 right-6 bg-indigo-600 w-14 h-14 rounded-full items-center justify-center shadow-lg"
        onPress={() => navigation.navigate("Note")}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}