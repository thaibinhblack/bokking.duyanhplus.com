import Vue from 'vue';
import Vuetify ,{
  VTextField
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  component: {
    
  },
  directives: {
    Ripple,
  },
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
