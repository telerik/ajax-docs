---
title: Label Integration
page_title: Label Integration - RadSwitch
description: Check our Web Forms article about Label Integration.
slug: switch/how-to/label-integration
tags: label,integration
published: True
position: 0
---

# Label Integration

This help article illustrates how to integrate **RadSwitch** with **RadLabel**, ASP:Label and HTML Label element.

 * [RadLabel Integration](#radlabel-integration)
 
 * [ASP:Label Integration](#asplabel-integration)
 
 * [HTML Label Integration](#html-label-integration)

## RadLabel Integration
You can use **RadLabel** to configure the text that appears before/after **RadSwitch**. This would let you use the embedded functionality of **RadLabel** like marks, custom HTML and skinning.

To integrate **RadSwitch** with **RadLabel** you should simply set the `AssociatedControlID` property of the label control to the ID of the switch control it will be attached to (**Example 1**).

>caption Example 1: RadLabel can be integrated with RadSwitch. 

````ASP.NET
<telerik:RadLabel runat="server" ID="RadLabel1" AssociatedControlID="RadSwitch1" Text="RadLabel for RadSwitch">
</telerik:RadLabel>
<telerik:RadSwitch runat="server" ID="RadSwitch1" Checked="true">
</telerik:RadSwitch>

````

## ASP:Label Integration 

To integrate **RadSwitch** with **ASP:Label** you should simply set the `AssociatedControlID` property of the label control to the ID of the switch control it will be attached to (**Example 2**).

>caption Example 2: ASP:Label can be integrated with RadSwitch. 

````ASP.NET
<asp:Label ID="Label1" runat="server" Text="aspLabel for RadSwitch" AssociatedControlID="RadSwitch2" />
<telerik:RadSwitch ID="RadSwitch2" runat="server" Checked="true">
</telerik:RadSwitch>

```` 

## HTML Label Integration 

To integrate **RadSwitch** with HTML Label you should simply set the for attribute of the label control to the ID of the switch control it will be attached to (**Example 3**).

>caption Example 3: HTML Label can be integrated with RadSwitch. 

````ASP.NET
<label for="RadSwitch3">HTML Label</label>
<telerik:RadSwitch ID="RadSwitch3" runat="server" Checked="true">
</telerik:RadSwitch>
```` 

## See Also
 
 * [RadLabel Overview]({%slug label/overview%})
 
 * [RadLabel Getting Started]({%slug label/getting-started%})
  
 * [RadSwitch Getting Started]({%slug switch/getting-started%})
 
 

