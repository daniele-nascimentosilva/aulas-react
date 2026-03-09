import './Dashboard.css';
type DashboardProps = { 
    userName: string | null
}

export const Dashboard = ({ userName }: DashboardProps) => {
    console.log(userName);
    return (
        <div>
            {userName ? (
                <h1>Bem-vindo, {userName}!</h1>
            ) : (
                <h2 className="not-logged">Você não está logado.</h2>
            )}
        </div>
    );
}
