---
title: Standard
page_title: Standard | RadSocialShare for ASP.NET AJAX Documentation
description: Standard
slug: socialshare/configuring-buttons/standard
tags: standard
published: True
position: 1
---

# Standard



These buttons are created by external scripts from the respective social network. We leave the entire rendering and functionality to them and they are, therefore,	placed inside iframes so that their scripts can freely access and modify the HTML they need. There are six sites that offer this functionality -	Facebook, Twitter, Google, LinkedIn, Yammer and Pinterest.	These buttons can only be present in the **MainButtons** collection.	Since they are created via JavaScript their markup can only be inspected with a developer tool like the IE dev toolbar or Firebug. It will not be	present in the original source of the page (right click -> view source).

## Facebook's buttons

>tip The buttons Facebook generate are not standard HTML and will often throw JavaScript errors on the page. Adding the following namespaces to the	`<html>` tag alleviates the issue somewhat:
>


````HTML
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#">
````



More information on the matter is available in the [Facebook Specifics]({%slug socialshare/troubleshooting/facebook-specifics%}) help article, in the section called **Facebook Requirements**.

To activate them you need to place a **`<telerik:RadFacebookButton />`** in the **MainButtons collection**. This allows you to not only set our **UrlToShare** property, but also to control the [other options that Facebook provides](http://developers.facebook.com/docs/reference/plugins/like/):

* **ButtonType** - determines the exact functionality the button will offer. Possible options are:

	* FacebookShare (deprecated) - creates a Share button
	
		>caution FacebookShare button has been officially deprecated by Facebook in favor of the FacebookLike button.	More information on this topic is available in the "What happened to the old Share button?" section, located in [Button options for Facebook buttons](http://developers.facebook.com/docs/reference/plugins/like/) Facebook article.
	
	
	* FacebookLike - creates a Like button
	
	* FacebookSend - creates a Send button
	
	* FacebookRecommend - creates a Recommend button

	>tip If both a **FacebookLike** and **FacebookSend** buttons are present in the collection Facebook automatically combines	them in a new, bigger button even if they are not adjacent. This is a feature from Facebook and there is no way to prevent it.
>


* **ButtonLayout** - determines the layout of the button. Possible options are:

	* Standard - displays social text to the right of the button and friends' profile photos below. Minimum width: 225 pixels.Default width: 450 pixels. Height: 35 pixels (without photos) or 80 pixels (with photos).
	
	* Icon - specific for the Share button - renders as images only
	
	* IconLink - specific for the Share button - renders as a small image and text
	
	* BoxCount - displays the total number of likes above the button. Minimum width: 55 pixels. Default width: 55 pixels. Height: 65 pixels.
	
	* ButtonCount - the default value. It displays the total number of likes to the right of the button. Minimum width: 90 pixels.Default width: 90 pixels. Height: 20 pixels

* **ShowFaces** - specifies whether to display profile photos below the button (standard layout only). True by default.

* **ColorScheme**-  the color scheme for the like button. Options are:

	* Light
	
	* Dark

* **Font** - the font to display in the button. Options are:

	* Arial
	
	* LucidaGrande
	
	* SegoeUI
	
	* Tahoma
	
	* TrebuchetMS
	
	* Verdana

* **ReferralsLabel** - a label for tracking referrals; must be less than 50 characters and can contain alphanumeric characters and some punctuation.

* **Width** - the width of the Like button

## Twitter Button

To show this button add the **`<telerik:RadTwitterButton />`** to the **MainButtons collection**. The extra option it provides is the **CounterMode** property. It can take the following values:

* Horizontal - the counter is shown next to the button

* Vertical - the counter is shown above the button

* None - there is no counter

## Google Plus One Button

To add this button you need the **`<telerik:RadGoogleButton /`>** in the **MainButtons collection**.This allows you to add the following options to the button:

* **ButtonSize** - The [button size](https://developers.google.com/+/plugins/+1button/#button-sizes) to render. This also controls the way annotations (counters) are displayed (i.e., the AnnotationType property is set to Bubble).The default value is Standard:

	* Small
	
	* Medium
	
	* Standard
	
	* Tall

* **AnnotationType** - the annotation to display next to the button:

	* None - do not render any additional annotations
	
	* Bubble - display the number of users who have +1'd the page in a graphic next to the button (or above, depending on the size)
	
	* Inline - display profile pictures of connected users who have +1'd the page and a count of users who have +1'd the page

* **Width** - if annotation is set to "inline", the width in pixels to use for the button and its [inline annotation](https://developers.google.com/+/plugins/+1button/#inline-annotation). If omitted, a button and its inline annotation use 450px.

Also examine the [Google browser support](http://googleenterprise.blogspot.com/2011/06/our-plans-to-support-modern-browsers.html), as their buttons will not work under older browsers.

## LinkedIn Share Button

To add this button you need the **`<telerik:RadLinkedInButton />`** in the **MainButtons collection**. This allows you to add the following options to the button:

* **CounterMode** - determines where the counter baloon will display according to the button:

	* None - do not render the counter
	
	* Horizontal - the counter is shown next to the button
	
	* Vertical - the coutner is shown above the button

* **ShowZeroCount** - determines whether the counter will show a zero if there are no shares for this URL:

	* true - there will be a counter that will display a zero
	
	* false - there will be no counter

## Yammer buttons

Yammer buttons are available since **Q1 2013**.To activate them you need to add **`<telerik:RadYammerButton />`** in the **MainButtons collection**. This allows you to add the following options to the button:

* **ButtonType** - determines the exact functionality the button will offer. Possible options are:

	* Like - creates a Like button
	
	* Follow - creates a Follow button

* **YammerNetwork** - Your network permalink

## Pinterest buttons

Pinterest buttons are available since **Q1 2013 SP1**.To activate them you need to add **`<telerik:RadPinterestButton />`** in the **MainButtons collection**. This allows you to add the following options to the button:

* **ButtonType** - determines the exact functionality the button will offer. Possible options are:

	* PinIt - creates a Pin button for a particular image
	
	* Follow - creates a Follow button
	
	* PinPageImage - This is the popular Pinterest Pin it bookmarklet. It creates a Pin button that lets you grabimages and videos from the current site and add them to your Pinterest boards. It does not require anyadditional properties to be set. If the pinnable images have an alt attribute set, it is used as a TitleToShare.

* **CounterMode** (PinIt specific property) - determines where the counter balloon will display according to the button:

	* Horizontal - the counter is shown next to the button
	
	* Vertical - the coutner is shown above the button
	
	* None - there is no counter

* **TitleToShare** (PinIt specific property) - Sets the title of the pinned image.The default value is the url of the image.

* **UrlToShare**

	* PinIt button - the URL of the image sent to the Pinterest network. Does not accept a web page URL.

		>tip The URL given to Pinterest must point to an **image** and not to a page like	all other networks.


	* Follow button - the URL of the Pinterest account which is to be followed (e.g., `http://pinterest.com/USERNAME`).

		>tip The proper visualization of the follow button requires the omission of the 'www' from the URL of	the Pinterest account.



* **FromUrl** (PinIt specific property) - sets a from link (the URL from which the image was pinned) in the Pin.

# See Also

 * [Controlling the content that will be in the preview of the post via the OpenGraph protocol](http://ogp.me/)

 * [Button options for Facebook buttons](http://developers.facebook.com/docs/reference/plugins/like/)

 * [Configuring Google buttons](https://developers.google.com/+/plugins/+1button/#configuration)

 * [Google browser support](http://googleenterprise.blogspot.com/2011/06/our-plans-to-support-modern-browsers.html)
