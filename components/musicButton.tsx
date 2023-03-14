import {Soundbutton} from "@/components/soundbutton";
import music from '../public/mixkit-hip-latin-jazz-groove-112.mp3'

export function MusicButton() {
    return <Soundbutton
        title={'music button'}
        audioLocations={[music]}
        spammy={false}
        clickStop={true}
        volumeMultiplier={0.5}
    />
}