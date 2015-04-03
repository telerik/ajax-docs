---
title: Using the TargetControlID Property
page_title: Using the TargetControlID Property | UI for ASP.NET AJAX Documentation
description: Using the TargetControlID Property
slug: tooltip/radtooltip/using-the-targetcontrolid-property
tags: using,the,targetcontrolid,property
published: True
position: 1
---

# Using the TargetControlID Property



## 

The __TargetControlID__property specifies the ID of the element that should be 'tooltipified'. It can be set declaratively on the page:

````ASPNET
	    <telerik:RadToolTip ID="RadToolTip1" runat="server" TargetControlID="Button1" IsClientID="true">
	    </telerik:RadToolTip>
````



...and in the code-behind:

>tabbedCode

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


>end

By default, __RadToolTip__ assumes a server ID. If the ID is client-side, as in the case where an element is pure HTML and not a server control, then the __IsClientID__ property should be set to __True__.

>tabbedCode

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


>end

# See Also

 * [Managing Content]({%slug tooltip/radtooltip/managing-content%})
