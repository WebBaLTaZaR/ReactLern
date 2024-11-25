import "./App.css";
import withLoadingIndicator from "./components/sem5/withLoadingIndicator";
import UserList from "./components/sem5/UserList";
const UserListWithLoading = withLoadingIndicator(UserList);
export default function App() {
  const users = [
    { id: 1, name: "Иван" },
    { id: 2, name: "Мария" },
  ];
  const isLoading = false;

  return (
    <div>
      <h1>Список пользователей</h1>
      <UserListWithLoading isLoading={isLoading} users={users} />
    </div>
  );
}
