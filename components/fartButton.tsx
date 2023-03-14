import {Soundbutton} from "@/components/soundbutton";
import fartNoise from '../public/fart-with-reverb.mp3'

export function FartButton() {
    return <Soundbutton
        title={'fart button'}
        audioLocations={[fartNoise]}
        placement={'center'}
        spammy={true}
        clickStop={false}
    />
}