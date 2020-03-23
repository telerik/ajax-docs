---
title: Telerik.Web.UI.RadMediaPlayer
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadMediaPlayer
slug: Telerik.Web.UI.RadMediaPlayer
---

# Telerik.Web.UI.RadMediaPlayer  

## Inheritance Hierarchy

* *[Telerik.Web.UI.RadMediaPlayer]({%slug Telerik.Web.UI.RadMediaPlayer%})*


## Methods

###  exitFullScreen

Exits Full Screen mode.

#### Parameters

#### Returns

`None` 

### get_currentTime

Gets the exact time which the player is currently on.

#### Parameters

#### Returns

`None` 

### get_fsActive

Controls the Full Screen mode of the media.

#### Parameters

#### Returns

`None` 

### get_hdActive

Controls the HD quality status of the media.

#### Parameters

#### Returns

`None` 

### get_options

Controls a collection of the basic options for the player.

#### Parameters

#### Returns

`None` 

### get_source

Controls the source of the player.

#### Parameters

#### Returns

`None` 

### get_toolbarDocked

Controls the toolbar's position.

#### Parameters

#### Returns

`None` 

### get_volume

Controls the volume of the media.

#### Parameters

#### Returns

`None` 

### isEnded

Determines whether the media has ended.

#### Parameters

#### Returns

`None` 

### isMuted

Determines whether the media is muted.

#### Parameters

#### Returns

`None` 

### isPaused

Determines whether the media is paused.

#### Parameters

#### Returns

`None` 

### isPlaying

Determines whether the media is playing.

#### Parameters

#### Returns

`None` 

### mute

Mutes the media.

#### Parameters

#### Returns

`None` 

### pause

Pauses playing the media.

#### Parameters

#### Returns

`None` 

### play

Plays the media.

#### Parameters

#### Returns

`None` 

### seekTo

Proceeds to given time frame.

#### Parameters

#### Returns

`None` 

### stop

Stops playing the media.

#### Parameters

#### Returns

`None` 

### titlebar

Provides a reference to the titlebar object.

#### Parameters

#### Returns

`None` 

### toolbar

Provides a reference to the toolbar object.

#### Parameters

#### Returns

`None` 

### unmute

Unmutes the media.

#### Parameters

#### Returns

`None` 


## Events

### Play

This event is fired after the media begins playing.

#### Event Data

##### sender `Telerik.Web.UI.RadMediaPlayer`

The RadMediaPlayer instance that fired the event.

##### args `Sys.EventArgs`

Empty event argument.

### Ended

This event is fired after the media finishes playing

#### Event Data

##### sender `Telerik.Web.UI.RadMediaPlayer`

The RadMediaPlayer instance that fired the event.

##### args `Sys.EventArgs`

Empty event argument.

### Paused

This event is fired after the media pauses.

#### Event Data

##### sender `Telerik.Web.UI.RadMediaPlayer`

The RadMediaPlayer instance that fired the event.

##### args `Sys.EventArgs`

Empty event argument.

### VolumeChanged

This event is fired upon changing the volume level.

#### Event Data

##### sender `Telerik.Web.UI.RadMediaPlayer`

The RadMediaPlayer instance that fired the event.

##### args `Telerik.Web.UI.MediaPlayerVolumeChangedEventArgs`

The event arguments.

### Ready

This event is fired when any loading is over and the player is ready to start playing the media.

#### Event Data

##### sender `Telerik.Web.UI.RadMediaPlayer`

The RadMediaPlayer instance that fired the event.

##### args `Sys.EventArgs`

Empty event argument.

### SeekStart

This event is fired when the user selects a new play time.

#### Event Data

##### sender `Telerik.Web.UI.RadMediaPlayer`

The RadMediaPlayer instance that fired the event.

##### args `Telerik.Web.UI.SliderCancelEventArgs`

The event arguments.


