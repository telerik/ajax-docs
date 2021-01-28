---
title: Notification Audio Is Not Played In Mobile Devices
page_title: Notification Audio Is Not Played In Mobile Devices - RadNotification
description: Check our Web Forms article about Notification Audio Is Not Played In Mobile Devices.
slug: notification/troubleshooting/notification-audio-is-not-played-in-mobile-devices
tags: notification,audio,is,not,played,in,mobile,devices
published: True
position: 1
---

# Notification Audio Is Not Played In Mobile Devices



This help article describes a browser limitation that cause the **RadNotification** to not play audio in mobile devices. You can also read how to avoid it.


Most mobile browsers require a user action in order to play audio files. **RadNotification** is often shown via JavaScript alone and thus, its [ShowSound]({%slug notification/functionality/play-sound-on-show%}) may not be played unless the developer takes the needed actions that are described in this help article.

You cannot play audio files in most mobile browsers from events like load or DomReady that do not interact with a user action.This is a browser limitation that can also be reproduced on a page that contains no Telerik UI controls (**Example 1**).

**Example 1**: Audio in browsers under mobile devices will not be played if triggered by the body's load event.

````ASP.NET
<body onload="playAudio();">
	<script type="text/javascript">
		function playAudio() {
			var audio = document.getElementById("audio");
			audio.play();
		}
	</script>
	<audio id="audio" src="info.wav"></audio>
</body>
````



**RadNotification** exposes a public client-side method (**userInitSound()**) that lets you initializethe audio when there is a user interaction. You can add an event listener to the most appropriate element/control on your web page,usually the document itself, so that when the user makes an interaction with it, you can kick-start the audio (**Example 2**). You can also ensure that the sound is playable through the **verifySound()** method.

>note **RadNotification** doesn't attach an event handler to the document that kick-starts that audio when a user action is performedout of the box because such behavior contradicts with the one accepted in mobile devices.


>warning Handling the corresponding event and calling the **userInitSound()** client-side method of the **RadNotification** would make sure that the sounds are available until the user navigates away from the currently loaded page or the notification control is disposed with AJAX.



**Example 2**: Enable the **RadNotification** audio in mobile devices by calling the **userInitSound()** method after a user action.

````ASP.NET
<script type="text/javascript">
	function pageLoad() {
		//Attach to the document touchstart event and initiate the notification audio
		$telerik.$(document).on("touchstart", initSound);
	}
	function initSound() {
		var notification = $find("<%=RadNotification1.ClientID%>");
		//If notification audio is not available initiate it
		if (!notification.verifySound()) {
			notification.userInitSound();
		}
		//Detach the initSound event listener
		$telerik.$(document).off("touchstart", initSound);
	}
</script>
<telerik:RadNotification RenderMode="Lightweight" ID="RadNotification1" runat="server" ShowInterval="2000" AutoCloseDelay="1000" Text="Some Notification" ShowSound="warning">
</telerik:RadNotification>
````



# See Also

 * [Play Sound on Show]({%slug notification/functionality/play-sound-on-show%})

 * [Overcoming iOS HTML5 audio limitations](http://www.ibm.com/developerworks/library/wa-ioshtml5/)

 * [Safari HTML5 Audio and Video Guide](https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html)

 * [Known Issues]({%slug notification/troubleshooting/known-issues%})
