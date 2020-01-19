/* eslint-env browser, mocha */
import { css, html, LitElement } from 'https://cdn.klimapartner.net/modules/lit-element/lit-element.js'

class KaskadiTemplate extends LitElement {
  constructor () {
    super()
    this.name = 'World'
  }

  static get styles () {
    return css`
      div{color: red}
    `
  }

  static get properties () {
    return {
      name: { type: String }
    }
  }

  render () {
    return html`
      <div>Hello ${this.name}!</div>
    `
  }
}
customElements.define('kaskadi-template', KaskadiTemplate)
