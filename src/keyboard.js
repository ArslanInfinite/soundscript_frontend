class Keyboard {
	static renderKeyboard = () => {
		keyboard.innerHTML = `<div class="key white" id="c"></div> 
                      <div class="key black" id="cSharp"></div> 
                      <div class="key white" id="d"></div> 
                      <div class="key black" id="dSharp"></div> 
                      <div class="key white" id="e"></div> 
                      <div class="key white" id="f"></div> 
                      <div class="key black" id="fSharp"></div> 
                      <div class="key white" id="g"></div> 
                      <div class="key black" id="gSharp"></div> 
                      <div class="key white" id="a"></div> 
                      <div class="key black" id="aSharp"></div> 
                      <div class="key white" id="b"></div>  `;
	};

	static loadKeyboard = (source) => {
		c = new Audio(`./assets/sounds/${source}/c.mp3`);
		cSharp = new Audio(`./assets/sounds/${source}/cSharp.mp3`);
		d = new Audio(`./assets/sounds/${source}/d.mp3`);
		dSharp = new Audio(`./assets/sounds/${source}/dSharp.mp3`);
		e = new Audio(`./assets/sounds/${source}/e.mp3`);
		f = new Audio(`./assets/sounds/${source}/f.mp3`);
		fSharp = new Audio(`./assets/sounds/${source}/fSharp.mp3`);
		g = new Audio(`./assets/sounds/${source}/g.mp3`);
		gSharp = new Audio(`./assets/sounds/${source}/gSharp.mp3`);
		a = new Audio(`./assets/sounds/${source}/a.mp3`);
		aSharp = new Audio(`./assets/sounds/${source}/aSharp.mp3`);
		b = new Audio(`./assets/sounds/${source}/b.mp3`);
	};
}
