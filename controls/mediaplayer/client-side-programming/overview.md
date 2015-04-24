---
title: Overview
page_title: Client-side Programming Overview | RadMediaPlayer for ASP.NET AJAX Documentation
description: Overview
slug: mediaplayer/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



## Client-Side Object

The functionality provided by RadMediaPlayer is strongly extablished on its client-side capabilities. Here is a list with the basic properties and methods exposed by its client-side object.


|  **Methods/properties**  |  **Description**  |
| ------ | ------ |
| **enterFullScreen** |Enters Full Screen mode.|
| **exitFullScreen** |Exits Full Screen mode.|
| **play** |Plays the media.|
| **seekTo** |Proceeds to given time frame.|
| **pause** |Pauses playing the media.|
| **mute** |Mutes the media.|
| **unmute** |Unmutes the media.|
| **toolbar** |Provides a reference to the toolbar object.|
| **titlebar** |Provides a reference to the titlebar object.|
| **stop** |Stops playing the media.|
| **isEnded** |Determines whether the media has ended.|
| **isPaused** |Determines whether the media is paused.|
| **isMuted** |Determines whether the media is muted.|
| **isPlaying** |Determines whether the media is playing.|
| **get_currentTime()** |Gets the exact time which the player is currently on.|
| **get_fsActive(), set_fsActive()** |Controls the Full Screen mode of the media.|
| **get_hdActive(), set_hdActive()** |Controls the HD quality status of the media.|
| **get_options(), set_options()** |Controls a collection of the basic options for the player.|
| **get_source()** |Controls the source of the player.|
| **get_toolbarDocked(), set_toolbarDocked()** |Controls the toolbar's position.|
| **get_volume(), set_volume()** |Controls the volume of the media.|

## Client-Side Events


|  **Event name**  |  **Description**  |
| ------ | ------ |
| **OnClientEnded** |This event is fired after the media finishes playing.|
| **OnClientPaused** |This event is fired after the media pauses.|
| **OnClientPlay** |This event is fired after the media begins playing.|
| **OnClientReady** |This event is fired when any loading is over and the player is ready to start playing the media.|
| **OnClientSeekStart** |This event is fired when the user selects a new play time.|
| **OnClientVolumeChanged** |This event is fired upon changing the volume level.|
