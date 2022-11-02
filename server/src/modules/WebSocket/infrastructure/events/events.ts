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
      this.dbCon.saveRoom(data.room);
      this.StartGame(data.room);
    });
  }

  private StartGame(room: string): void {
    const numberOfParticipants = this.dbCon.countMembersByRoom(room);

    console.log(numberOfParticipants);

    if (numberOfParticipants >= 2) {
      this.con.to(room).emit("start", true);
    }
  }
}

export default EventsWebSocket;
