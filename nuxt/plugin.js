import Vue from 'vue'
import VueJsModal from 'vue-js-modal/dist/ssr.nocss'

export default function(ctx, inject) {
  const options =  <%= serialize(options) %>
  
  Vue.use(VueJsModal, options)

  inject('modal', VueJsModal)
}
