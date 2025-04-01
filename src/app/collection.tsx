import RecordItem from "@/components/record-item";
import styled from "styled-components/native";

export default function Collection() {
  return (
    <Container>
      <Text>Hello World</Text>
      <RecordItem
        title="The Beatles"
        artist="The Beatles"
        year={1967}
        imageUrl="https://via.placeholder.com/150"
      />
    </Container>
  );
}

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.foreground};
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
