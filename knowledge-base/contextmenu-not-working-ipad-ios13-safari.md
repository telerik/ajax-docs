---
title: Context menus do not work on iPads after latest iOS update 13
description: In iPad with iOS 13 update, the context menu is not opening in Safari.
type: troubleshooting
page_title: Context menus not working in iPads with iOS 13
slug: contextmenu-not-working-ipad-ios13-safari
position: 
tags: 
ticketid: 1434225
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadContextMenu for ASP.NET AJAX</td>
		</tr>
		<tr>
			<td>Operating System</td>
			<td>iOS 13+</td>
		</tr>
		<tr>
			<td>Browser</td>
			<td>Safari</td>
		</tr>
	</tbody>
</table>


## Description

After the recent update to iOS 13, iPads are not able to Tap & Hold to access the right click context menu, for example the AppointmentContextMenu on the RadScheduler. Also, on the server, Request.Browser.IsMobileDevice call that is part of ASP.NET now returns false for iPad devices.

The issue is replicated only in Safari browsers on iPad devices with iOS 13.

The following simple HTML also replicates the issues where the text selection is triggered before the contextmenu event: 

````HTML
<div id="test" style="height:100px; background-color:green; border:1px solid red"></div>
<script>
    $(document).ready(function () {
        $("#test").on("contextmenu", function () {
            alert(3);
        })
    });
</script>
````


## Cause

This is a common issue and is related to the experimental PinterEvents feature of iOS:

* [https://github.com/Leaflet/Leaflet/issues/6817](https://github.com/Leaflet/Leaflet/issues/6817)
* [https://bugs.webkit.org/show_bug.cgi?id=202143](https://bugs.webkit.org/show_bug.cgi?id=202143)

The reason behind this behavior is the intention of Apple to promote iPad tablets as desktop/stationary devices. That means the "Request Desktop Site" is enabled by default for all websites in iPads with iOS 13+, which will send a UserAgent string the same as on a Mac machine. 

* [https://stackoverflow.com/questions/58019463/how-to-detect-device-name-in-safari-on-ios-13-while-it-doesnt-show-the-correct](https://stackoverflow.com/questions/58019463/how-to-detect-device-name-in-safari-on-ios-13-while-it-doesnt-show-the-correct)


## Suggested Workarounds

The good thing is that at the moment of writing, there are no MAC machines with built-in touch screens, so the _navigator.maxTouchPoints_. This means placing the following script on the page will solve the issue:

````JavaScript
// iPad with enabled "Request Desktop Site" 
if ($telerik.isTouchDevice == false && navigator.maxTouchPoints > 0 && Telerik.Web.Platform.mac) {
    $telerik.isTouchDevice = true;
    Telerik.Web.Platform.ipad = true;
    Telerik.Web.Platform.mac = false;
}
````

* [https://forums.developer.apple.com/thread/119186](https://forums.developer.apple.com/thread/119186)
* [https://github.com/serbanghita/Mobile-Detect/issues/795](https://github.com/serbanghita/Mobile-Detect/issues/795)
* because there are no macbooks that are touchscreen yet - [https://github.com/juliangruber/is-mobile/issues/17#issuecomment-541496772](https://github.com/juliangruber/is-mobile/issues/17#issuecomment-541496772)
