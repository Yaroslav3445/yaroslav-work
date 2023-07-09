// 1
class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(radius) {
      this._radius = radius;
    }
  
    get diameter() {
      return this._radius * 2;
    }
  
    calculateArea() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    calculateCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  const myCircle = new Circle(4);
  console.log('Радиус:', myCircle.radius); 
  console.log('Диаметр:', myCircle.diameter); 
  console.log('Площадь:', myCircle.calculateArea()); 
  console.log('Длина окружности:', myCircle.calculateCircumference()); 
  
  myCircle.radius = 7;
  console.log('Радіус після змін', myCircle.radius); 
  console.log('Діаметир після змін', myCircle.diameter); 
  console.log('Площина після змін', myCircle.calculateArea()); 
  console.log('Довжина окружності після змін', myCircle.calculateCircumference()); 
  
// 2
  



class HtmlElement {
  constructor(tag, selfClosing = false) {
    this.tag = tag;
    this.selfClosing = selfClosing;
    this.content = '';
    this.attributes = [];
    this.styles = [];
    this.children = [];
  }

  setAttribute(name, value) {
    this.attributes.push({ name, value });
  }

  setStyle(property, value) {
    this.styles.push({ property, value });
  }

  addChild(element) {
    this.children.push(element);
  }

  addFirstChild(element) {
    this.children.unshift(element);
  }

  getHtml() {
    let html = `<${this.tag}`;

    for (let attribute of this.attributes) {
      html += ` ${attribute.name}="${attribute.value}"`;
    }

    if (this.styles.length > 0) {
      let style = '';

      for (let styleObj of this.styles) {
        style += `${styleObj.property}: ${styleObj.value}; `;
      }

      html += ` style="${style.trim()}"`;
    }

    html += '>';

    if (this.selfClosing) {
      return html;
    }

    html += this.content;

    for (let child of this.children) {
      html += child.getHtml();
    }

    html += `</${this.tag}>`;

    return html;
  }
}

const wrapperEl = new HtmlElement('div');
wrapperEl.setAttribute('id', 'wrapper');
wrapperEl.setStyle('display', 'flex');

const firstDiv = new HtmlElement('div');
firstDiv.setStyle('width', '300px');
firstDiv.setStyle('margin', '10px');

const secondDiv = new HtmlElement('div');
secondDiv.setStyle('width', '300px');
secondDiv.setStyle('margin', '10px');

const firstHead = new HtmlElement('h3');
firstHead.content = 'What is lorem Ipsum?';

const firstImage = new HtmlElement('img', true);
firstImage.setStyle('width', '100%');
firstImage.setAttribute('src', '');
firstImage.setAttribute('alt', 'lorem ipsum');

const firstPar = new HtmlElement('p');
firstPar.setStyle('text-align', 'justify');
firstPar.content = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quasi deserunt inventore aliquam eaque ipsum odit officia aut natus libero doloribus ipsa ipsam iste id, debitis placeat blanditiis labore quibusdam doloremque nam aliquid qui dolores! Perferendis voluptates illum vel amet, repellat inventore reprehenderit beatae maiores sequi, ullam, dolore animi. Dignissimos.';

const firstLink = new HtmlElement('a');
firstLink.setAttribute('href', 'https://www.lipsum.com/');
firstLink.setAttribute('target', '_blank');
firstLink.content = 'More...';

firstDiv.addChild(firstHead);
firstDiv.addChild(firstImage);
firstDiv.addChild(firstPar);
firstPar.addChild(firstLink);

const secondHead = new HtmlElement('h3');
secondHead.content = 'What is lorem Ipsum?';

const secondImage = new HtmlElement('img', true);
secondImage.setStyle('width', '100%');
secondImage.setAttribute('src', '');
secondImage.setAttribute('alt', 'lorem ipsum');

const secondPar = new HtmlElement('p');
secondPar.setStyle('text-align', 'justify');
secondPar.content = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quasi deserunt inventore aliquam eaque ipsum odit officia aut natus libero doloribus ipsa ipsam iste id, debitis placeat blanditiis labore quibusdam doloremque nam aliquid qui dolores! Perferendis voluptates illum vel amet, repellat inventore reprehenderit beatae maiores sequi, ullam, dolore animi. Dignissimos.';

const secondLink = new HtmlElement('a');
secondLink.setAttribute('href', 'https://www.lipsum.com/');
secondLink.setAttribute('target', '_blank');
secondLink.content = 'More...';

secondDiv.addChild(secondHead);
secondDiv.addChild(secondImage);
secondDiv.addChild(secondPar);
secondPar.addChild(secondLink);

wrapperEl.addChild(firstDiv);
wrapperEl.addChild(secondDiv);

const htmlCode = wrapperEl.getHtml();

document.write(htmlCode);


// 3
class CssClass {
  constructor(className) {
    this.className = className;
    this.styles = [];
  }

  setStyle(property, value) {
    this.styles.push({ property, value });
  }

  removeStyle(property) {
    this.styles = this.styles.filter(style => style.property !== property);
  }

