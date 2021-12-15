---
title: Render Modes
page_title: Render Modes - RadSplitButton
description: Check our Web Forms article about Render Modes.
slug: splitbutton/mobile-support/render-modes
tags: render,modes
published: True
position: 3
---

# Render Modes


@[template](/_templates/common/render-mode.md#buttons-supported-modes "control: RadSplitButton")

@[template](/_templates/common/render-mode.md#do-not-mix-modes-buttons "control: RadSplitButton")


## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:
 
  ````ASPX
 <telerik:RadSplitButton ID="RadSplitButton1" runat="server" RenderMode="Lightweight">
 </telerik:RadSplitButton>
 ````
 
  ````C#
 RadSplitButton.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
 ````
````VB
 RadSplitButton.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
 ````

 	
* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

 ````web.config
<appSettings>
    <add key="Telerik.Web.UI.SplitButton.RenderMode" value="Lightweight" />
</appSettings>
````


## See Also

 * [Mobile Support Overview]({%slug splitbutton/mobile-support/overview%})

 * [Elastic Design]({%slug splitbutton/mobile-support/elastic-design%})

 * [Fluid Design]({%slug splitbutton/mobile-support/fluid-design%})

