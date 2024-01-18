import storage from "../data/storage.json"
import { TStorage } from "../scripts/types/types"


  export class Storage {
    private _data: TStorage[]

    constructor() {
        this._data = storage;
    }
  }