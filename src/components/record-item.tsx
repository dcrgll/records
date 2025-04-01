import { Image, Text, View } from 'react-native';

import styled from 'styled-components/native';

// types
interface RecordItemProps {
  title: string;
  artist: string;
  year: number;
  imageUrl: string;
}

// styled components
const Card = styled(View)`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  margin: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

const RecordImage = styled(Image)`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const Title = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 4px;
`;

const Artist = styled(Text)`
  font-size: 16px;
  color: #666666;
  margin-bottom: 4px;
`;

const Year = styled(Text)`
  font-size: 14px;
  color: #999999;
`;

export default function RecordItem({
  title,
  artist,
  year,
  imageUrl
}: RecordItemProps) {
  return (
    <Card>
      <RecordImage
        source={{ uri: imageUrl }}
        resizeMode="cover"
      />
      <Title>{title}</Title>
      <Artist>{artist}</Artist>
      <Year>{year}</Year>
    </Card>
  );
}
