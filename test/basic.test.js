/* eslint-env browser, mocha */
import '../template-kaskadi-element.js'
describe('template-kaskadi-element', () => {
  it('should have a black text color', async () => {
    const elem = document.createElement('template-kaskadi-element')
    document.body.appendChild(elem)
    await elem.updateComplete
    const cs = getComputedStyle(elem.shadowRoot.querySelector('div'))
    cs.color.should.equal('rgb(0, 0, 0)')
  })
  it('should not render anything if no phrase is provided', async () => {
    const elem = document.createElement('template-kaskadi-element')
    document.body.appendChild(elem)
    await elem.updateComplete
    elem.shadowRoot.querySelector('#en').textContent.should.equal('')
  })
  it('should render the sentences provided via the phrase property', async () => {
    var elem = document.createElement('template-kaskadi-element')
    elem.setAttribute('phrase', JSON.stringify({
      en: 'Hello World!',
      de: 'Hallo Welt!',
      fr: 'Bonjour monde !'
    }))
    document.body.appendChild(elem)
    await elem.updateComplete
    elem.shadowRoot.querySelector('#en').textContent.should.equal('Hello World!')
    elem.shadowRoot.querySelector('#de').textContent.should.equal('Hallo Welt!')
    elem.shadowRoot.querySelector('#fr').textContent.should.equal('Bonjour monde !')
  })
})
