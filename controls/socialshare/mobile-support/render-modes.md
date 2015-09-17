---
title: Render Modes
page_title: Render Modes | RadSocialShare for ASP.NET AJAX Documentation
description: Render Modes
slug: socialshare/mobile-support/render-modes
tags: render,modes,social share
published: True
position: 1
---

# Render Modes

**RadSocialShare** has two different render modes that can change the actual HTML markup that is rendered.	They are exposed via the **RenderMode** property that can have four	possible values - **Classic**, **Lightweight**, **Mobile** and **Auto**. This functionality was introduced in the **Q3 2015** version.

The possible options are:

* **Classic**—this mode is the rendering that has been used before. It remains without changes and it is the default value of the property. In this mode an image sprite is used to create the icons. The HTML is as lightweight and semantic as possible and CSS3 is used for the `border-redius`.

* **Lightweight**—this mode uses CSS3 for the buttons and backgrounds which makes it easier to customize. Image sprites are no longer used and the icons are font-icons from a font that is used in all Telerik controls. All of this decreases the overall size and complexity of each skin, including custom ones. This mode also improves the [Elastic design]({%slug  socialshare/mobile-support/elastic-design%}) of the control.

* **Mobile**—this mode is currently not supported. If you set it, the mode will fall back automatically to **Lightweight**.

* **Auto**—this mode makes each control choose the appropriate rendering mode according to the used	browser - **Classic** or **Lightweight**. This functionality was added in Q3 2013.

>important RadSocialShare, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, support only one type of render mode per page. All such controls must have the same RenderMode on a given page.	This also includes instances from user controls and master pages.

>note RadSocialShare uses internally RadComboBox and RadWindow for its CompactPopup and RadCaptcha for its SendEmail form. These controls inherit the RenderMode of the SocialShare.



## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

````ASP.NET
<telerik:RadSocialShare ID="RadSocialShare1" runat="server" RenderMode="Lightweight"></telerik:RadSocialShare>
````

````C#
RadSocialShare1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
````
````VB
RadSocialShare1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
````

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

````XML
<appSettings>
	<add key="Telerik.Web.UI.SocialShare.RenderMode" value="lightweight" />
</appSettings>
````


## See Also

* [Elastic design]({%slug  socialshare/mobile-support/elastic-design%})

* [Fluid design]({%slug  socialshare/mobile-support/fluid-design%})

