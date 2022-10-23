import React from "react";
import style from './style.module.css'


export function Lights({start, color, time, className}) {
    const component = React.useRef()

    React.useEffect(  ()=>{
        async  function up() {
            if(start){
                await startLight()
            }
        }

        up()
    }, [start])


    async function lightUp() {
        return new Promise((resolve)=>{
            setTimeout(()=> component.current.style.display = 'flex', time)
            resolve(true)
        })
    }

    async function lightDown() {
        return new Promise((resolve)=>{
            setTimeout(()=> component.current.style.display = 'none', time * 2)
            resolve(true)
        })
    }

    async function startLight() {
        await lightUp()
        // await lightDown()
    }

    return (
        <div ref={component}  className={className} style={{backgroundColor: color, display: "none"}} >
            .
        </div>
    )
}