---
title: Controlling Posts
page_title: Controlling Posts | RadSocialShare for ASP.NET AJAX Documentation
description: Controlling Posts
slug: socialshare/functionality/controlling-posts
tags: controlling,posts
published: True
position: 0
---

# Controlling Posts





The **RadSocialShare** allows the developer to customize the preset content the end user will share in the social network. By default the URL and title of the current page are used as content and title of the post respectively. The user can alter this before posting in the popup, but this is out of the control of the developer.

The other options **RadSocialShare** provides are the **UrlToShare** and **TitleToShare** properties. With them you can control the location to which the link points - you can set the **UrlToShare** property to any URL you wish the user to share, not just the current page. If this property alone is set it also becomes the title of the post. You can then optionally set the **UrlToShare** to have a human-readable title of the post instead of the URL.

You can see this in action in [this online demo]( http://demos.telerik.com/aspnet-ajax/socialshare/examples/sharebar/defaultcs.aspx )

In short - here is the logic in which these priorities are set:

1. **UrlToShare** is *not* set - the current page URL and title are used. If the page has no title the URL becomes the title

1. **UrlToShare** *is* set:

	* **TitleToShare** is *not* set - the **UrlToShare** property is used as both URL and Title
	
	* **TitleToShare** *is* set: - the **UrlToShare** property is used as the URL and the **TitleToShare** is used as the title

>tip You can also set these properties for each individual button. If these properties are set both globally (in the main tag) and for a certain button the settings for the particular button take effect when it is clicked and the main settings are applied to the other buttons.
>


# See Also

 * [Controlling the content that will be in the preview of the post via the OpenGraph protocol](http://ogp.me/)
