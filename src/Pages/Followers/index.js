import { useState, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import axios from "axios";

const Followers = () => {
  const [followers, setFollowers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setFollowers(data);
    } catch (err) {
      console.log(err);
      setError("Error Fetching Followers");
    }
  };
  return (
    <Box>
      {followers?.map((followers, index) => {
        return (
          <Heading key={index} data-testid={`followers-item-${index}`}>
            {followers.name}
          </Heading>
        );
      })}
      {error && <Text>{error}</Text>}
    </Box>
  );
};

export default Followers;
