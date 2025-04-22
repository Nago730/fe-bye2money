import { Logo } from '@/features/logo';
import { MonthNavigator } from '@/features/changeMonth';
import { TabMenu } from '@/features/pageTabs';

import styled from '@emotion/styled';

export const Header = () => {
  return (
    <Container>
      <Logo />
      <MonthNavigator />
      <TabMenu />
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 846px;
  padding: 24px 0px;
`;
