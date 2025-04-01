import { ThemeProvider } from '@/components/theme-provider'
import { useReactQueryDevTools } from '@dev-plugins/react-query'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Tabs } from 'expo-router'
import React from 'react'
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
        <Tabs>
          <Tabs.Screen name="collection" options={{ title: 'Collection', tabBarIcon: ({size, color}) => <MaterialIcons name="folder" size={size} color={color} /> }} />
          <Tabs.Screen name="wishlist" options={{ title: 'Wishlist', tabBarIcon: ({size, color}) => <MaterialIcons name="favorite" size={size} color={color} /> }} />
          <Tabs.Screen name="index" options={{ href: null }} />
        </Tabs>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
