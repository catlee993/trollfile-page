import {SoundButton} from "@/components/soundButton";
import fartNoise from '../public/fart-with-reverb.mp3'

export function FartButton() {
    return <SoundButton
        title={'fart button'}
        audioLocations={[fartNoise]}
        placement={'center'}
        spammy={true}
        clickStop={false}
    />
}