"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[801],{801:(n,e,t)=>{t.r(e),t.d(e,{defineCustomElement:()=>i});class o extends HTMLElement{static get observedAttributes(){return["mode"]}constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const n=document.createElement("style");n.innerHTML="\n   :host {\n     --device-padding: 1rem;\n     --device-width: 344px;\n     --device-height: 704px;\n     --device-frame-width: 12px;\n\n\n     display: flex;\n\n     align-items: center;\n     justify-content: center;\n   }\n\n   figure {\n     margin: 0;\n\n     background-size: contain;\n     background-repeat: no-repeat;\n\n     box-shadow: 0px 2px 8px rgba(2, 8, 20, 0.1), 0px 8px 16px rgba(2, 8, 20, 0.08);\n\n     width: var(--device-width);\n     height: var(--device-height);\n\n     position: relative;\n\n     z-index: 1;\n   }\n\n   .content {\n    position: absolute;\n\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 100%;\n\n    border: none;\n\n    overflow: hidden;\n\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n    z-index: 1;\n   }\n\n   :host(.ios) figure {\n    border: 12px solid black;\n    border-radius: 54px;\n   }\n\n   :host(.ios) .content {\n     border-radius: 38px;\n   }\n\n   :host(.ios) figure:after {\n     background-color: rgba(0, 0, 0, 0.5);\n     border-radius: 2px;\n     bottom: 8px;\n     content: '';\n     height: 4px;\n     left: 50%;\n     position: absolute;\n     transform: translateX(-50%);\n     width: 35%;\n     z-index: 1;\n   }\n\n   :host(.md) figure {\n     border: 12px solid black;\n     border-radius: 44px;\n   }\n\n   :host(.md) .content {\n     border-radius: 32px;\n   }\n\n   .ios-notch {\n     display: none;\n     fill: #090a0d;\n     left: 50%;\n     position: absolute;\n     top: 0px;\n     transform: translateX(-50%);\n     width: 165px;\n     z-index: 2;\n   }\n\n   .md-bar {\n     display: none;\n     fill: rgba(125, 125, 125, 0.3);\n     padding: 0.5rem 2.2rem;\n     position: relative;\n     width: calc(100% - 64px);\n     z-index: 2;\n     top: 0px;\n   }\n\n   :host(.ios) .ios-notch {\n     display: block;\n   }\n\n   :host(.md) .md-bar {\n     display: block;\n   }\n\n   ::slotted(iframe) {\n     height: 100%;\n   }\n\n   @media only screen and (max-width: 600px) {\n    :host {\n      --device-width: 100%;\n    }\n    :host(.ios) .ios-notch,\n    :host(.md) .md-bar,\n    :host(.ios) figure::after {\n      display: none;\n    }\n\n    :host(.ios) figure,\n    :host(.md) figure {\n      border: 0;\n      border-radius: 0;\n      box-shadow: none;\n    }\n\n    :host(.ios) .content {\n      border-radius: 0;\n    }\n\n   }\n\n ";const e=document.createElement("template");e.innerHTML='\n        <figure>\n          <svg class="md-bar" viewBox="0 0 1384.3 40.3">\n            <path class="st0" d="M1343 5l18.8 32.3c.8 1.3 2.7 1.3 3.5 0L1384 5c.8-1.3-.2-3-1.7-3h-37.6c-1.5 0-2.5 1.7-1.7 3z"></path>\n            <circle class="st0" cx="1299" cy="20.2" r="20"></circle>\n            <path class="st0" d="M1213 1.2h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4v-30c0-2.3 1.8-4 4-4zM16 4.2h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>\n          </svg>\n          <svg class="ios-notch" viewBox="0 0 219 31">\n            <path d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z" fill-rule="evenodd"></path>\n          </svg>\n          <div class="content">\n            <slot></slot>\n          </div>\n        </figure>\n      ',this.shadowRoot.appendChild(n),this.shadowRoot.appendChild(e.content.cloneNode(!0))}}connectedCallback(){this.modeChanged()}attributeChangedCallback(n,e,t){"mode"===n&&this.modeChanged()}modeChanged(){const n=this.getAttribute("mode");this.shadowRoot&&(this.shadowRoot.host.classList.toggle("ios","ios"===n),this.shadowRoot.host.classList.toggle("md","md"===n))}}function i(){void 0===window.customElements.get("device-preview")&&window.customElements.define("device-preview",o)}}}]);