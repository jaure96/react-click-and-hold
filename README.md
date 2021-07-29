# react-click-and-hold

Detect a long click by using the ClickAndHoldWrapper component. 

[![npm latest package](https://img.shields.io/badge/npm%40latest-1.0.4-orange)](https://www.npmjs.com/package/react-click-and-hold)


## Install
*ClickAndHoldWrapper* is available as an [npm package](https://www.npmjs.com/package/react-click-and-hold).
```bash
npm i react-click-and-hold
```


## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from "react";
import ClickAndHoldWrapper from "react-click-and-hold/core";

export default function App() {
  const handleLongPress = (event) => {
    console.log("Long press");
  };

  const handleClick = (event) => {
    console.log("Simple click");
  };

  return (
    <div className="App">
      <h1>Click and hold</h1>
      <ClickAndHoldWrapper
        id={1}
        elmType={"div"}
        onHold={(e) => handleLongPress(e)}
        onClick={(e) => handleClick(e)}
        timeOut={300}
      >
        <button>Click&Hold</button>
      </ClickAndHoldWrapper>
    </div>
  );
}

```

Yes, it's really all you need to get started as you can see in this live and interactive demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-click-and-hold-example-l9eb7)

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://npmjs.org/package/live-xxx
[travis-image]: https://img.shields.io/travis/live-js/live-xxx/master.svg
[travis-url]: https://travis-ci.org/live-js/live-xxx
[coveralls-image]: https://img.shields.io/coveralls/live-js/live-xxx/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/live-xxx?branch=master