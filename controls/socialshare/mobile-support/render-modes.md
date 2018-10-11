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

@[template](/_templates/common/render-mode.md#intro-all "control: RadSocialShare, version: Q3 2015")

* @[template](/_templates/common/render-mode.md#classic-desc) In this mode an image sprite is used to create the icons. The HTML is as lightweight and semantic as possible and CSS3 is used for the `border-redius`.

* @[template](/_templates/common/render-mode.md#lightweight-desc) This mode also improves the [Elastic design]({%slug  socialshare/mobile-support/elastic-design%}) of the control.

* @[template](/_templates/common/render-mode.md#mobile-desc)

* @[template](/_templates/common/render-mode.md#auto-desc) This functionality was added in **Q3 2013**.

@[template](/_templates/common/render-mode.md#do-not-mix-modes-all "control: RadSocialShare")

>tip RadSocialShare uses internally RadComboBox and RadWindow for its CompactPopup and RadCaptcha for its SendEmail form. These controls inherit the RenderMode of the SocialShare.

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

