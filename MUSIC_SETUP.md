# Music Setup Guide

## Directory Structure

Create a `music` folder in the root directory (`c:\Users\USER\Desktop\Segun\music\`) with the following audio files:

```
music/
├── intro-background.mp3      # Background music for the intro slideshow
├── selection-background.mp3  # Background music for gallery browsing
├── track1.mp3               # Music for images 1, 11, 21, 31, etc.
├── track2.mp3               # Music for images 2, 12, 22, 32, etc.
├── track3.mp3               # Music for images 3, 13, 23, 33, etc.
├── track4.mp3               # Music for images 4, 14, 24, 34, etc.
├── track5.mp3               # Music for images 5, 15, 25, 35, etc.
├── track6.mp3               # Music for images 6, 16, 26, 36, etc.
├── track7.mp3               # Music for images 7, 17, 27, 37, etc.
├── track8.mp3               # Music for images 8, 18, 28, 38, etc.
├── track9.mp3               # Music for images 9, 19, 29, 39, etc.
└── track10.mp3              # Music for images 10, 20, 30, 40, etc.
```

## Music Recommendations

Each track should match the person or mood in the corresponding image:
- **Track 1-5**: Can be used for images with different individuals
- **Track 6-10**: Alternative music for variety

## Features Implemented

✅ **Favicon** - Added `img/favicon.png` reference to all pages
✅ **Logo** - Added `img/logo.png` to intro, gallery, and selected pages
✅ **Link Preview** - Using `img/0O5A6563.JPG` as the Open Graph image
✅ **Intro Music** - Plays background music during the intro slideshow
✅ **Gallery Music** - Plays background music while browsing the gallery
✅ **Image-Specific Music** - Plays unique music when viewing individual images
✅ **Music Toggle** - Added music control button (🔊/🔇) in bottom-right corner

## How It Works

1. **Intro Page**: Displays logo at top and plays intro background music
2. **Gallery Page**: Shows logo in header and plays gallery background music
3. **Image View**: When clicking an image, plays the music associated with that specific person
4. **Music Control**: Users can toggle music on/off with the button in the bottom-right corner
5. **Link Sharing**: When sharing the URL, it will display `0O5A6563.JPG` as the preview image

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Audio autoplay may be limited by browser policies
- Users can enable audio with the music toggle button

