---
title: Keyboard Support
page_title: Keyboard Support | UI for ASP.NET AJAX Documentation
description: Keyboard Support
slug: imagegallery/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 0
---

# Keyboard Support



Since __SP1 Q1 2014 RadImageGallery__ provides keyboard support which can be enabled by setting the__AllowKeyboardNavigation__ property to __true__.

````ASPNET
	        <ClientSettings AllowKeyboardNavigation="true">
	                </ClientSettings>
````



The keyboard navigation support allows users to easily change images, views or turn on/off certain features of the control.In the table below you can find the default shortcuts, commands which are fired and actions which are performed when a certain key or acombination of keys is pressed.


| Action Key | Command | Action |
| ------ | ------ | ------ |
| __Alt+Down Arrow__ | __PrevView__ |Scrolls the __ThumbnailsArea__ so that the previous set of images is displayed.|
| __Alt+Left Arrow__ | __PrevView__ |Scrolls the __ThumbnailsArea__ so that the previous set of images is displayed.|
| __Alt+Right Arrow__ | __NextView__ |Scrolls the ThumbnailsArea so that the next set of images is displayed.|
| __Alt+Up Arrow__ | __NextView__ |Scrolls the ThumbnailsArea so that the next set of images is displayed.|
| __Ctrl+Y__ | __Focus__ |Sets the focus on the control.|
| __Down Arrow__ | __MoveToLast__ |Selects the thumbnail positioned below the currently selected one in the __ThumbnailsArea__ .|
| __Enter__ | __Select__ |Forces the displaying of the main image associated with the currently selected thumbnail.|
| __Escape__ | __Close__ |Hides the main image when the __DisplayAreaMode__ is set to __ToolTip__ , __LightBox__ or __Thumbnails__ .|
| __F__ | __ToggleFullScreen__ |Turns on/off the full screen mode.|
| __Home__ | __MoveToFirst__ |Selects the first thumbnail in the __ThumbnailsArea__ .|
| __Left Arrow__ | __Prev__ |Selects thumbnail positioned on the left of the currently selected one.|
| __PageDown__ | __PrevPage__ |Forces the control to fire a page command and navigate to the previous page.|
| __PageUp__ | __NextPage__ |Forces the control to fire a page command and navigate to the next page.|
| __Right Arrow__ | __Next__ |Selects thumbnail positioned on the left of the currently selected one.|
| __Space__ | __ToggleSlideshow__ |Turns on/off the Slideshow feature.|
| __T__ | __ToggleThumbnails__ |Shows/hides the __ThumbnailsArea__ .|
| __Up Arrow__ | __Up__ |Selects the thumbnail positioned above the currently selected one in the __ThumbnailsArea__ .|

In addition to the commands you can enable the cycling navigation functionality of the control by	setting the __AllowCycle__ property to __true__.

````ASPNET
	    <ClientSettings AllowKeyboardNavigation="true">
	                    <KeyboardNavigationSettings AllowCycle="true">
	                    </KeyboardNavigationSettings>
	                </ClientSettings>
````



When turned on it will force the control to select an image inside the __ThumbnailsArea__ once the user tries to navigate outside of it usingthe arrow keys.

## Defining custom shortcuts

Replacing the default shortcuts is as easy as enabling the keyboard navigation. All you need to do is follow the below listed steps:

1. Assign a command to the shortcut.

1. Specify by which key/keys it will be triggered.

For example if you want to select the previous and next images by pressing __Alt+P__ and __Alt+N__ andselect the last image by pressing __L__ you can declare the shortcuts as demonstrated below:

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



Every __ImageGalleryShortut__ has the following properties:

* __Command__ – Determines which command will be fired when the respective key/keys are pressed.

* __Key__ – Specifies the key that will fire the command.

* __Modifiers__ – Specifies the key modifiers that allow the command to be fired by a certain combination of keys.Here you can define more than one modifier if needed. For example

>tabbedCode

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
>endwill force the firing of the command if __N__, __Alt__ and __Ctrl__ keys arepressed. By default the value of the property is __None__.

* __Enabled__ – Determines if the shortcut can be used.
