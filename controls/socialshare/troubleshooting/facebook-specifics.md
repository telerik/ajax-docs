---
title: Facebook Specifics
page_title: Facebook Specifics | RadSocialShare for ASP.NET AJAX Documentation
description: Facebook Specifics
slug: socialshare/troubleshooting/facebook-specifics
tags: facebook,specifics
published: True
position: 2
---

# Facebook Specifics



This help article lists the requirements and known issues with the [Facebook standard buttons]({%slug socialshare/configuring-buttons/standard%}) in the **RadSocialShare** control.

## Facebook Requirements

The proper functionality of the Facebook buttons requires the following setup:

* Set the global RadSocialShare's **FacebookAppId** property. More information about obtaining Facebook Application ID is available in the [ How do I get a Facebook Application ID? ](https://help.yahoo.com/kb/yahoo-merchant-solutions/facebook-application-sln18861.html) KB.

* Аdd the following XML namespace to the <html> tag of your document in order for the buttons to work properly in earlier versions of Internet Explorer.

	__HTML__

		<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#">


	For versions prior to the **Q3 2014** release, you should use the following XML namespace:

	__HTML__

		<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml" xmlns:og="http://opengraphprotocol.org/schema/">




## Known issues

### Facebook Buttons Are Not Rendered in Internet Explorer 7

This is an issue with the Facebook scripts that **RadSocialShare** only uses. Facebook are phasing out the support for IE 7 and you can also see the same behavior on their live page (e.g., the [Like Button page](https://developers.facebook.com/docs/plugins/like-button/)). More information on the matter is available in the [Facebook phasing out support for Internet Explorer 7](http://www.zdnet.com/blog/facebook/facebook-phasing-out-support-for-internet-explorer-7/6729) blog post.

### Facebook Button Events Are Not Fired

More information is available in the [Standard Buttons' Events]({%slug socialshare/troubleshooting/standard-buttons'-events%}) help article.

# See Also

 * [How do I Get a Facebook Application ID?](https://help.yahoo.com/kb/yahoo-merchant-solutions/facebook-application-sln18861.html)

 * [Facebook Phasing out Support for Internet Explorer 7](http://www.zdnet.com/blog/facebook/facebook-phasing-out-support-for-internet-explorer-7/6729)

 * [Facebook Like Button Official Demo Page](https://developers.facebook.com/docs/plugins/like-button/)

 * [Standard Buttons' Events]({%slug socialshare/troubleshooting/standard-buttons'-events%})
