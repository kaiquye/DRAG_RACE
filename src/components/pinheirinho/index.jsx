import React from 'react'
import style from './style.module.css'
import {Lights} from "../lights";


function BodyPinheirinho({start }) {

    return (
        <section className={style.bodyPinheirinho}>
            <section className={style.stages}>
                <section className={style.preStage}>
                    <div className={style.left} >
                        <div>
                            <Lights  className={style.light_orage} start={start}  time={1000} color={'#eeb95c'}/>
                        </div>
                        <div>
                            <Lights  className={style.light_orage}  start={start}  time={1000} color={'#eeb95c'}/>
                        </div>
                    </div>
                    <div  className={style.right}>
                        <div>
                            <Lights  className={style.light_orage}  start={start}  time={1000} color={'#eeb95c'}/>
                        </div>
                        <div>
                            <Lights   className={style.light_orage}  start={start}  time={1000} color={'#eeb95c'}/>
                        </div>
                    </div>
                </section>
                <section className={style.stage}>
                    <div className={style.left} >
                        <div>
                            <Lights  className={style.light_orage}  start={start}  time={1500} color={'#eeb95c'}/>
                        </div>
                        <div>
                            <Lights  className={style.light_orage}  start={start}  time={1500} color={'#eeb95c'}/>
                        </div>
                    </div>
                   <div  className={style.right}>
                       <div>
                           <Lights  className={style.light_orage}  start={start}  time={1500} color={'#eeb95c'}/>
                       </div>
                       <div>
                           <Lights  className={style.light_orage}  start={start}  time={1500} color={'#eeb95c'}/>
                       </div>
                   </div>
                </section>
            </section>

            <section className={style.proStages}>
                <section className={style.left}>
                    <div>
                        <Lights  className={style.light_orage}  start={start}  time={2000} color={'#fff538'}/>
                    </div>
                    <div>
                        <Lights   className={style.light_orage} start={start}  time={3000} color={'#fff538'}/>
                    </div>
                    <div>
                        <Lights   className={style.light_orage}  start={start}  time={4000} color={'#fff538'}/>
                    </div>
                    <div>
                        <Lights  className={style.light_green}  start={start}  time={4800} color={'#43d243'}/>
                    </div>
                    {/*<div>*/}
                    {/*    <Lights start={start}  time={6000} color={'red'}/>*/}
                    {/*</div>*/}
                </section>
                <section className={style.right}>
                    <div>
                        <Lights  className={style.light_orage}  start={start}  time={2000} color={'#fff538'}/>
                    </div>
                    <div>
                        <Lights   className={style.light_orage} start={start}  time={3000} color={'#fff538'}/>
                    </div>
                    <div>
                        <Lights   className={style.light_orage}  start={start}  time={4000} color={'#fff538'}/>
                    </div>
                    <div>
                        <Lights  className={style.light_green}  start={start}  time={4800} color={'#43d243'}/>
                    </div>
                    {/*<div>*/}
                    {/*    <Lights start={start}  time={6000} color={'red'}/>*/}
                    {/*</div>*/}
                </section>
            </section>
        </section>
    )
}

export function Pinheirinho() {
    
    const [start, setStart] = React.useState(0)

    return (
        <main className={style.Body}>
            <div className={style.Pinheirinho}>
                <BodyPinheirinho start={start} />
            </div>
            <button onClick={()=>setStart(start + 1)} >
                start
            </button>
        </main>
    )
}