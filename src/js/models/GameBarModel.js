export default class GameBarModel {
  constructor() {
    this.time = null;
    this.movies = null;
  }

  init(time = 0, movies = 0) {
    this.time = time;
    this.movies = movies;
  }

  timeIncrement() {
    return ++this.time;
  }

  moviesIncrement() {
    return ++this.movies;
  }
}
