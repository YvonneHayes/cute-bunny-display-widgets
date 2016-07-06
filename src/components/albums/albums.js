import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controllerAs: 'albums',
  bindings: {
    display: '<',
    view: '<'
  },

  controller
};

controller.inject = ['albumService', 'imageService', '$state', 'userService'];

function controller(albumService, imageService, $state, userService) {
  this.styles = styles;
  this.logout = () => userService.logout();
  imageService.get().then(images => this.images = images);
  albumService.get().then(albums => this.albums = albums);

  // default view
  this.view = this.view || 'tile';

  this.changeView = () => {
    $state.go($state.current.name, {view: this.view});
  };

  this.addAlbum = (album) => {
    albumService.add(album)
      .then(album => this.albums.push(album))
      .catch(err => console.error(err));;
  };
}
