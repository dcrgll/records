import { ThemeProvider } from '@/components/theme-provider'
import { useReactQueryDevTools } from '@dev-plugins/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60
    }
  }
})

export default function RootLayout() {
  useReactQueryDevTools(queryClient)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: 'Home' }} />
        </Stack>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
