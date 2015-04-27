---
title: Changes and Backwards Compatibility
page_title: Changes and Backwards Compatibility | RadSocialShare for ASP.NET AJAX Documentation
description: Changes and Backwards Compatibility
slug: socialshare/changes-and-backwards-compatibility
tags: changes,and,backwards,compatibility
published: True
position: 1
---

# Changes and Backwards Compatibility



## Telerik RadSocialShare for ASP.NET AJAX

A complete list of all changes can be found on Release History page:

[http://www.telerik.com/support/whats-new/aspnet-ajax/release-history](http://www.telerik.com/support/whats-new/aspnet-ajax/release-history)

## Telerik RadSocialShare for ASP.NET AJAX Q3 2014

The script that generates the Facebook [standard buttons]({%slug socialshare/configuring-buttons/standard%}) has been updated to **version 2.1**. You must add the following XML namespace to the <html> tag of your document in order for the buttons to work properly in earlier versions of Internet Explorer.

````HTML
	<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#">
````



For versions prior to the **Q3 2014** release, you must use the following XML namespace:

````HTML
	<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml"
	xmlns:og="http://opengraphprotocol.org/schema/">
````



More information on the Facebook platform versioning is available on the official Facebook site: [https://developers.facebook.com/docs/apps/versions](https://developers.facebook.com/docs/apps/versions).

>caution Facebook buttons are not rendered in Internet Explorer 7 because Facebook is phasing out the support for Internet Explorer 7. More information on the matter is available in the[Facebook Specifics]({%slug socialshare/troubleshooting/facebook-specifics%})help article, in the section called **"Facebook buttons are not rendered in Internet Explorer 7"** .
>


# See Also

 * [Facebook Platform Versioning](https://developers.facebook.com/docs/apps/versions)

 * [Facebook Specifics]({%slug socialshare/troubleshooting/facebook-specifics%})