  getCss() {
    let css = `.${this.className} {`;

    for (let style of this.styles) {
      css += `${style.property}: ${style.value}; `;
    }

    css += '}';

    return css;
  }
}

const cssClass = new CssClass('sourse');

cssClass.setStyle('display', 'flex');

const cssCode = cssClass.getCss();

document.write(`<style>${cssCode}</style>`);

document.write(`
  <div class="${cssClass.className}" id="wrapper">
    <div style="width: 200px; margin: 20px;">
      <h3>
        What is lorem Ipsum?
      </h3>
      <img style="width: 100%;" src="" alt="lorem ipsum">
      <p style="text-align: justify;">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quasi deserunt inventore aliquam
        eaque ipsum odit officia aut natus libero doloribus ipsa ipsam iste id, debitis placeat blanditiis
        labore quibusdam doloremque nam aliquid qui dolores! Perferendis voluptates illum vel amet, repellat
        inventore reprehenderit beatae maiores sequi, ullam, dolore animi. Dignissimos.
        <a href="https://www.lipsum.com/" target="_blank">More...</a>
      </p>
    </div>
    <div style="width: 200px; margin: 20px;">
      <h3>
        What is lorem Ipsum?
      </h3>
      <img style="width: 100%;" src="" alt="lorem ipsum">
      <p style="text-align: justify;">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quasi deserunt inventore aliquam
        eaque ipsum odit officia aut natus libero doloribus ipsa ipsam iste id, debitis placeat blanditiis
        labore quibusdam doloremque nam aliquid qui dolores! Perferendis voluptates illum vel amet, repellat
        inventore reprehenderit beatae maiores sequi, ullam, dolore animi. Dignissimos.
        <a href="https://www.lipsum.com/" target="_blank">More...</a>
      </p>
    </div>
  </div>
`);

// 4

class HtmlBlock {
  constructor() {
    this.styles = [];
    this.rootElement = null;
  }

  addStyle(cssClass) {
    this.styles.push(cssClass);
  }

  setRootElement(element) {
    this.rootElement = element;
  }

  getCode() {
    let htmlCode = '';

    const cssCode = this.styles.map(cssClass => cssClass.getCss()).join('\n');
    htmlCode += `<style>${cssCode}</style>\n`;

    if (this.rootElement) {
      htmlCode += this.rootElement.getHtml();
    }

    return htmlCode;
  }
}

class Html {
  constructor(tagName, className = '', content = '') {
    this.tagName = tagName;
    this.className = className;
    this.content = content;
    this.children = [];
  }

  addChild(element) {
    this.children.push(element);
  }

  getHtml() {
    let html = `<${this.tagName} class="${this.className}">`;

    if (this.content) {
      html += this.content;
    }

    for (let child of this.children) {
      html += child.getHtml();
    }

    html += `</${this.tagName}>`;

    return html;
  }
}

const htmlBlock = new HtmlBlock();

const wrapClass = new CssClass('wrap');
wrapClass.setStyle('display', 'flex');
const blockClass = new CssClass('block');
blockClass.setStyle('width', '100px');
blockClass.setStyle('margin', '40px');
const imgClass = new CssClass('img');
imgClass.setStyle('width', '100%');
const textClass = new CssClass('text');
textClass.setStyle('text-align', 'justify');

htmlBlock.addStyle(wrapClass);
htmlBlock.addStyle(blockClass);
htmlBlock.addStyle(imgClass);
htmlBlock.addStyle(textClass);

const wrapper = new HtmlElement('div', 'wrap');
const blockEl1 = new HtmlElement('div', 'block');
blockEl1.addChild(new HtmlElement('h3', '', 'What is lorem Ipsum?'));
blockEl1.addChild(new HtmlElement('img', 'img', ''));
blockEl1.addChild(new HtmlElement('p', 'text', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quasi deserunt inventore aliquam eaque ipsum odit officia aut natus libero doloribus ipsa ipsam iste id, debitis placeat blanditiis labore quibusdam doloremque nam aliquid qui dolores! Perferendis voluptates illum vel amet, repellat inventore reprehenderit beatae maiores sequi, ullam, dolore animi. Dignissimos. <a href="https://www.lipsum.com/" target="_blank">More...</a>'));
const blockEl2 = new HtmlElement('div', 'block');
blockEl2.addChild(new HtmlElement('h3', '', 'What is lorem Ipsum?'));
blockEl2.addChild(new HtmlElement('img', 'img', ''));
blockEl2.addChild(new HtmlElement('p', 'text', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quasi deserunt inventore aliquam eaque ipsum odit officia aut natus libero doloribus ipsa ipsam iste id, debitis placeat blanditiis labore quibusdam doloremque nam aliquid qui dolores! Perferendis voluptates illum vel amet, repellat inventore reprehenderit beatae maiores sequi, ullam, dolore animi. Dignissimos. <a href="https://www.lipsum.com/" target="_blank">More...</a>'));

htmlBlock.setRootElement(wrapper);

wrapper.addChild(blockEl1);
wrapper.addChild(blockEl2);

const htmlscript = htmlBlock.getCode();

document.write(htmlscript);
