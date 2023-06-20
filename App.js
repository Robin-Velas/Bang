import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get(
          " https://c6aa-2a04-cec0-f051-d523-849c-ed7-158a-97b1.ngrok-free.app/data",
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        ); // Replace '/data' with your API endpoint
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Data from backend:</Text>
      {data ? <Text>{JSON.stringify(data)}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default App;
