import { Box } from '../Box';
import { FiMenu, FiUser, FiRotateCw } from 'react-icons/fi';
import { InfoList, Logo, Hamburger, InfoLink } from './Header.styled';

export const Header = () => {
  return (
    <Box
      background="blue"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px="3"
      mb="4"
    >
      <Hamburger>
        <FiMenu color="white" />
      </Hamburger>
      <Logo>~Postores Galore~</Logo>
      <InfoList>
        <li>
          <InfoLink>
            <FiRotateCw />
          </InfoLink>
        </li>
        <li>
          <InfoLink>
            <FiUser />
          </InfoLink>
        </li>
      </InfoList>
    </Box>
  );
};
