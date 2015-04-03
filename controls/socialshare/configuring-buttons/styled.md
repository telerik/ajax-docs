---
title: Styled
page_title: Styled | UI for ASP.NET AJAX Documentation
description: Styled
slug: socialshare/configuring-buttons/styled
tags: styled
published: True
position: 0
---

# Styled



## 

The __RadSocialShare__ offers a set of built-in buttons that have consitent icon dimensions of 16px by 16px and their icons are simple and in the same style.They are called __Styled Buttons__ as they utilize the public API that the different social networks provide and their appearance can becontrolled by the developer. They are used via the __<telerik:RadSocialButton />__ tag and one of its properties controlswhich social network is used by the rendered button - the __SocialNetType__ property.

The __SocialNetType__ property is the only property that is *required*.Its value is an enumerator with the following options for the different social networks:

* __ShareOnTwitter__ - for[www.Twitter.com](http://www.Twitter.com/)

* __LinkedIn__ - for[www.LinkedIn.com](http://www.LinkedIn.com/)

* __Delicious__ - for[www.Delicious.com](http://www.Delicious.com/)

* __Blogger__ - for[www.Blogger.com](http://www.Blogger.com/)

* __Digg__ - for[www.Digg.com](http://www.Digg.com/)

* __Reddit__ - for[www.Reddit.com](http://www.Reddit.com/)

* __StumbleUpon__ - for[www.StumbleUpon.com](http://www.StumbleUpon.com/)

* __MySpace__ - for[www.MySpace.com](http://www.MySpace.com/)

* __Tumblr__ - for[www.Tumblr.com](http://www.Tumblr.com/)

* __ShareOnFacebook__ - for[www.facebook.com](http://www.facebook.com/)

* __ShareOnGooglePlus__ - for [plus.google.com](https://plus.google.com/)

* __GoogleBookmarks__ - for[www.google.com/bookmarks](http://www.google.com/bookmarks)

* __ShareOnYammer__ - for[www.yammer.com](http://www.yammer.com/)

* __ShareOnPinterest__ - for[www.pinterest.com](http://www.pinterest.com/)

There are also three other options that invoke the [e-mail functionality]({%slug socialshare/functionality/sending-via-e-mail%})and open the [compact buttons]({%slug socialshare/configuring-buttons/collections%}):

* __MailTo__ - opens the user machine's mail client

* __SendEmail__ - opens the built-in Send E-mail form in the browser

* __CompactButton__ - it is used to trigger the popup with the [Compact Buttons collection]({%slug socialshare/configuring-buttons/collections%}).Unlike the __<telerik:RadCompactButton />__ this opens the popup with the settings declared for the browser popup (see below).

>note If any of the other options is chosen for the __SocialNetType__ this invokes the[Standard Button]({%slug socialshare/configuring-buttons/standard%})instead which is rendered by external scripts and the other properties do not apply.
>


The rest of the properties are listed below with their descriptions:

* __UrlToShare__ - the URL sent to the social network or e-mail. If the property is set here it overrides the one set in the main tag

* __ToolTip__ - sets the button's tooltip. If a label is set this also applies to the label. The default tooltips depends on the social network

* __LabelText__ - sets the text that appears next to the button as a label. It is also clickable and acts as a button

* __CustomIconUrl__ - sets an URL for a custom icon for the button

* __CustomIconWidth__ - sets the width of the icon in pixels

* __CustomIconHeight__ - sets the height of the icon in pixels

* __DialogWidth__ - defines the width of the popup in pixels

* __DialogHeight__ - defines the height of the popup in pixels

* __DialogTop__ - defines the popup's vertical offset from the top edge of the screen in pixels

* __DialogLeft__ - defines the popup's horizontal offset from the left edge of the screen in pixels

# See Also

 * [Button collections]({%slug socialshare/configuring-buttons/collections%})

 * [Standard Buttons]({%slug socialshare/configuring-buttons/standard%})

 * [Send as e-mail]({%slug socialshare/functionality/sending-via-e-mail%})

 * [Controlling Dialogs Position and Size]({%slug socialshare/appearance-and-styling/controlling-dialogs-position-and-size%})
