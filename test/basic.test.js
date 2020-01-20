/* eslint-env browser, mocha */
import '../kaskadi-template.js'
describe('kaskadi-template', () => {
  it('should render the string "Hello World"', async () => {
    // create kaskadi-template element
    var elem = document.createElement('kaskadi-template')
    document.body.appendChild(elem)
    // wait until it's finished rendering
    await elem.updateComplete
    // actual test
    elem.shadowRoot.querySelector('div').textContent.should.equal('Hello World!')
    var cs = getComputedStyle(elem.shadowRoot.querySelector('div'))
    cs.color.should.equal('rgb(255, 0, 0)')
  })
})
