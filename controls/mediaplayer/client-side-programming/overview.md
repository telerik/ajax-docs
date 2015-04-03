---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: mediaplayer/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



## Client-Side Object

The functionality provided by RadMediaPlayer is strongly extablished on its client-side capabilities. Here is a list with the basic properties and methods exposed by its client-side object.


|  __Methods/properties__  |  __Description__  |
| ------ | ------ |
| __enterFullScreen__ |Enters Full Screen mode.|
| __exitFullScreen__ |Exits Full Screen mode.|
| __play__ |Plays the media.|
| __seekTo__ |Proceeds to given time frame.|
| __pause__ |Pauses playing the media.|
| __mute__ |Mutes the media.|
| __unmute__ |Unmutes the media.|
| __toolbar__ |Provides a reference to the toolbar object.|
| __titlebar__ |Provides a reference to the titlebar object.|
| __stop__ |Stops playing the media.|
| __isEnded__ |Determines whether the media has ended.|
| __isPaused__ |Determines whether the media is paused.|
| __isMuted__ |Determines whether the media is muted.|
| __isPlaying__ |Determines whether the media is playing.|
| __get_currentTime()__ |Gets the exact time which the player is currently on.|
| __get_fsActive(), set_fsActive()__ |Controls the Full Screen mode of the media.|
| __get_hdActive(), set_hdActive()__ |Controls the HD quality status of the media.|
| __get_options(), set_options()__ |Controls a collection of the basic options for the player.|
| __get_source()__ |Controls the source of the player.|
| __get_toolbarDocked(), set_toolbarDocked()__ |Controls the toolbar's position.|
| __get_volume(), set_volume()__ |Controls the volume of the media.|

## Client-Side Events


|  __Event name__  |  __Description__  |
| ------ | ------ |
| __OnClientEnded__ |This event is fired after the media finishes playing.|
| __OnClientPaused__ |This event is fired after the media pauses.|
| __OnClientPlay__ |This event is fired after the media begins playing.|
| __OnClientReady__ |This event is fired when any loading is over and the player is ready to start playing the media.|
| __OnClientSeekStart__ |This event is fired when the user selects a new play time.|
| __OnClientVolumeChanged__ |This event is fired upon changing the volume level.|
