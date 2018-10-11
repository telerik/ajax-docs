---
title: Render Modes
page_title: Render Modes | RadImageEditor for ASP.NET AJAX Documentation
description: Render Modes
slug: imageeditor/mobile-support/render-modes
tags: render,modes
published: True
position: 1
---

# Render Modes

@[template](/_templates/common/render-mode.md#intro-all "control: RadImageEditor, version: Q3 2015")

* @[template](/_templates/common/render-mode.md#classic-desc) 	In this mode background images (in several sprites) are used to create the layout and the toolbar button icons.

* @[template](/_templates/common/render-mode.md#lightweight-desc) This mode also enables the [Elastic design]({%slug  imageeditor/mobile-support/elastic-design%}) of the control.

* @[template](/_templates/common/render-mode.md#mobile-desc)

* @[template](/_templates/common/render-mode.md#auto-desc) This functionality was added in **Q3 2013**.

@[template](/_templates/common/render-mode.md#do-not-mix-modes-all "control: RadImageEditor")

>tip RadImageEditor uses internally RadToolBar, RadDock, RadButton, RadComboBox, RadColorPicker, RadSlider, RadDropDownList, RadFormDecorator and they inherit its RenderMode.

## Setting Render Mode

There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

````ASP.NET
<telerik:RadImageEditor ID="RadImageEditor1" runat="server" RenderMode="Lightweight"></telerik:RadImageEditor>
````

````C#
RadImageEditor1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
````
````VB
RadImageEditor1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight
````

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

````XML
<appSettings>
	<add key="Telerik.Web.UI.ImageEditor.RenderMode" value="lightweight" />
</appSettings>
````


## See Also

* [Elastic design]({%slug  imageeditor/mobile-support/elastic-design%})
