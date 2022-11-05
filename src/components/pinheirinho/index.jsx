import React from "react";
import style from "./style.module.css";
import { Lights } from "../lights";
import { io } from "socket.io-client";
import { StartMenu } from "../StartMenu";

function BodyPinheirinho({ start, burned }) {
  // setTimeout(() => burned(false), 4800 * 2);
  //
  return (
    <section className={style.bodyPinheirinho}>
      <section className={style.stages}>
        <section className={style.preStage}>
          <div className={style.left}>
            <div>
              <Lights
                className={style.light_orage}
                start={start}
                time={1000}
                color={"#eeb95c"}
              />
            </div>
            <div>
              <Lights
                className={style.light_orage}
                start={start}
                time={1000}
                color={"#eeb95c"}
              />
            </div>
          </div>
          <div className={style.right}>
            <div>
              <Lights
                className={style.light_orage}
                start={start}
                time={1000}
                color={"#eeb95c"}
              />
            </div>
            <div>
              <Lights
                className={style.light_orage}
                start={start}
                time={1000}
                color={"#eeb95c"}
              />
            </div>
          </div>
        </section>
        <section className={style.stage}>
          <div className={style.left}>
            <div>
              <Lights
                className={style.light_orage}
                start={start}
                time={1500}
                color={"#eeb95c"}
              />
            </div>
            <div>
              <Lights
                className={style.light_orage}
                start={start}
                time={1500}
                color={"#eeb95c"}
              />
            </div>
          </div>
          <div className={style.right}>
            <div>
              <Lights
                className={style.light_orage}
                start={start}
                time={1500}
                color={"#eeb95c"}
              />
            </div>
            <div>
              <Lights
                className={style.light_orage}
                start={start}
                time={1500}
                color={"#eeb95c"}
              />
            </div>
          </div>
        </section>
      </section>

      <section className={style.proStages}>
        <section className={style.left}>
          <div>
            <Lights
              className={style.light_orage}
              start={start}
              time={2000}
              color={"#fff538"}
            />
          </div>
          <div>
            <Lights
              className={style.light_orage}
              start={start}
              time={3000}
              color={"#fff538"}
            />
          </div>
          <div>
            <Lights
              className={style.light_orage}
              start={start}
              time={4000}
              color={"#fff538"}
            />
          </div>
          <div>
            <Lights
              className={style.light_green}
              start={start}
              time={4800}
              color={"#43d243"}
            />
          </div>
          {/*<div>*/}
          {/*    <Lights StartMenu={StartMenu}  time={6000} color={'red'}/>*/}
          {/*</div>*/}
        </section>
        <section className={style.right}>
          <div>
            <Lights
              className={style.light_orage}
              start={start}
              time={2000}
              color={"#fff538"}
            />
          </div>
          <div>
            <Lights
              className={style.light_orage}
              start={start}
              time={3000}
              color={"#fff538"}
            />
          </div>
          <div>
            <Lights
              className={style.light_orage}
              start={start}
              time={4000}
              color={"#fff538"}
            />
          </div>
          <div>
            <Lights
              className={style.light_green}
              start={start}
              time={4800}
              color={"#43d243"}
            />
          </div>
          {/*<div>*/}
          {/*    <Lights StartMenu={StartMenu}  time={6000} color={'red'}/>*/}
          {/*</div>*/}
        </section>
      </section>
    </section>
  );
}

export function Pinheirinho() {
  const [start, setStart] = React.useState(0);
  const [room, setRoom] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [burned, setBurned] = React.useState(true);

  const socket = io("ws://localhost:3002", {
    transports: ["websocket"],
  });

  socket.on("start", (value) => {
    if (value) {
      setStart(start + 1);
    }
  });

  socket.on("finish", (value) => {
    console.log(value);
  });

  function selectRoom(_room, _nickname) {
    setRoom(_room);
    setNickname(_nickname);
    socket.emit("room", { room: _room, nickname: _nickname });
  }

  function drag() {
    console.log(Date.now());
    socket.emit("finishRace", {
      time: Date.now(),
      nickname,
      burned: false,
      room,
    });
  }

  return (
    <main className={style.Body}>
      <StartMenu selectRoom={selectRoom}>
        <div className={style.Pinheirinho}>
          <BodyPinheirinho start={start} burned={setBurned} />
          <button onClick={() => drag()}>GO</button>
        </div>
      </StartMenu>
    </main>
  );
}
