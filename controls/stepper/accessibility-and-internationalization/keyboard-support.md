---
title: Keyboard Support
page_title: Keyboard Support - RadStepper
description: Check our Web Forms article about Keyboard Support.
slug: stepper/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support

The keyboard navigation of the RadStepper is always available.

>caption Keyboard legend

| SHORTCUT    | DESCRIPTION                                        |
|-------------|----------------------------------------------------|
| Up Arrow    | Focuses the previous step in a vertical Stepper.   |
| Down Arrow  | Focuses the next step in a vertical Stepper.       |
| Left Arrow  | Focuses the previous step in a horizontal Stepper. |
| Right Arrow | Focuses the next step in a horizontal Stepper.     |
| Home        | Focuses the first step of the Stepper.             |
| End         | Focuses the last step of the Stepper.              |
| Enter       | Activates the currently focused step.              |
| Space       | Activates the currently focused step.              |
| Tab         | Moves the focus away from the Stepper.             |

>caption Focus

With the `AccessKey` property of the Control you can set the desired key for quick navigation to the Stepper.

````ASP.NET
<telerik:RadStepper runat="server" ID="RadStepper1" AccessKey="W">
````

As result Alt + W focuses the Stepper.

Test the keyboard support of RadStepper in our [live demos](https://demos.telerik.com/aspnet-ajax/stepper/overview/defaultcs.aspx)


# See Also

 * [RadStepper Overview demo](https://demos.telerik.com/aspnet-ajax/stepper/overview/defaultcs.aspx)
 


