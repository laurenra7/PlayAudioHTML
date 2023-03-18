import { Component, ReactNode, Fragment, createElement } from "react";

import { PlayAudioHTMLContainerProps } from "../typings/PlayAudioHTMLProps";
import {PlayAudio} from "./components/PlayAudio";

import "./ui/PlayAudioHTML.css";

export default class PlayAudioHTML extends Component<PlayAudioHTMLContainerProps> {
    render(): ReactNode {
        const fileId = this.props.fileId.displayValue;
        return <PlayAudio
                fileId={fileId}
                style={this.props.style}
                className={this.props.class}
                tabIndex={this.props.tabIndex}
                />
    }
}
