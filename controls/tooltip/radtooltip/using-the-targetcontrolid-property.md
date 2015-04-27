---
title: Using the TargetControlID Property
page_title: Using the TargetControlID Property | RadTooltip for ASP.NET AJAX Documentation
description: Using the TargetControlID Property
slug: tooltip/radtooltip/using-the-targetcontrolid-property
tags: using,the,targetcontrolid,property
published: True
position: 1
---

# Using the TargetControlID Property



## 

The **TargetControlID**property specifies the ID of the element that should be 'tooltipified'. It can be set declaratively on the page:

````ASPNET
	    <telerik:RadToolTip ID="RadToolTip1" runat="server" TargetControlID="Button1" IsClientID="true">
	    </telerik:RadToolTip>
````



...and in the code-behind:



````C#
	
			Button button1 = new Button(); 
			button1.ID = "Button1"; 
			RadToolTip1.TargetControlID = button1.ID;
	
````
````VB.NET
	
	        Dim button1 As New Button()
	        button1.ID = "Button1"
	        RadToolTip1.TargetControlID = button1.ID
	
````


By default, **RadToolTip** assumes a server ID. If the ID is client-side, as in the case where an element is pure HTML and not a server control, then the **IsClientID** property should be set to **True**.



````C#
	
			Button button1 = new Button();
			button1.ID = "Button1"; 
			RadToolTip1.TargetControlID = button1.ClientID; 
			RadToolTip1.IsClientID = true;
	
````
````VB.NET
	
	        Dim button1 As New Button()
	        button1.ID = "Button1"
	        RadToolTip1.TargetControlID = button1.ClientID
	        RadToolTip1.IsClientID = True
	
````


# See Also

 * [Managing Content]({%slug tooltip/radtooltip/managing-content%})
