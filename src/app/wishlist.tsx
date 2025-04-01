
import styled from 'styled-components/native'

export default function Wishlist() {
  return (
    <Container>
      <Text>Hello World</Text>
    </Container>
  )
}


const Text = styled.Text`
  color: ${({ theme }) => theme.colors.foreground};
`

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`
