import styled from 'styled-components';
import Canvas from './Components/Canvas'

const DivScore = styled.div`
    width: 20vw;
    background-color: whitesmoke;
    height: 100%;
    `;
    const DivDisplay = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;
    const DivUser = styled.div`
    padding: 20px; 
    border: 1px solid grey;
    border-radius: 8px;
    font-family: verdana;
    font-size: 1.1rem;
    margin-bottom: 5px;
    `
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
      <DivDisplay id="displayScreen">
        <DivScore id="scoreTable">
            {users.map((objProp) => {
                return (
                    <DivUser className="usersContainer" key={objProp.id}>
                        <span>
                            <h4>{objProp.username}</h4>
                            <p>{objProp.score}</p>
                        </span>
                    </DivUser>
                )
            })}
        </DivScore>
        <Canvas id='canv' width='400' height='400' />
      </DivDisplay>
    </>
  )
}