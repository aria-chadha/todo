import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            anchor: '#F5F5F5'
            , // defaults to 'primary', overrided to another color
          },
        },
      },
});
