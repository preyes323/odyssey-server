const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId) {
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }

  getTrack(trackId) {
    return this.get(`track/${encodeURIComponent(trackId)}`);
  }

  getTrackModules(id) {
    return this.get(`track/${encodeURIComponent(id)}/modules`);
  }

  getModule(moduleId) {
    return this.get(`module/${encodeURIComponent(moduleId)}`);
  }

  incrementTrackViews(trackId) {
    return this.patch(`track/${encodeURIComponent(trackId)}/numberOfViews`);
  }
}

module.exports = TrackAPI;
