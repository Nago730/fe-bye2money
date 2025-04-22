import styled from '@emotion/styled';
import { tabItems } from '../model/tabModel';
import { TabItem } from './TabItem';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 132px;
  gap: 4px;
`;

export const TabMenu = () => {
  return (
    <Nav>
      {tabItems.map((tab) => (
        <TabItem key={tab.id} tab={tab} />
      ))}
    </Nav>
  );
}; 