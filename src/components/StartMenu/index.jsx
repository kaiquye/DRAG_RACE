import React from "react";

export function StartMenu({ selectRoom, children }) {
  const [room, setRoom] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [next, setNext] = React.useState(false);

  return (
    <section>
      {next === false ? (
        <>
          <section>
            <div>
              <label>Nickname</label>
              <input value={room} onChange={(e) => setRoom(e.target.value)} />
            </div>
            <div>
              <label>Room</label>
              <input
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
              next
            </button>
          </section>
        </>
      ) : (
        <>{children}</>
      )}
    </section>
  );
}
