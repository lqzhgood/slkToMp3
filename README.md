# slk-to-mp3

[![npm version](https://img.shields.io/npm/v/create-lqzh-app.svg?style=flat-square)](https://github.com/lqzhgood/slkToMp3)
[![npm license](https://img.shields.io/npm/l/create-lqzh-app.svg?style=flat-square)](https://github.com/lqzhgood/slkToMp3)

slk / amr to mp3 nodeJS module

decode QQ / Wechat slk to mp3

### Use

```shell
npm i slk-to-mp3
```

```js
const slkToMp3 = require('slkToMp3');

(async () => {
    await convert(inputFile, outputDir, [outName]);
})();
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
