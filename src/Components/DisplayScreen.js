export default function DisplayScreen(props)
{
    return (
        <>
            <div id="Screen">
                <canvas id="stage" width='500' height='500'></canvas>
            </div>
            <style jsx>{`
                #Screen {
                    height: 100vh;
                    width: 78vw;
                    background-color: black;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                #stage {
                    background-color: white;
                }
            `}</style>
        </>
    )
}
