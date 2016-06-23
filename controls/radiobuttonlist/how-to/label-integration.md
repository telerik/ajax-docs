---
title: Label Integration
page_title: Label Integration | RadCheckBox for ASP.NET AJAX Documentation
description: Label Integration
slug: checkbox/how-to/label-integration
tags: label,integration
published: True
position: 0
---

# Label Integration

This help article illustrates how to integrate **RadCheckBox** with **RadLabel**, ASP:Label and HTML Label element.

 * [RadLabel Integration](#radlabel-integration)
 
 * [ASP:Label Integration](#asplabel-integration)
 
 * [HTML Label Integration](#html-label-integration)

## RadLabel Integration

Instead of setting the `Text` property of **RadCheckBox** to configure the text that appears after the checkbox, you can use **RadLabel** for this purpose. This would let you use the embedded functionality of **RadLabel** like marks, custom HTML and skinning.

To integrate **RadCheckBox** with **RadLabel** you should simply set the `AssociatedControlID` property of the label control to the ID of the checkbox control it will be attached to (**Example 1**).

>caption Example 1: RadLabel can be integrated with RadCheckBox. 

````ASP.NET
<telerik:RadCheckBox runat="server" ID="RadCheckBox1" Checked="true">
</telerik:RadCheckBox>
<telerik:RadLabel runat="server" ID="RadLabel1" AssociatedControlID="RadCheckBox1" Text="RadLabel">
</telerik:RadLabel>
````

## ASP:Label Integration 

To integrate **RadCheckBox** with **ASP:Label** you should simply set the `AssociatedControlID` property of the label control to the ID of the checkbox control it will be attached to (**Example 2**).

>caption Example 2: ASP:Label can be integrated with RadCheckBox. 

````ASP.NET
<telerik:RadCheckBox ID="RadCheckBox2" runat="server" Checked="true">
</telerik:RadCheckBox>
<asp:Label ID="Label1" runat="server" Text="aspLabel" AssociatedControlID="RadCheckBox2" />
```` 

## HTML Label Integration 

To integrate **RadCheckBox** with HTML Label you should simply set the for attribute of the label control to the ID of the checkbox control it will be attached to (**Example 2**).

>caption Example 3: HTML Label can be integrated with RadCheckBox. 

````ASP.NET
<telerik:RadCheckBox ID="RadCheckBox3" runat="server" Checked="true">
</telerik:RadCheckBox>
<label for="RadCheckBox3">HTML Label</label>
```` 

## See Also
 
 * [CheckBox - Label Integration Demo](http://demos.telerik.com/aspnet-ajax/checkbox/application-scenarios/label-integration/defaultcs.aspx)
 
 * [RadLabel Overview]({%slug label/overview%})
 
 * [RadLabel Getting Started]({%slug label/getting-started%})
  
 * [RadCheckBox Getting Started]({%slug checkbox/getting-started%})
 
 

