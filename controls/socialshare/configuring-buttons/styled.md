---
title: Styled
page_title: Styled | RadSocialShare for ASP.NET AJAX Documentation
description: Styled
slug: socialshare/configuring-buttons/styled
tags: styled
published: True
position: 0
---

# Styled



## 

The **RadSocialShare** offers a set of built-in buttons that have consitent icon dimensions of 16px by 16px and their icons are simple and in the same style.They are called **Styled Buttons** as they utilize the public API that the different social networks provide and their appearance can becontrolled by the developer. They are used via the **<telerik:RadSocialButton />** tag and one of its properties controlswhich social network is used by the rendered button - the **SocialNetType** property.

The **SocialNetType** property is the only property that is *required*.Its value is an enumerator with the following options for the different social networks:

* **ShareOnTwitter** - for[www.Twitter.com](http://www.Twitter.com/)

* **LinkedIn** - for[www.LinkedIn.com](http://www.LinkedIn.com/)

* **Delicious** - for[www.Delicious.com](http://www.Delicious.com/)

* **Blogger** - for[www.Blogger.com](http://www.Blogger.com/)

* **Digg** - for[www.Digg.com](http://www.Digg.com/)

* **Reddit** - for[www.Reddit.com](http://www.Reddit.com/)

* **StumbleUpon** - for[www.StumbleUpon.com](http://www.StumbleUpon.com/)

* **MySpace** - for[www.MySpace.com](http://www.MySpace.com/)

* **Tumblr** - for[www.Tumblr.com](http://www.Tumblr.com/)

* **ShareOnFacebook** - for[www.facebook.com](http://www.facebook.com/)

* **ShareOnGooglePlus** - for [plus.google.com](https://plus.google.com/)

* **GoogleBookmarks** - for[www.google.com/bookmarks](http://www.google.com/bookmarks)

* **ShareOnYammer** - for[www.yammer.com](http://www.yammer.com/)

* **ShareOnPinterest** - for[www.pinterest.com](http://www.pinterest.com/)

There are also three other options that invoke the [e-mail functionality]({%slug socialshare/functionality/sending-via-e-mail%})and open the [compact buttons]({%slug socialshare/configuring-buttons/collections%}):

* **MailTo** - opens the user machine's mail client

* **SendEmail** - opens the built-in Send E-mail form in the browser

* **CompactButton** - it is used to trigger the popup with the [Compact Buttons collection]({%slug socialshare/configuring-buttons/collections%}).Unlike the **<telerik:RadCompactButton />** this opens the popup with the settings declared for the browser popup (see below).

>note If any of the other options is chosen for the **SocialNetType** this invokes the[Standard Button]({%slug socialshare/configuring-buttons/standard%})instead which is rendered by external scripts and the other properties do not apply.
>


The rest of the properties are listed below with their descriptions:

* **UrlToShare** - the URL sent to the social network or e-mail. If the property is set here it overrides the one set in the main tag

* **ToolTip** - sets the button's tooltip. If a label is set this also applies to the label. The default tooltips depends on the social network

* **LabelText** - sets the text that appears next to the button as a label. It is also clickable and acts as a button

* **CustomIconUrl** - sets an URL for a custom icon for the button

* **CustomIconWidth** - sets the width of the icon in pixels

* **CustomIconHeight** - sets the height of the icon in pixels

* **DialogWidth** - defines the width of the popup in pixels

* **DialogHeight** - defines the height of the popup in pixels

* **DialogTop** - defines the popup's vertical offset from the top edge of the screen in pixels

* **DialogLeft** - defines the popup's horizontal offset from the left edge of the screen in pixels

# See Also

 * [Button collections]({%slug socialshare/configuring-buttons/collections%})

 * [Standard Buttons]({%slug socialshare/configuring-buttons/standard%})

 * [Send as e-mail]({%slug socialshare/functionality/sending-via-e-mail%})

 * [Controlling Dialogs Position and Size]({%slug socialshare/appearance-and-styling/controlling-dialogs-position-and-size%})
