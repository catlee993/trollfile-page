import React, {useEffect, useState} from "react";
import {Button, Flex} from "@chakra-ui/react";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

interface SoundButtonProps {
    title: string;
    audioLocations: string[];
    placement?: string | undefined;
    spammy: boolean
    clickStop: boolean
    volumeMultiplier?: number
}

export function Soundbutton({title, audioLocations, spammy, clickStop, placement, volumeMultiplier}: SoundButtonProps) {
    const [audios, setAudios] = useState<HTMLAudioElement[] | null>(null)
    const [counter, setCounter] = useState(0)
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        let importAudios = [] as HTMLAudioElement[];
        for (let a of audioLocations) {
            const newAudio = new Audio(a)
            if (volumeMultiplier) {
                newAudio.volume = newAudio.volume * volumeMultiplier
            }
            importAudios.push(newAudio)
        }
        setAudios(importAudios)
    }, [audioLocations])

    return (
        <Flex placeContent={placement}>
            <Button title={title} onClick={() => {
                if (audios) {
                    setCounter(c => ++c >= audios.length ? 0 : c++)
                    if(spammy){
                        audios[counter]?.load()
                    }
                    if(!clickStop){
                        audios[counter]?.play()
                        return
                    }
                    if(playing){
                        audios[counter]?.pause()
                        setPlaying(false)
                        return
                    }
                    audios[counter]?.play()
                    setPlaying(true)
                }
            }}>{title} {clickStop ? playing ? '||' : '▶️' : ''}</Button>
        </Flex>
    )
}