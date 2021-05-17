# Button

💡 This Button is elpo-ui Button Component

## ⭐️ Import

```js
import { Button } from 'elpo-ui';
```

## ⭐️ Props

|Name|Type|Defulat|Description
|------|---|---|------|
|children|React.ReactNode||The content of the button.|
|color|'primary', 'secondary', 'inherit'|primary|The color of the component. You are welcome to suggest the color code you want.|
|theme|'outlined', 'fill', 'text', 'delete'|fill|The theme of the button.|
|animation|boolean|true|Whether to enable hover animation of the button. |
|disabled|boolean|false|If true, the button will be disabled. |
|size|large', 'medium', 'small'|medium|The size of the button.|
|startIcon|React.ReactNode||Element placed before the children.|
|endIcon|React.ReactNode||Element placed after the children.|
|mobileViewButton|{icon: React.ReactNode, viewSize: string}||MobileViewButton allows you to experience reactive optimized button ui.|
|onClick|func()||onClick function|

## Used

```js
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'elpo-ui';

function App():JSX.Element {
  return (
    <Button
      theme="outlined"
      endIcon={<img src="/images/write.png" alt="icon" width={20} height={20} />}
      mobileViewButton = {{
        icon: <img src="/images/write.png" alt="icon" width={20} height={20} />,
        viewSize: '700',
      }}
    >
      ADD
    </Button>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
