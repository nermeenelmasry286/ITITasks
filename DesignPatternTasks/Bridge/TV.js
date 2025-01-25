import VolumeControl from './VolumeControl.js';

class TV extends VolumeControl {
    constructor() {
        super();
        this.volume = 10;
    }

    increaseVolume() {
        this.volume += 1;
        console.log(`TV volume increased to ${this.volume}`);
    }

    decreaseVolume() {
        this.volume -= 1;
        console.log(`TV volume decreased to ${this.volume}`);
    }

    mute() {
        this.volume = 0;
        console.log("TV is muted");
    }
}

export default TV;
