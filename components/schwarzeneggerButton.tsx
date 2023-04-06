import {SoundButton} from "@/components/soundButton";
import schwarzenegger1 from "../public/schwarzenegger1.mp3"
import schwarzenegger2 from "../public/schwarzenegger2.mp3"
import schwarzenegger3 from "../public/schwarzenegger3.mp3"
import schwarzenegger4 from "../public/schwarzenegger4.mp3"
import schwarzenegger5 from "../public/schwarzenegger5.mp3"
import schwarzenegger6 from "../public/schwarzenegger6.mp3"
import schwarzenegger7 from "../public/schwarzenegger7.mp3"
import schwarzenegger8 from "../public/schwarzenegger8.mp3"
import schwarzenegger9 from "../public/schwarzenegger9.mp3"

export function SchwarzeneggerButton() {
    const locations: string[] = [
        schwarzenegger1,
        schwarzenegger2,
        schwarzenegger3,
        schwarzenegger4,
        schwarzenegger5,
        schwarzenegger6,
        schwarzenegger7,
        schwarzenegger8,
        schwarzenegger9,
    ]
    return <SoundButton
        title={'schwarzenegger button'}
        audioLocations={locations}
        spammy={false}
        clickStop={false}
    />
}