---
title: Keyboard Support
page_title: Keyboard Support | RadImageGallery for ASP.NET AJAX Documentation
description: Keyboard Support
slug: imagegallery/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 0
---

# Keyboard Support



Since **SP1 Q1 2014 RadImageGallery** provides keyboard support which can be enabled by setting the **AllowKeyboardNavigation** property to **true**.

````ASPNET
<ClientSettings AllowKeyboardNavigation="true">
		</ClientSettings>
````



The keyboard navigation support allows users to easily change images, views or turn on/off certain features of the control.In the table below you can find the default shortcuts, commands which are fired and actions which are performed when a certain key or acombination of keys is pressed.


| Action Key | Command | Action |
| ------ | ------ | ------ |
| **Alt+Down Arrow** | **PrevView** |Scrolls the **ThumbnailsArea** so that the previous set of images is displayed.|
| **Alt+Left Arrow** | **PrevView** |Scrolls the **ThumbnailsArea** so that the previous set of images is displayed.|
| **Alt+Right Arrow** | **NextView** |Scrolls the ThumbnailsArea so that the next set of images is displayed.|
| **Alt+Up Arrow** | **NextView** |Scrolls the ThumbnailsArea so that the next set of images is displayed.|
| **Ctrl+Y** | **Focus** |Sets the focus on the control.|
| **Down Arrow** | **MoveToLast** |Selects the thumbnail positioned below the currently selected one in the **ThumbnailsArea** .|
| **Enter** | **Select** |Forces the displaying of the main image associated with the currently selected thumbnail.|
| **Escape** | **Close** |Hides the main image when the **DisplayAreaMode** is set to **ToolTip** , **LightBox** or **Thumbnails** .|
| **F** | **ToggleFullScreen** |Turns on/off the full screen mode.|
| **Home** | **MoveToFirst** |Selects the first thumbnail in the **ThumbnailsArea** .|
| **Left Arrow** | **Prev** |Selects thumbnail positioned on the left of the currently selected one.|
| **PageDown** | **PrevPage** |Forces the control to fire a page command and navigate to the previous page.|
| **PageUp** | **NextPage** |Forces the control to fire a page command and navigate to the next page.|
| **Right Arrow** | **Next** |Selects thumbnail positioned on the left of the currently selected one.|
| **Space** | **ToggleSlideshow** |Turns on/off the Slideshow feature.|
| **T** | **ToggleThumbnails** |Shows/hides the **ThumbnailsArea** .|
| **Up Arrow** | **Up** |Selects the thumbnail positioned above the currently selected one in the **ThumbnailsArea** .|

In addition to the commands you can enable the cycling navigation functionality of the control by	setting the **AllowCycle** property to **true**.

````ASPNET
<ClientSettings AllowKeyboardNavigation="true">
	<KeyboardNavigationSettings AllowCycle="true">
	</KeyboardNavigationSettings>
</ClientSettings>
````



When turned on it will force the control to select an image inside the **ThumbnailsArea** once the user tries to navigate outside of it usingthe arrow keys.

## Defining custom shortcuts

Replacing the default shortcuts is as easy as enabling the keyboard navigation. All you need to do is follow the below listed steps:

1. Assign a command to the shortcut.

1. Specify by which key/keys it will be triggered.

For example if you want to select the previous and next images by pressing **Alt+P** and **Alt+N** andselect the last image by pressing **L** you can declare the shortcuts as demonstrated below:

````ASPNET
<telerik:RadImageGallery ID="RadImageGallery1" DisplayAreaMode="ToolTip" runat="server" AllowPaging="true"
	Width="800px" ImagesFolderPath="Images">
	<ClientSettings AllowKeyboardNavigation="true">
		<KeyboardNavigationSettings>
			<Shortcuts>
				<telerik:ImageGalleryShortcut Command="Prev" Key="P" Modifiers="Alt" />
				  <telerik:ImageGalleryShortcut Command="Next" Key="N" Modifiers="Alt" />
				  <telerik:ImageGalleryShortcut Command="MoveToLast" Key="L" />
			</Shortcuts>
		</KeyboardNavigationSettings>
	</ClientSettings>
	<ThumbnailsAreaSettings Mode="Thumbnails" />
</telerik:RadImageGallery>
````



Every **ImageGalleryShortut** has the following properties:

* **Command** – Determines which command will be fired when the respective key/keys are pressed.

* **Key** – Specifies the key that will fire the command.

* **Modifiers** – Specifies the key modifiers that allow the command to be fired by a certain combination of keys.Here you can define more than one modifier if needed. For example



````C#
protected void Page_Load(object sender, EventArgs e)
{
	RadImageGallery1.ClientSettings.KeyboardNavigationSettings.Shortcuts.Add(new Telerik.Web.UI.ImageGalleryShortcut()
	{
		Command = ImageGalleryShortcutCommand.Next,
		Key = KeyboardNavigationKey.N,
		Modifiers = (KeyboardNavigationModifier.Alt | KeyboardNavigationModifier.Ctrl)
	});
}
````
````VB.NET
Protected Overrides Sub OnLoad(e As EventArgs)
	MyBase.OnLoad(e)
	RadImageGallery1.ClientSettings.KeyboardNavigationSettings.Shortcuts.Add(New Telerik.Web.UI.ImageGalleryShortcut() With {
	.Command = ImageGalleryShortcutCommand.[Next],
	.Key = KeyboardNavigationKey.N,
	.Modifiers = (KeyboardNavigationModifier.Alt Or KeyboardNavigationModifier.Ctrl)
	})
End Sub
````

will force the firing of the command if **N**, **Alt** and **Ctrl** keys arepressed. By default the value of the property is **None**.

* **Enabled** – Determines if the shortcut can be used.
