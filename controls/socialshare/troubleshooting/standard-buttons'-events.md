---
title: Standard Buttons' Events
page_title: Standard Buttons' Events | RadSocialShare for ASP.NET AJAX Documentation
description: Standard Buttons' Events
slug: socialshare/troubleshooting/standard-buttons'-events
tags: standard,buttons',events
published: True
position: 0
---

# Standard Buttons' Events



The [Standard Buttons]({%slug socialshare/configuring-buttons/standard%}) are created via external scripts from the respective network and therefore we cannot fully guarantee their correct functionality.

## Facebook Button Events Are Not Fired

Sometimes the **OnFacebookLike**, **OnFacebookUnLike** and **OnFacebookSend** events are not fired when the external Facebook buttons are used (the <telerik:RadFacebookButton ..... /> buttons). This is usually due to a missing **Facebook App ID**. When these external buttons are used we rely on scripts from Facebook for these events and if the **Facebook App ID** is incorrect they are not fired or are fired unreliably. More information on the matter is available in [this post from Veronika Rieglerova's blog](http://rieglerova.net/how-to-get-a-facebook-app-id/). Once you have this ID you can pass it to the **RadSocialShare**'s **FacebookAppId** property.



Another addition that sometimes helps is the following namespaces to the <html> tag:

````HTML
<html xmlns="https://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#">
````



For Telerik UI versions prior to **Q3 2014** release you must use the following XML namespace:

````HTML
<html xmlns="https://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml"
	xmlns:og="http://opengraphprotocol.org/schema/">
````



More information on the matter is available in the [Changes and Backwards Compatibility]({%slug socialshare/changes-and-backwards-compatibility%}) help article, in the section called **Telerik RadSocialShare for ASP.NET AJAX Q3 2014**.

Facebook seem to track the origin of the requests, so it often blocks when testing from *localhost*. Little can be done for this, except for simply waiting. An option that sometimes yields a testable site during development is replacing *localhost* with its IP equivalent - *127.0.0.1*. The other option is to immediately deploy to a staging server that is accessible from the general Internet (and therefore from Facebook) and testing there.

## Events not Cancellable

When using the external buttons we do not render the HTML or scripts for them, but we leave this task to the other company's scripts. This means thatthe HTML is rendered in an iframe with its src chosen by the scripts. Therefore their events cannot be cancelled, as JavaScript does not allow accessing pages from other domains (the so called cross-domain scripting security limitation).

# See Also

 * [Veronika Rieglerova's blog](http://rieglerova.net/)

 * [Google developer reference page for the PlusOne button](https://developers.google.com/+/plugins/+1button/)

 * [Google browser support](http://googleenterprise.blogspot.com/2011/06/our-plans-to-support-modern-browsers.html)

 * [Google PlusOne button forums](http://www.google.com/support/forum/p/Webmasters/label?lid=1f91cc0e87a8ed93)
