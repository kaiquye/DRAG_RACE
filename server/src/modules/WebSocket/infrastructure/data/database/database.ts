class Database {
  protected data = [];

  public countMembersByRoom(room: string) {
    return this.data.filter((data) => data.room == room).length;
  }

  public saveRoom(room: string) {
    this.data.push({ room: room });
  }
}

export default Database;
