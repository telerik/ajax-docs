---
title: Pinterest Specifics
page_title: Pinterest Specifics - RadSocialShare
description: Check our Web Forms article about Pinterest Specifics.
slug: socialshare/troubleshooting/pinterest-specifics
tags: pinterest,specifics
published: True
position: 5
---

# Pinterest Specifics



## Pinterest Requirements


The proper functionality of the Pinterests standard buttons requires the following properties to be set:

For a **PinIt** button:

* UrlToShare is required.

* TitleToShare is optional (default values is the UrlToShare).

* FromUrl is optional (default value is the Url from which the image is pinned).

* CounterMode is optional (default value is none.)|

For a **Follow** button:
* UrlToShare is required. Its format must be **http://pinterest.com/USERNAME** 

	>caution The proper visualization of the follow button requires the omission of the 'www' from the URL of the Pinterest account


For a **PinPageImage** button:

* No fields required.

In order to pin an image, it must be in JPG, PNG or GIF format and its dimensions must be at least 201x201 px. More information on pinning images is available in [What can I pin](https://help.pinterest.com/entries/22980352-What-can-I-pin-) help article and [How to Beat the Image Bias of Pinterest: Getting Pinned, Blocking Pins & Image Optimization Tips](http://blog.kissmetrics.com/image-bias-of-pinterest/) blog post.

## Known issues

Pinterest Standard Buttons are created via external scripts from their network and therefore we cannot fully guarantee their correct functionality.

### Visual Appearance Issues

* The 'Cancel' button of the PinPageImage looks distorted under IE7.

* The horizontal counter bubble is not shown when the count equals to 0.

* The "+" sign, when present, is displayed below the horizontal bubble counter under Opera.

### JavaScript Errors

* Standard button PinPageImage expects to have at least one image on the page. If no images are present on the page, the Pinterest’s javascript file throws an error in the console (e.g. *NotFoundError:	Node was not found*).

* When a Pinterest user profile is opened, a JavaScript error is thrown in different browsers (e.g. *FireFox: TypeError: boardContainer[0] is undefined;	Chrome: Uncaught TypeError: Cannot read property 'offsetTop' of undefined;	IE: SCRIPT5007: Unable to get value of the property 'offsetTop': object is null or undefined*).

# See Also

 * [What can I pin](https://help.pinterest.com/entries/22980352-What-can-I-pin-)

 * [How to Beat the Image Bias of Pinterest: Getting Pinned, Blocking Pins & Image Optimization Tips](http://blog.kissmetrics.com/image-bias-of-pinterest/)
