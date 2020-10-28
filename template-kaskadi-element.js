/* eslint-env browser, mocha */
import { lang, translate, KaskadiElement, css, html } from 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-element/kaskadi-element.js'

/**
 * Template element for the Kaskadi application.
 *
 * This is intended to be used as base for building other `lit-element` components from it.
 *
 * This element inherits properties from a base class `KaskadiElement`. To see which properties are available, please refer to [`KaskadiElement` documentation](https://github.com/kaskadi/kaskadi-element).
 *
 * @module template-kaskadi-element
 *
 * @param {string} [phrase] - set of localized phrases that can be used for localization via our `translate` and `lang` module. This is a stringified object containing language as key (`en`, `de`, etc.) and the corresponding phrase as value.
 *
 * @example
 *
 * <template-kaskadi-element phrase="${JSON.stringify({ en: 'Hello', de: 'Hallo', fr: 'Bonjour' })}"></template-kaskadi-element>
 */

class TemplateKaskadiElement extends KaskadiElement {
  constructor () {
    super()
    this.phrase = ''
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
      phrase: { type: String }
    }
  }

  render () {
    const phrase = this.phrase.length > 0 ? lang`${JSON.parse(this.phrase)}` : ''
    return html`
      <div id="en">${translate(phrase, 'en')}</div>
      <div id="de">${translate(phrase, 'de')}</div>
      <div id="fr">${translate(phrase, 'fr')}</div>
    `
  }
}

customElements.define('template-kaskadi-element', TemplateKaskadiElement)
