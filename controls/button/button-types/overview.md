---
title: Button Types Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: button/button-types/overview
tags: overview
published: True
position: 0
---

# Button Types Overview



## 

__RadButton__'s __ButtonType__ property controls howthe button is rendered on the client, the styles that get applied to the control, and the featuresthat are provided by each __RadButtonType__. Four options exist for the buttontype: __StandardButton__ (default), __LinkButton__,__SkinnedButton__ and __ToggleButton__.

1. [Configure RadButton as a StandardButton](#configure-radbutton-as-a-standardbutton)

1. [Configure RadButton as a LinkButton](#configure-radbutton-as-a-linkbutton)

1. [Configure RadButton as a ToggleButton](#configure-radbutton-as-a-togglebutton)

1. [Configure RadButton as a SkinnedButton](#configure-radbutton-as-a-skinnedbutton)

## Configure RadButton as a StandardButton

__StandardButton__ (__Figure 1__). The control is rendered as <input/> of type="submit" or type="button". The __UseSubmitBehavior__ (default value "true" ) property determines whether the <input/> type will be "submit" (when set to true) or "button" (when set to false). The user can disable the built-in styles and CSS of the button, and let the client browser apply its default styling for <input type="submit|button" /> elements, by setting the __EnableBrowserButtonStyle__ property to true. __StandardButton__ specific properties:

1. __UseSubmitBehavior__

1. __EnableBrowserButtonStyle__
>caption Figure 1: RadButton configured as a StandardButton.

![button-standardbutton](images/button-standardbutton.png)

__Example 1:__ The code that creates __StandardButton__ in __Figure 1__.

````ASPNET
		<telerik:RadButton ID="RadButton1" runat="server" Text="Standard Button" ButtonType="StandardButton" UseSubmitBehavior="true" EnableBrowserButtonStyle="false" />
````



## Configure RadButton as a LinkButton

__LinkButton__ (__Figure 2__). The control is rendered as a <span/> element with child <span/> element used to specify the text. The purpose of this button type is to provide a "LinkButton" look of the control and enable the user to specify URL to navigate to without requiring a page postback to the server. You can specify a target window or frame, in which the Web page content will be displayed, when you click the control through the __Target__ property. __LinkButton__ specific properties:

1. __NavigateUrl__

1. __Target__
>caption Figure 2: RadButton configured as a LinkButton.

![button-linkbutton](images/button-linkbutton.png)

__Example 2:__ The code that creates __LinkButton__ in __Figure 2__.

````ASPNET
		<telerik:RadButton ID="RadButton1" runat="server" Text="Link Button" ButtonType="LinkButton" NavigateUrl="http://www.telerik.com" Target="_blank" />
````



## Configure RadButton as a ToggleButton

__ToggleButton__. The control is rendered in the same way as the __LinkButton__, the difference is in the styles applied. The __ToggleButton__looks like a check box or radio button, depending on the value specified for the __ToggleType__ property. It can also look like a simple text (label) button [clickable text], if __ToggleType__ is set to "__None__" or "__CustomToggle__" is used. This button type should be used in scenarios when richly styled check boxes or radio buttons are needed. More information is available in the [Toggle button]({%slug button/button-types/toggle-button%}) help article.

## Configure RadButton as a SkinnedButton

__SkinnedButton__ (__Figure 3__). The control uses CSS3 for configuring rounded corners and gradient. This creates an appearance, similar to the __StandardButton__, without the need of sprite images. The __SkinnedButton__ is rendered in the same way as the __LinkButton__.
>caption Figure 3: RadButton configured as a SkinnedButton.

![button-skinnedbutton](images/button-skinnedbutton.png)

__Example 3:__ The code that creates __SkinnedButton__ in __Figure 3__.

````ASPNET
		<telerik:RadButton ID="RadButton1" runat="server" Text="Skinned Button" ButtonType="SkinnedButton" />
````



# See Also

 * [Split Button]({%slug button/button-types/split-button%})

 * [Overview]({%slug button/button-types/icons/overview%})

 * [Image Button]({%slug button/button-types/image-button%})

 * [Toggle button]({%slug button/button-types/toggle-button%})
