import { Box, Dashboard, Header, MenuList } from '../';

export function App() {
  return (
    <Box width="container" mx="0" my="1" pt="4">
      <Header />
      <Box display="flex">
        <MenuList />
        <Dashboard />
      </Box>
    </Box>
  );
}
