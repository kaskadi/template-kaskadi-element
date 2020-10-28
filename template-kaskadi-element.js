/* eslint-env browser, mocha */
import { lang, translate, KaskadiElement, css, html } from 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-element/kaskadi-element.js'

/**
 * Template element for the Kaskadi application.
 *
 * This is intended to be used as base for building other `lit-element` components from it.
 *
 * @module template-kaskadi-element
 *
 * @param {string} [phrase={&quot;en&quot;:&quot;Hello World!&quot;,&quot;de&quot;:&quot;Hallo Welt!&quot;,&quot;fr&quot;:&quot;Bonjour monde !&quot;}] - set of localized phrases that can be used for localization via our `translate` and `lang` module. This is a stringified object containing language as key (`en`, `de`, etc.) and the corresponding phrase as value.
 *
 * @example
 *
 * <template-kaskadi-element phrase="${JSON.stringify({ en: 'Hello', de: 'Hallo', fr: 'Bonjour' })}" lang="en"></template-kaskadi-element>
 */

class TemplateKaskadiElement extends KaskadiElement {
  constructor () {
    super()
    this.phrase = {
      en: 'Hello World!',
      de: 'Hallo Welt!',
      fr: 'Bonjour monde !'
    }
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
      phrase: { type: String }
    }
  }

  render () {
    const phrase = lang`${this.phrase}`
    return html`
      <div id="en">${translate(phrase, 'en')}</div>
      <div id="de">${translate(phrase, 'de')}</div>
      <div id="fr">${translate(phrase, 'fr')}</div>
    `
  }
}

customElements.define('template-kaskadi-element', TemplateKaskadiElement)
