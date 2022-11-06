import Database from "./database";

class DbConnection {
  public static dbConnection = null;
  private static readonly db = new Database();

  static getInstance() {
    if (this.dbConnection == null) {
      this.dbConnection = this.db;
    }

    return this.dbConnection;
  }
}

export default DbConnection;
