import { html, LitElement } from 'https://cdn.klimapartner.net/modules/lit-element/lit-element.js'

class KaskadiTemplate extends LitElement {
  render () {
    return html`
    <style>
      #main-container {
        min-height: 100vh;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        padding: 10px;
        background: linear-gradient(rgba(93, 189, 58, 0.2), rgba(93, 189, 58, 0.8))
      }
      h1 {
        text-align: center;
      }
      li strong em {
        color: #EA7C13;
      }
      li {
        margin-bottom: 10px;
      }
    </style>
    <div id="main-container">
      <h1>Welcome in kaskadi-template element!</h1>
      <section>
        <p>This element is a custom element that provides you the basic file/folder structure you need to extend upon and develop the custom element you need.</p>
        <p>This includes the following:
          <ul>
            <li><strong><em>kaskadi-template.js:</em></strong> this file defines the element itself using the <em>lit-element</em> library</li>
            <li><strong><em>test:</em></strong> in this folder you can define all the tests you would like to run. Those tests are written with <em>mocha+chai</em> and can be ran via <em>"npm test"</em>. To setup your test framework, please reference to <a href="https://github.com/kaskadi/docs-and-discussions/blob/master/karma-test/README.md">this documentation</a></li>
            <li><strong><em>example:</em></strong> in this folder you can find and edit this webpage in order to provide complementary documentation about your element or show use cases</li>
            <li><strong><em>.github/workflows:</em></strong> in this folder you can find the file called <em>main.yml</em> which you can use to edit the <em>GitHub Actions</em> associated with this repository. By default an action is associated that uploads <em>kaskadi-template.js</em> and the <em>example</em> folder into Kaskadi's CDN when a push on the <em>master</em> branch or any branches starting with <em>release/</em> is detected</li>
            <li><strong><em>package.json:</em></strong> you can use this file as a regular Node.JS <em>package.json</em> file. Besides, you can also add more object into the <em>files</em> field to choose more files that should be automatically uploaded into Kaskadi's CDN on push</li>
          </ul>
        </p>
      </section>
    </div>`
  }
}
customElements.define('kaskadi-template', KaskadiTemplate)
