import { useEffect, useRef } from "react";
import { game , inputControl } from "./game";

const Canvas = props => {

    const canvasRefs = useRef(null);
    useEffect(() => {
       
        const canv = canvasRefs.current
        const ctx = canv.getContext('2d')

        document.addEventListener('keydown', inputControl)
		setInterval(loop, 1000/15)

        function loop() {
            game(ctx)
        }
        
    }, [])

    return <canvas ref={canvasRefs} {...props} width="400" height="400" />
};

export default Canvas;