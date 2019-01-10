import setImmediate from "set-immediate-shim";
import unstated, { Container } from "unstated";

// https://gist.github.com/Contra/6368485
var isStorageAvailable = function (storage) {
    if (typeof storage == 'undefined') return false;
    try { // hack for safari incognito
      storage.setItem("storage", "");
      storage.getItem("storage");
      storage.removeItem("storage");
      return true;
    }
    catch (err) {
      return false;
    }
  };

export class StoredContainer extends Container {
  constructor() {
    super();

    const init = () => {

        const { key, version, storage } = this.store;

        if (!isStorageAvailable(storage)) {
          throw new Error("unstated-storage: Invalid storage provided");
        }
    
        if (!key || typeof key !== "string") {
          throw new Error("unstated-storage: Invalid key provided");
        }
    
        const defaultStorage = { _version: version };
        let storageState = storage.getItem(key);

        if (storageState !== null) {
          storageState = JSON.parse(storageState);
    
          // If version isn't used we just update state, otherwise we
          // check for a match
          if (version && storageState._version) {
            if (storageState._version === version) {
              this.setState(storageState);
            } else {
              this.setState(defaultStorage);
            }
          } else {
            this.setState(storageState); 
          }
        } else {
          this.setState(defaultStorage);
        }
    
        this.subscribe(() => {
          storage.setItem(key, JSON.stringify(this.state))
        });
    }

    setImmediate(init)
  }
}