---
title: Appearance
page_title: SmartPasteButton Appearance
description: "Learn how to set the options to change the appearance such as, sizes, border radiuses, fill modes and theme colors."
slug: smartpastebutton/appearance
tags: appearance,smartpastebutton
published: True
position: 2
---

# Appearance

In this article, you will find information about the styling options and rendering of the WebForms SmartPasteButton.

For a live example, visit the [Appearance Demo of the SmartPasteButton](https://demos.telerik.com/aspnet-ajax/smartpastebutton/appearance/defaultcs.aspx).

## Options

The WebForms SmartPasteButton supports the following styling options:

- [`Icon`](#icon) - Configures the icon displayed when the button is in inactive state.
- [`CancelIcon`](#stopicon) - Configures the icon displayed when the button is in active state.
- [`Rounded`](#rounded) - Configures the border radius of the component.
- [`Size`](#size) - Configures the overall size of the component.

## Icon

The `Icon` option determines which icon is displayed when the button is not in the active state. The default is the `paste-sparkle` icon.

!["SmartPasteButton Icon"](images/spb-overview.png "SmartPasteButton Icon")

Example

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="RadSpeechToTextButton1" Icon="paste-sparkle" />
````

## CancelIcon

The `CancelIcon` option determines which icon is displayed when the button is in the active state. The default is the `x` icon.

!["SmartPasteButton CancelIcon Icon"](images/spb-cancel-icon.png "SmartPasteButton Stop Icon")

Example

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="RadSpeechToTextButton1" CancelIcon="cancel" />
````

## Rounded

The `Rounded` option controls the border radius of the button.

Available values:

- `Small` - Small border radius
- `Medium` - Medium border radius (default)
- `Large` - Large border radius
- `Full` - Fully rounded corners (pill shape)

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="RadSpeechToTextButton1" Rounded="Small" />
<telerik:RadSmartPasteButton runat="server" ID="RadSpeechToTextButton2" Rounded="Medium" />
<telerik:RadSmartPasteButton runat="server" ID="RadSpeechToTextButton3" Rounded="Large" />
<telerik:RadSmartPasteButton runat="server" ID="RadSpeechToTextButton4" Rounded="Full" />
````

## Size

The `Size` option controls how big or small the rendered button looks.

Available values:

- `Small` - Small size
- `Medium` - Medium size (default)
- `Large` - Large size

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="RadSpeechToTextButton1" Size="Small" />
<telerik:RadSmartPasteButton runat="server" ID="RadSpeechToTextButton2" Size="Medium" />
<telerik:RadSmartPasteButton runat="server" ID="RadSpeechToTextButton3" Size="Large" />
````

## Button States

* **Inactive State** - Default state before speech recognition begins
* **Active State** - Indicates that speech recognition is currently in progress
* **Error State** - Displays when speech recognition encounters an error or is not supported by the browser

## Next Steps

- [Form Fields]({%slug smartpastebutton/form-fields%})
- [Error Handling]({%slug smartpastebutton/error-handling%})
- [AI Service Integration]({%slug smartpastebutton/ai-service-integration%})
- [Keyboard Navigation]({%slug smartpastebutton/accessibility/keyboard-navigation%})
- [Client-side Programming]({%slug smartpastebutton/client-side-programming/overview%})
- [Server-side Programming]({%slug smartpastebutton/server-side-programming/overview%})

