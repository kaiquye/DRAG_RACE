import React from "react";
import style from "./style.module.css";
import { Lights } from "../lights";
import { io } from "socket.io-client";
import { StartMenu } from "../StartMenu";

function BodyPinheirinho({ start, setBurned, burned }) {
  /**
   *   tempo limite de reação. ( o valor de burned e true, com isso, quem aperta o butão start antes desse tempo vai ter queimado a largada
   *   setTimeout(() => burned(false), 4800 * 2);
   */
  setTimeout(() => setBurned(false), 4000 * 2);

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
          <div>
            {/*{!burned && (*/}
            {/*  <Lights*/}
            {/*    className={style.light_red}*/}
            {/*    start={start}*/}
            {/*    time={1}*/}
            {/*    color={"#e34949"}*/}
            {/*  />*/}
            {/*)}*/}
          </div>
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
          <div>
            {/*{!burned && (*/}
            {/*  <Lights*/}
            {/*    className={style.light_red}*/}
            {/*    start={start}*/}
            {/*    time={1}*/}
            {/*    color={"#e34949"}*/}
            {/*  />*/}
            )}
          </div>
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
    alert("voce ganhou");
  });

  function selectRoom(_room, _nickname) {
    setRoom(_room);
    setNickname(_nickname);
    socket.emit("room", { room: _room, nickname: _nickname });
  }

  function drag() {
    socket.emit("finishRace", {
      time: Date.now(),
      nickname,
      burned: burned,
      room,
    });
  }

  return (
    <main className={style.Body}>
      <StartMenu selectRoom={selectRoom}>
        <div className={style.Pinheirinho}>
          <BodyPinheirinho
            start={start}
            setBurned={setBurned}
            burned={burned}
          />
          <button onClick={() => drag()}>GO</button>
        </div>
      </StartMenu>
    </main>
  );
}
