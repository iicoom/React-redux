> Babel is a JavaScript compiler.
Use next generation JavaScript, today.

### babel-core
The Babel repo is managed as a monorepo; it's composed of many npm packages

    var babel = require("babel-core");
    import { transform } from 'babel-core';
    import * as babel from 'babel-core';
    
### babel-polyfill
Babel includes a polyfill that includes a custom regenerator
 runtime and core-js.
This means you can use new built-ins like Promise or WeakMap, static methods like Array.from or Object.assign, instance methods like Array.prototype.includes, 
and generator functions (provided you use the regenerator plugin). 
The polyfill adds to the global scope as well as native prototypes like String in order to do this.