---
title: Localization
page_title: Localization | UI for ASP.NET AJAX Documentation
description: Localization
slug: captcha/accessibility-and-internationalization/localization
tags: localization
published: True
position: 2
---

# Localization



## 

The __RadCaptcha__ provides a mechanism for quick and easy localization based on the native ASP.NET localization. The ErrorMessage, the Label telling the user to enter the code and the button labels are obtained from the resource files located in the App_LocalReources directory, so that the language of the __RadCaptcha__ is automatically switched to the culture and UI culture of the Web page.

>note You can inspect these files by navigating to your Telerik UI for ASP.NET AJAX installation folder, then under __Live Demos__ locate the __Captcha\Examples\Localization__ directory as it also contains example audio codes.
>


Each of the localization strings can also be modified at runtime using the respective server-side properties: __ErrorMessage, CaptchaTextBoxLabel, CaptchaAudioLinkButtonText, and CaptchaLinkButtonText__. This eliminates the need to create a new localization file to change a single string. For example:

>tabbedCode

````C#
	        RadCaptcha1.ErrorMessage = "Incorrect code";
	        RadCaptcha1.CaptchaTextBoxLabel = "Enter the code from the image";
	        RadCaptcha1.CaptchaAudioLinkButtonText = "Play the audio code";
	        RadCaptcha1.CaptchaLinkButtonText = "Generate a new image";
````
````VB.NET
	        RadCaptcha1.ErrorMessage = "Incorrect code"
	        RadCaptcha1.CaptchaTextBoxLabel = "Enter the code from the image"
	        RadCaptcha1.CaptchaAudioLinkButtonText = "Play the audio code"
	        RadCaptcha1.CaptchaLinkButtonText = "Generate a new image"
	    #End Region
	
	End Class


>end
