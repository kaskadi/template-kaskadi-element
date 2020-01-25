/* eslint-env browser, mocha */
import { css, html, LitElement } from 'https://cdn.klimapartner.net/modules/lit-element/lit-element.js'
import { lang, translate } from 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-element/kaskadi-element.js'

class TemplateKaskadiElement extends LitElement {
  constructor () {
    super()
    const phrase = {
      en: 'Hello World!',
      de: 'Hallo Welt!',
      fr: 'bonjour monde!'
    }
    this.phrase = lang`${phrase}`
    this.lang = 'en'
  }

  static get styles () {
    return css`
      :host{
        display: inline-block;
      }
    `
  }

  static get properties () {
    return {
      phrase: { type: String },
      lang: { type: String }
    }
  }

  render () {
    return html`
      <div id="en">${translate(this.phrase, 'en')}</div>
      <div id="de">${translate(this.phrase, 'de')}</div>
      <div id="fr">${translate(this.phrase, 'fr')}</div>
    `
  }
}
customElements.define('template-kaskadi-element', TemplateKaskadiElement)
