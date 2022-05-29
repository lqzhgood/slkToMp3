# slkToMp3

slk / amr to mp3 nodeJS module

decode QQ / Wechat slk to mp3

### Use

```js
const slkToMp3 = require('slkToMp3');

await convert(inputFile, outputDir, [outName]);
```

`outName` is optional, default is `input File Name`

### return

```
if support
    return ${outputDir}/${inputName}.mp3
else
    return null
```

### Thank you

base in this repo

https://github.com/kn007/silk-v3-decoder

https://github.com/Binaryify/amrToMp3
