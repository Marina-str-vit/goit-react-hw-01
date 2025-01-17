import Header from './components/header/Header'
import Profile from './components/profile/Profile'
import FriendList from './components/friendList/FriendList'
import TransactionHistory from './components/transactionHistory/TransactionHistory'
import './App.css'
import userData from './userData.json'
import friends from './friends.json'
import transactions from './transactions.json'

function App() {
  return (
    <>
    <Header />
     <Profile 
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
     <FriendList friends = {friends}/>
     <TransactionHistory transactions = {transactions}/>
     </>
  )
};

export default App;
