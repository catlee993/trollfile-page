import {SoundButton} from "@/components/soundButton";
import music from '../public/mixkit-hip-latin-jazz-groove-112.mp3'

export function MusicButton() {
    return <SoundButton
        title={'music button'}
        audioLocations={[music]}
        spammy={false}
        clickStop={true}
        volumeMultiplier={0.5}
    />
}