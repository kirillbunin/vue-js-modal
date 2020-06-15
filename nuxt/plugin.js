import Vue from 'vue'
import { Modal, Dialog, ModalsContainer, VueJsModal } from 'vue-js-modal'

export default function(ctx, inject) {
  const options = Object.assign({}, <%= serialize(options) %>, { root: ctx.app })
  
  const instance = new VueJsModal(Vue, options, {
    componentName: options.componentName || 'Modal'
  })
  
  /**
   * Sets custom component name (if provided)
   */
  Vue.component(instance.context.componentName, Modal)
  /**
   * Registration of <Dialog/> component
   */
  if (options.dialog) {
    Vue.component('VDialog', Dialog)
  }
  /**
   * Registration of <ModalsContainer/> component
   */
  if (options.dynamic) {
    Vue.component('ModalsContainer', ModalsContainer)
  }
  inject('modal', instance)
}
