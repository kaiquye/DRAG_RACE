import { Socket } from "socket.io";
import DbConnection from "../data/database/dbConnection";

class EventsWebSocket {
  private event: Socket;
  private room: string;
  private dbCon;
  private con;

  constructor(events, socket) {
    this.event = events;
    this.con = socket;
    this.dbCon = DbConnection.getInstance();
  }

  public Room(): void {
    this.event.on("room", (data: any) => {
      console.log(data);
      this.event.join(data.room);
      this.event.join(data.nickname);

      this.dbCon.save({
        room: data.room,
        nickname: data.nickname,
        burned: null,
        finished: false,
        time: null,
      });

      this.StartGame(data.room);
    });
    this.finishRace();
  }

  private StartGame(room: string): void {
    const numberOfParticipants = this.dbCon.countMembersByRoom(room);

    console.log(numberOfParticipants);

    if (numberOfParticipants >= 2) {
      this.con.to(room).emit("start", true);
    }
  }

  private finishRace() {
    this.event.on(
      "finishRace",
      (data: {
        time: string;
        nickname: string;
        burned: boolean;
        room: string;
      }) => {
        this.dbCon.update(data.nickname, {
          time: data.time,
          burned: data.burned,
        });

        const runners = this.dbCon.getRunnersByRoom(data.room);

        const player2 = runners.find(
          (value) => value.nickname !== data.nickname && value.finished === true
        );

        if (player2) {
          if (player2.burned) {
            const deleted = this.dbCon.deleteRace(data.room);
            console.log("deleted", deleted);
            return this.con.to(data.nickname).emit("finish", "voce ganhou");
          }

          if (data.burned) {
            const deleted = this.dbCon.deleteRace(data.room);
            console.log("deleted", deleted);
            return this.con.to(player2.nickname).emit("finish", "voce ganhou");
          }

          if (player2.time < data.time) {
            const deleted = this.dbCon.deleteRace(data.room);
            console.log("deleted", deleted);
            return this.con.to(player2.nickname).emit("finish", "voce ganhou");
          }

          this.dbCon.deleteRace(data.room);
          return this.con.to(data.nickname).emit("finish", "voce ganhou");
        }
      }
    );
  }
}

export default EventsWebSocket;
