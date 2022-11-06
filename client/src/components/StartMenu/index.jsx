import React from "react";
import style from "./menu.module.css";

export function StartMenu({ selectRoom, children }) {
  const [room, setRoom] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [next, setNext] = React.useState(false);

  return (
    <section className={style.menu}>
      <div className={style.backgroundImage}></div>
      {next === false ? (
        <>
          <section className={style.formMenu}>
            <div>
              <input
                placeholder={"Room"}
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
            </div>
            <div>
              <input
                placeholder={"Car"}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <button
              onClick={() => {
                selectRoom(room, nickname);
                setNext(true);
              }}
            >
              NEXT
            </button>
          </section>
        </>
      ) : (
        <>{children}</>
      )}
    </section>
  );
}
