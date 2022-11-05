class Database {
  protected data = [];

  public countMembersByRoom(room: string) {
    console.log("tudo", this.data);
    return this.data.filter((data) => data.room == room).length;
  }

  public save(data) {
    console.log("database", data);
    this.data.push(data);
  }

  public getRunnersByRoom(room: string) {
    return this.data.filter((data) => data.room === room);
  }

  public update(nickname, data) {
    const index = this.data.findIndex((value) => value.nickname === nickname);

    if (index < 0) {
      throw new Error("[db] nickname not found");
    }

    this.data[index].time = data.time;
    this.data[index].burned = data.burned;
    this.data[index].finished = true;
  }

  public deleteRace(room: string) {
    const index = this.data.findIndex((value) => value.room === room);
    this.data.splice(index, 1);
  }
}

export default Database;
