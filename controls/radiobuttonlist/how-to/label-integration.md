---
title: Label Integration
page_title: Label Integration | RadRadioButtonList for ASP.NET AJAX Documentation
description: Label Integration
slug: radiobuttonlist/how-to/label-integration
tags: label,integration
published: True
position: 0
---

# Label Integration

This help article illustrates how to integrate **RadRadioButtonList** with **RadLabel**, ASP:Label and HTML Label element.

 * [RadLabel Integration](#radlabel-integration)
 
 * [ASP:Label Integration](#asplabel-integration)
 
 * [HTML Label Integration](#html-label-integration)

## RadLabel Integration

Instead of setting the `Text` property of **RadRadioButtonList** to configure the text that appears after the checkbox, you can use **RadLabel** for this purpose. This would let you use the embedded functionality of **RadLabel** like marks, custom HTML and skinning.

To integrate **RadRadioButtonList** with **RadLabel** you should simply set the `AssociatedControlID` property of the label control to the ID of the checkbox control it will be attached to (**Example 1**).

>caption Example 1: RadLabel can be integrated with RadRadioButtonList. 

````ASP.NET
<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1" Checked="true">
</telerik:RadRadioButtonList>
<telerik:RadLabel runat="server" ID="RadLabel1" AssociatedControlID="RadRadioButtonList1" Text="RadLabel">
</telerik:RadLabel>
````

## ASP:Label Integration 

To integrate **RadRadioButtonList** with **ASP:Label** you should simply set the `AssociatedControlID` property of the label control to the ID of the checkbox control it will be attached to (**Example 2**).

>caption Example 2: ASP:Label can be integrated with RadRadioButtonList. 

````ASP.NET
<telerik:RadRadioButtonList ID="RadRadioButtonList2" runat="server" Checked="true">
</telerik:RadRadioButtonList>
<asp:Label ID="Label1" runat="server" Text="aspLabel" AssociatedControlID="RadRadioButtonList2" />
```` 

## HTML Label Integration 

To integrate **RadRadioButtonList** with HTML Label you should simply set the for attribute of the label control to the ID of the checkbox control it will be attached to (**Example 2**).

>caption Example 3: HTML Label can be integrated with RadRadioButtonList. 

````ASP.NET
<telerik:RadRadioButtonList ID="RadRadioButtonList3" runat="server" Checked="true">
</telerik:RadRadioButtonList>
<label for="RadRadioButtonList3">HTML Label</label>
```` 

## See Also
 
 * [CheckBox - Label Integration Demo](http://demos.telerik.com/aspnet-ajax/checkbox/application-scenarios/label-integration/defaultcs.aspx)
 
 * [RadLabel Overview]({%slug label/overview%})
 
 * [RadLabel Getting Started]({%slug label/getting-started%})
  
 * [RadRadioButtonList Getting Started]({%slug checkbox/getting-started%})
 
 

