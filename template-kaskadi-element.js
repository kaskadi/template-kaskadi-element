/* eslint-env browser, mocha */
// import { css, html } from 'https://cdn.klimapartner.net/modules/lit-element/lit-element.js'
import { lang, translate, KaskadiElement, css, html } from 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-element/kaskadi-element.js'

/**
 * Template element for the Kaskadi application.
 *
 * This is intended to be used as base for building other `lit-element` components from it.
 *
 * @module template-kaskadi-element
 *
 * @param {object} phrase - set of localized phrases that can be used for localization via our `translate` and `lang` module
 * @param {string} lang - element's language
 *
 * @example
 *
 * <template-kaskadi-element phrase="${JSON.stringify({ en: 'Hello', de: 'Hallo', fr: 'Bonjour' })}" lang="en"></template-kaskadi-element>
 */

class TemplateKaskadiElement extends KaskadiElement {
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
      div{color: red}
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
