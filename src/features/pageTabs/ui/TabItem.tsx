import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { TabItem as TabItemType, TabType } from '../model/tabModel';
import DocIcon from '@/assets/doc.svg?react';
import CalendarIcon from '@/assets/calendar.svg?react';
import ChartIcon from '@/assets/chart.svg?react';

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 22px;

  &.active {
    background-color: ${({ theme }) => theme.tokens.nuetral.surface.default};
  }
`;

const tabIcons: Record<TabType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  transactions: DocIcon,
  calendar: CalendarIcon,
  stats: ChartIcon,
};

export const TabItem = ({ tab }: { tab: TabItemType }) => {
  const Icon = tabIcons[tab.id];

  return (
    <StyledNavLink to={tab.path}>
      <Icon width={24} height={24} />
    </StyledNavLink>
  );
};