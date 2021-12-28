import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => {
  return (
    <ViewWrapper>
      <UsersList />
    </ViewWrapper>
  );
};

export default Dashboard;
