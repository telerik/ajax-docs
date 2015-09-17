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

**RadImageEditor** has two different render modes that can change the actual HTML markup that is rendered.	They are exposed via the **RenderMode** property that can have four	possible values - **Classic**, **Lightweight**, **Mobile** and **Auto**. This functionality was introduced in the **Q3 2015** version.

The possible options are:

* **Classic**—this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.	In this mode background images (in several sprites) are used to create the layout and the toolbar button icons.

* **Lightweight**—this mode emphasizes on semantic HTML and CSS3 which makes it easier to customize. Image sprites are no longer used and the tool icons are font-icons from a font that is used in all Telerik controls. All of this decreases the overall size and complexity of each skin, including custom ones. This mode also enables the [Elastic design]({%slug  imageeditor/mobile-support/elastic-design%}) of the control.

* **Mobile**—this mode is currently not supported. If you set it, the mode will fall back automatically to **Lightweight**.

* **Auto**—this mode makes each control choose the appropriate rendering mode according to the used	browser - **Classic** or **Lightweight**. This functionality was added in Q3 2013.

>important RadImageEditor, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, support only one type of render mode per page. All such controls must have the same RenderMode on a given page.	This also includes instances from user controls and master pages.

>note RadImageEditor uses internally RadToolBar, RadDock, RadButton, RadComboBox, RadColorPicker, RadSlider, RadDropDownList and they inherit its RenderMode.

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