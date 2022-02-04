import DisplayScreen from "./Components/DisplayScreen";

export default function Home()
{
    //just for testing
    const users = [
    {
        id: 1,
        username: 'Lucas',
        score: 10
    },
    {
        id: 2,
        username: 'João',
        score: 20
    },
    {
        id: 3,
        username: 'Julia',
        score: 55
    },
    {
        id: 4,
        username: 'Mariana',
        score: 150
    },]
  return (
    <>
      <div id="displayScreen">
        <div id="scoreTable">
            {users.map((objProp) => {
                return (
                    <div className="usersContainer" key={objProp.id}>
                        <span>
                            <h4>{objProp.username}</h4>
                            <p>{objProp.score}</p>
                        </span>
                    </div>
                )
            })}
        </div>
        <DisplayScreen />
      </div>
      <style>{`
        #displayScreen {
            width: 100%;
            height: 100%;
            background-color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        #scoreTable {
            width: 20vw;
            background-color: whitesmoke;
            height: 100%;
        }
        .usersContainer {
            padding: 20px; 
            border: 1px solid grey;
            border-radius: 8px;
            font-family: verdana;
            font-size: 1.1rem;
            margin-bottom: 5px;

        }
      `}</style>
    </>
  )
}