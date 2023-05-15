import { Box } from '../Box';
import { List, ListLink } from './MenuList.styled';
import {
  FiClipboard,
  FiDollarSign,
  FiImage,
  FiUsers,
  FiMessageSquare,
} from 'react-icons/fi';

export const MenuList = () => {
  return (
    <Box mr="5">
      <List>
        <li>
          <ListLink>
            <FiClipboard />
            <span>Dashboard</span>
          </ListLink>
        </li>
        <li>
          <ListLink>
            <FiDollarSign />
            <span>Sales</span>
          </ListLink>
        </li>
        <li>
          <ListLink>
            <FiImage />
            <span>Catalog</span>
          </ListLink>
        </li>
        <li>
          <ListLink>
            <FiUsers />
            <span>Customers</span>
          </ListLink>
        </li>
        <li>
          <ListLink>
            <FiMessageSquare />
            <span>Reviews</span>
          </ListLink>
        </li>
      </List>
    </Box>
  );
};
