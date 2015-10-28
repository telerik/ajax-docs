---
title: Render Modes
page_title: Render Modes | RadLinkButton for ASP.NET AJAX Documentation
description: Render Modes
slug: linkbutton/mobile-support/render-modes
tags: render,modes
published: True
position: 3
---

# Render Modes

**RadLinkButton** has two different render modes (**Lightweight** and **Native**) that can change the actual CSS that is used. They are exposed via the **RenderMode** property that can have five possible values - **Classic**, **Lightweight**, **Native**, **Mobile** and **Auto**.

The possible options are:

* **Classic**—this mode is not supported. If you set it, the mode will fall back automatically to **Lightweight**.

* **Lightweight**—this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders	and makes it easier to customize. This also reduces the number of image sprites required by the control. All of this decreases the overall size and complexity of each skin, including custom ones.

* **Native**—this mode disables the built-in styles and CSS of the button, and let the client browser apply its default styling for `<input type="submit|button" />` element.

* **Mobile**—this mode is currently not supported. If you set it, the mode will fall back automatically to **Lightweight**.

* **Auto**—this mode makes each control choose the appropriate rendering mode according to the used browser—**Classic** or **Lightweight**. If you set it, the mode will fall back automatically to **Lightweight**.

>important RadLinkButton, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, support only one type of render mode per page.This includes mode being set for a standalone RadLinkButton. All such controls must have the same RenderMode on a given page.This also includes instances from user controls and master pages.



## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

````ASP.NET
<telerik:RadLinkButton ID="RadLinkButton1" runat="server" RenderMode="Native">
</telerik:RadLinkButton>
````

````C#
RadLinkButton1.RenderMode = Telerik.Web.UI.RenderMode.Native;
````
````VB
RadLinkButton1.RenderMode = Telerik.Web.UI.RenderMode.Native
````

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

````XML
<appSettings>
	<add key="Telerik.Web.UI.linkbutton.RenderMode" value="Native" />
</appSettings>
````

## See Also

 * [Mobile Support Overview]({%slug linkbutton/mobile-support/overview%})

 * [Elastic Design]({%slug linkbutton/mobile-support/elastic-design%})

 * [Fluid Design]({%slug linkbutton/mobile-support/fluid-design%})
