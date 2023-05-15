import { Box } from '../Box';
import { Intro } from '../Intro';
import {
  ItemAmount,
  ItemName,
  ItemSvg,
  ItemWrap,
  List,
  ListItem,
} from './Dashboard.styled';
import { FiDollarSign } from 'react-icons/fi';

export const Dashboard = () => {
  return (
    <Box pt="5">
      <List>
        <ListItem>
          <ItemSvg bg="orange">
            <FiDollarSign />
          </ItemSvg>
          <ItemWrap>
            <ItemName>Monthly Revenue</ItemName>
            <ItemAmount>1385 $US</ItemAmount>
          </ItemWrap>
        </ListItem>
        <ListItem>
          <ItemSvg bg="red">
            <FiDollarSign />
          </ItemSvg>
          <ItemWrap>
            <ItemName>New orders</ItemName>
            <ItemAmount>12</ItemAmount>
          </ItemWrap>
        </ListItem>
        <ListItem>
          <ItemSvg bg="blue">
            <FiDollarSign />
          </ItemSvg>

          <ItemWrap>
            <ItemName>Pending Reviews</ItemName>
            <ItemAmount>13</ItemAmount>
          </ItemWrap>
        </ListItem>
        <ListItem>
          <ItemSvg bg="green">
            <FiDollarSign />
          </ItemSvg>
          <ItemWrap>
            <ItemName>New Customers</ItemName>
            <ItemAmount>9</ItemAmount>
          </ItemWrap>
        </ListItem>
      </List>
      <Intro />
    </Box>
  );
};
