import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const HomePage = async () => {
  const loggedIn = await getLoggedInUser();
  console.log(loggedIn);
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
                  <TotalBalanceBox
                      accounts={[]}
                      totalBanks={1}
                    totalCurrentBalance={1250.35}
                  />
        </header>
      </div>
    </section>
  );
};

export default HomePage;
