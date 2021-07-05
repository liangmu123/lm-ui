class DB {
  constructor ({ name, db, serialize, deserialize }) {
    this.name = name
    this.db = db
    this.serialize = serialize || ((value) => value)
    this.deserialize = deserialize || ((value) => value)
  }
  read (key) {
    throw new Error('The method read is necessary')
  }
  write (key, value) {
    throw new Error('The method write is necessary')
  }
  delete (key) {
    throw new Error('The method delete is necessary')
  }
}

export default DB
