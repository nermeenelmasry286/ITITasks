import VolumeControl from './VolumeControl.js';

class Speaker extends VolumeControl {
    constructor() {
        super();
        this.volume = 10;
    }

    increaseVolume() {
        this.volume += 1;
        console.log(`Speaker volume increased to ${this.volume}`);
    }

    decreaseVolume() {
        this.volume -= 1;
        console.log(`Speaker volume decreased to ${this.volume}`);
    }

    
}

export default Speaker;
