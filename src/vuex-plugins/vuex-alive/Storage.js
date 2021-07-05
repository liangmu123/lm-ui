import DB from './DB'

class Storage extends DB {
  constructor ({ name, db, serialize, deserialize }) {
    super({ name, db, serialize, deserialize })
  }

  read (key) {
    return this.deserialize(this.db.getItem(key))
  }

  write (key, value) {
    this.db.setItem(key, this.serialize(value))
  }

  delete (key) {
    this.db.removeItem(key)
  }
}

export default Storage
