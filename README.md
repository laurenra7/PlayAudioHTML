## PlayAudioHTML
Display play/pause buttons and play WAV or MP3 audio from a file stored 
in System.FileDocument or a specialization of it.

Different browsers play different media types. WAV, MP3, and MP4 containers 
are widely supported (PCM, MP3, and AAC formats, respectively). Other 
containers like ADTS, Ogg, WebM, and FLAC may be supported (AAC, Vorbis, 
Opus, and FLAC formats).

See [HTML5 Audio - Supported audio coding formats](https://en.wikipedia.org/wiki/HTML5_audio#Supported_audio_coding_formats) 
for browser support.

## Features
This uses the HTML5 
<[audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)> 
element and displays time elapsed / total time and a moving playhead with 
controls for play/pause, etc.

### Controls 
- play
- pause
- mute
- volume
- scrubbable playhead position
- download

### Display
- time elapsed
- total time
- moving playhead shows current position  

## Usage
1. Add a Data View for a System.FileDocument entity, or a specialization 
of it, to a page.
2. In the Data View, add a Play Audio Widget.
3. In the properties of the widget, under Data Source, set "FileID of 
FileDocument" to the FileID attribute (type AutoNumber) of the FileDocument.

The widget will display on the page and allow you to play the audio file.

## Demo project
[link to sandbox]

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution
[specify contribute]
