"use client"
import React from "react";
import { useEffect, useRef} from "react";
import { game, inputControl } from "./game"
export default function Canvas(props: any) {

    const canvasRefs = useRef();
    useEffect(() => {
        const canvas = canvasRefs.current;
        const ctx = canvas.getContext("2d")

        document.addEventListener("keydown", inputControl);
        setInterval(loop, 1000/15)

        function loop() {
            game(ctx);
        }
    },[])
    return <canvas ref={canvasRefs} {...props} width={400} height={400} />
    
}