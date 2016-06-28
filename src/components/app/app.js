import template from './app.html';
import styles from './app.scss';

export default {
  template,
  controllerAs: 'app',
  controller() {
    this.styles = styles;
    this.addImage = (image) => {
      this.data.push(image);
    };

  }
};
