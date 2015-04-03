---
title: Controlling Sharing Strings
page_title: Controlling Sharing Strings | UI for ASP.NET AJAX Documentation
description: Controlling Sharing Strings
slug: socialshare/functionality/controlling-sharing-strings
tags: controlling,sharing,strings
published: True
position: 3
---

# Controlling Sharing Strings



## 

Since Q1 2012 the __RadSocialShare__ offers the ability to change its shared strings (URL and Title) on the client, by using JavaScript. This allows you to set differents strings you want shared according to your custom logic without extra requests to the server.

This is achieved by calling the __set_stringsToShare(url, title)__[Client-side method]({%slug socialshare/client-side-programming/radsocialshare-object%}) of the control. Both its arguments are optional and the corresponding strings are not modified if there isn't a new value provided. After this method is called the change is applied not only to the [Styled buttons]({%slug socialshare/configuring-buttons/styled%}), but also to the [Standard (or third party) buttons]({%slug socialshare/configuring-buttons/standard%}) as well. Their counters are also updated according to the new values after that, which requires a request to the respective network's server.

This can also be done in the [OnSocialButtonClicking]({%slug socialshare/client-side-programming/events/onsocialbuttonclicking%}) event for each individual [Styled button]({%slug socialshare/configuring-buttons/styled%}) by calling the __set_stringsToShare()__ method that is exposed by the event arguments object that is passed to the event handler.

>caution These client-side methods do not resolve relative URLs like setting them in the server-side properties does. This means that setting, for example, "~/myPage.aspx" in the UrlToShare property will result in a proper URL being built and sent, but passing the same string to the JavaScript method will not resolve the URL, because this operation can only take place on the server.
>


# See Also

 * [RadSocialShare Client-side API]({%slug socialshare/client-side-programming/radsocialshare-object%})

 * [RadSocialShare Client-side Events]({%slug socialshare/client-side-programming/events/overview%})
