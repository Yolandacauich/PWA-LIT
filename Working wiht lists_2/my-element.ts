import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  items = new Set(['manzana', 'Plátano', 'Uva', 'Naranja', 'Lima'])

  render() {
    return html`
      <p>MISFURTOS</p>
      <ul>
        ${map(this.items, (item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}


