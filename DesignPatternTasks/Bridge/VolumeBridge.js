function increaseVolume(device) {
    device.increaseVolume();
}

function decreaseVolume(device) {
    device.decreaseVolume();
}

function muteDevice(device) {
    if (typeof device.mute === 'function') {
        device.mute();
    } else {
        console.log("Mute function is not supported by this device");
    }
}

export { increaseVolume, decreaseVolume, muteDevice };
