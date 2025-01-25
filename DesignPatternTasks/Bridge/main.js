import TV from './TV.js';
import Speaker from './Speaker.js';
import { increaseVolume, decreaseVolume, muteDevice } from './VolumeBridge.js';

const tv = new TV();
const speaker = new Speaker();

increaseVolume(tv); 
decreaseVolume(tv); 
muteDevice(tv);     

increaseVolume(speaker);
decreaseVolume(speaker); 
muteDevice(speaker);     

