/**
 * I'm probably going to have to persist this straight to disk rather than mucking about with keeping
 * it just in memory, because as soon as I import this file into two different files, they won't be
 * sharing the same variable..
 * Unless I use a singleton pattern, I believe
 * ChatGPT seems to think I can just use a singleton
 */
const cacheSingleton = {
  cache: {},
  getItem: function (key) {
    if (!this.cache[key]) return null;
    return JSON.parse(this.cache[key]);
  },
  getFullCache: function () {
    return this.cache;
  },
  addToCache: function (data) {
    this.cache[data.key] = data.value;
    console.log({addToCache: this.cache})
  }
};

export default cacheSingleton;