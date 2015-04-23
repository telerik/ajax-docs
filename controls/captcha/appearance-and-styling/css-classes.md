---
title: CSS Classes
page_title: CSS Classes | RadCaptcha for ASP.NET AJAX Documentation
description: CSS Classes
slug: captcha/appearance-and-styling/css-classes
tags: css,classes
published: True
position: 0
---

# CSS Classes



## Important CSS Classes

RadCaptcha provides a set of built-in CSS classes that make the styling of the control easier. Some of the class selectors are always applied to the respective HTML elements, while other get applied only in certain scenarios. The more important selectors are listed below together with small examples demonstrating their usage.

### .RadCaptcha

Each RadCaptcha instance is rendered with this class applied to the wrapping HTML element. It comes useful when the user wants to provide a global style for all RadCaptcha instances. The following code will make the background color light gray, place a dotted border around the control, give padding of 20 pixels, change the font-family to “Serif” and set width of 400 pixels.

````ASPNET
		<style type="text/css">
			.RadCaptcha
			{
				width: 400px;
				background-color: #F0F0F0;
				padding: 20px;
				border: 1px dotted #606060;
				font-family: Serif;
			}
		</style>
````



### .rcRefreshImage

This class is applied to the Link Button that refreshes the Captcha Image. The RadCaptcha.EnableRefreshImage property should be set to true for the LinkButton to be rendered.

### .rcCaptchaAudioLink

The *.rcCaptchaAudioLink* is used to style the Link Button for playing the audio code. The user must enable this functionality for the Audio Button to be shown, by setting the RadCaptcha’s **CaptchaImage.EnableCaptchaAudio** property to true. The following CSS code removes the underlining of the both Link buttons (the “Refresh Image” and the “Play Audio” buttons), changes the fore color to Black, and gives a padding of 10 pixels. It also changes the color of the buttons to Red, when hovered.

````ASPNET
		<style type="text/css">
			.rcRefreshImage, 
			.rcCaptchaAudioLink
			{
				text-decoration: none;
				padding: 10px;
				color: Black;
				width: 180px;
			}
			
			.rcRefreshImage:hover, 
			.rcCaptchaAudioLink:hover
			{
				color: Red;
			}
		</style>
````



### .rcValid and .rcInvalid

These two classes are applied to the RadCaptcha’s wrapping element, when validation occurs and correct or incorrect code has been entered, respectively. With the code below, the user can show green border on the Captcha, when the entered code is valid, or red one when invalid.

````ASPNET
		<style type="text/css">
			.rcInvalid
			{
				border: 2px dotted Red;
			}
			.rcValid
			{
				border: 2px dotted Green;
			}
		</style>
````



### .rcFocusTxt

This class gets applied to the Captcha’s textbox for entering the code, when the textbox is focused. With the following code the background color is changed, as well as the border and the height of the input.

````ASPNET
		<style type="text/css">
			.rcFocusTxt
			{
				background: #FFFF99;
				border: 1px solid #C0C0C0;
				height:20px;
			}
		</style>
````



All of the above examples will apply the presented CSS code to all the instances of the RadCaptcha control on the page. In case you want to style only a specific RadCaptcha control, then the control should be placed inside another element and a CSS class applied to the element. So the following CSS will be applied only to “RadCaptcha1”.

````ASPNET
		<style type="text/css">
			.customClass .rcInvalid
			{
				border: 2px dotted Red;
			}
			.customClass .rcValid
			{
				border: 2px dotted Green;
			}
		</style>
	
		<div class="customClass">
			<telerik:RadCaptcha ID="RadCaptcha1" runat="server" ErrorMessage="Wrong Code">
			</telerik:RadCaptcha>
		</div>
````


