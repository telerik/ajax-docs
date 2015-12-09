---
title: RadLabel Integration
page_title: RadLabel Integration | RadCheckBox for ASP.NET AJAX Documentation
description: RadLabel Integration
slug: checkbox/functionality/radlabel-integration
tags: radlabel,integration
published: True
position: 0
---

# RadLabel Integration

Instead of setting the `Text` property of **RadCheckBox** to configure the text that appears after the checkbox, you can use **RadLabel** for this purpose. This would let you use the embedded functionality of **RadLabel** like marks, custom HTML and skinning.

To integrate **RadCheckBox** with **RadLabel** you should simply set the `AssociatedControlID` property of the label control to the ID of the checkbox control it will be attached to (**Example 1**).

>caption Figure 1: RadLabel integration with RadCheckBox (output from Example 1).

![RadLabel Integration](images/radlabel-integration.png)

>caption Example 1: RadLabel can be integrated with RadCheckBox. 

````ASP.NET
<telerik:RadCheckBox runat="server" ID="RadCheckBox1" AutoPostBack="false">
</telerik:RadCheckBox>
<telerik:RadLabel runat="server" ID="RadLabel1" AssociatedControlID="RadCheckBox1" Text="Check me">
</telerik:RadLabel>
```` 

## See Also
 
 * [CheckBox - Label Integration Demo](http://demos.telerik.com/aspnet-ajax/checkbox/application-scenarios/label-integration/defaultcs.aspx)
 
 * [RadLabel Overview]({%slug label/overview%})
 
 * [RadLabel Getting Started]({%slug label/getting-started%})
  
 * [RadCheckBox Getting Started]({%slug checkbox/getting-started%})
 
 

