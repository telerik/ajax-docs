---
title: Internet Explorer does not display embedded icons
description: IE 11 may not load the font icons on the page. See how to resolve this issue.
type: troubleshooting
page_title: IE11 does not render the font icons
slug: button-IE-does-not-render-the-embedded-icons
position: 
tags: 
ticketid: 1147040
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
IE has a few settings which might prevent the font icons loading on the page. If some of them are enabled, this may break the appearance of RadButton, RadRadioButtonList, RadEditor or another Telerik controls. Check out the instructions below which will help you troubleshoot and solve the problem.

## Solution
The problem can be due to one of the following configuration settings:

* The [Microsoft Untrusted font blocking security policy](https://docs.microsoft.com/en-us/windows/threat-protection/block-untrusted-fonts-in-enterprise) that blocks all fonts (not only the ones used in Telerik UI for ASP.NET AJAX, KendoUI) outside of %windir%/fonts from loading. You can find more information about the problem in [Font Icons are not loaded in IE11](https://www.telerik.com/forums/font-icons-are-not-loaded-in-ie11-edge-running-on-windows-10) (Telerik Forum) and [IE 11: error CSS3111 in my own code, and google.com/fonts doesn't render any fonts](https://stackoverflow.com/questions/33023461/ie-11-error-css3111-in-my-own-code-and-google-com-fonts-doesnt-render-any-fon/34070604#answer-34106581) (StackOverflow). 
This problem should be fixed in the latest Microsoft patches as per the following MSDN blog post: [Dropping the “Untrusted Font Blocking” setting](https://blogs.technet.microsoft.com/secguide/2017/06/15/dropping-the-untrusted-font-blocking-setting/).
* The "Allow font download policy" is disabled
* The "Use software rendering instead of GPU rendering" setting is disabled - Go to Internet Options -> Advanced -> Accelerated graphics -> Check  "Use software rendering instead of GPU rendering"
* The security options of IE are set to High

## See Also
* [IE 11 - RadButton not displaying embedded icons](https://www.telerik.com/forums/ie-11---radbutton-not-displaying-embedded-icons)
* [Font icons are not loaded in IE11 / Edge running on Windows 10](https://www.telerik.com/forums/font-icons-are-not-loaded-in-ie11-edge-running-on-windows-10)

