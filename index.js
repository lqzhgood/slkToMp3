const fs = require('fs');
const path = require('path');
const amrToMp3 = require('amrToMp3');
const exec = require('child_process').execSync;
const ffmpegPath = require('ffmpeg-static');

function readHead(f) {
    const buf = Buffer.alloc(10);
    const fd = fs.openSync(f, 'r');
    fs.readSync(fd, buf, 0, 10, 0);
    fs.closeSync(fd);
    return buf.toString().toUpperCase();
}

function silkToMp3(f, outDir, outName) {
    const slikPath = path.join(__dirname, './lib/silk2mp3-windows/silk_v3_decoder.exe');
    const oPcm = path.join(outDir, `${outName}.pcm`);
    exec(`"${slikPath}" "${f}" "${oPcm}"`);

    const oMp3 = path.join(outDir, `${outName}.mp3`);

    // sox -r 24000 -e signed -b 16 -c 1 1.raw 1_sox.mp3
    // 音质好像差一点点
    exec(`"${ffmpegPath}" -loglevel quiet -y -f s16le -ar 24000 -ac 1 -i "${oPcm}" -ar 24000 -b:a 320k "${oMp3}"`);

    fs.unlinkSync(oPcm);
    return oMp3;
}

async function convert(f, outDir, outName) {
    const h = readHead(f);

    if (!outName) outName = path.parse(f).name;

    if (h.includes('AMR')) {
        await amrToMp3(f, outDir, outName);
    } else if (h.includes('SILK')) {
        silkToMp3(f, outDir, outName);
    } else {
        // console.error('⚠️', '未知的语音类型，无法转换', f);
        return null;
    }
    return path.join(outDir, `${outName}.mp3`);
}
module.exports = convert;
