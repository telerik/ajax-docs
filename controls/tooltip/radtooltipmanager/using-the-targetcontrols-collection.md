---
title: Using the TargetControls Collection
page_title: Using the TargetControls Collection | UI for ASP.NET AJAX Documentation
description: Using the TargetControls Collection
slug: tooltip/radtooltipmanager/using-the-targetcontrols-collection
tags: using,the,targetcontrols,collection
published: True
position: 1
---

# Using the TargetControls Collection



The __TargetControls__ collection specifies a list of IDs of server controls (or ClientIDs of HTML elements, depending on the __IsClientID__ flag) that should be 'tooltipified'. By default the __RadToolTipManager__ assumes that the IDs in the __TargetControls__ collection are the server IDs of the controls. If the IDs are client-side, (e.g. when elements are pure HTML and not server controls), then the __IsClientID__ property should be set to __True__.The __Value__ property is a string, containg information, specific for this target. Is can be used to pass additional information to the __OnAjaxUpdate__ event handler so that context-specific content can be populated in the tooltip.

>tip If targets are declared for the manager setting AutoTooltipify to true will not have effect because explicit targets have higher priority.
>


## Declaratively On The Page

````ASPNET
	    <telerik:RadToolTipManager ID="RadToolTipManager1" runat="server" Skin="Web20">
	        <TargetControls>
	            <telerik:ToolTipTargetControl IsClientID="False" TargetControlID="TextBox1" Value="ValueForTextBox1" />
	            <telerik:ToolTipTargetControl IsClientID="False" TargetControlID="TextBox2" Value="ValueForTextBox2" />
	            <telerik:ToolTipTargetControl IsClientID="False" TargetControlID="TextBox3" Value="ValueForTextBox3" />
	        </TargetControls>
	    </telerik:RadToolTipManager>
````



## In The Code-Behind



````C#
	
			RadToolTipManager1.TargetControls.Add("TextBox1");
	
````
````VB.NET
	
	        RadToolTipManager1.TargetControls.Add("TextBox1")
	
````


When adding controls with client-side IDs to the __TargetControls__ collection use the overloaded version of the __Add()__ that takes two arguments. The second argument represents the __IsClientID__property.



````C#
	
			Button button1 = new Button();
			button1.ID = "Button1";
	        form1.Controls.Add(button);
			RadToolTipManager1.TargetControls.Add(button1.ClientID, true);
	
````
````VB.NET
	
	        Dim button1 As New Button()
	        button1.ID = "Button1"
	        form1.Controls.Add(button)
	        RadToolTipManager1.TargetControls.Add(button1.ClientID, True)
	
````


The __Value__ property is a string that can, for example, originate from the datasource. It passes information to the event handlers:



````C#
	
	        RadToolTipManager1.TargetControls.Add("TextBox1", "ValueForTextBox1", false);
	        RadToolTipManager1.TargetControls.Add(TextBox2.ClientID, "SecondTextBox", true);
	
	        protected void OnAjaxUpdate(object sender, ToolTipUpdateEventArgs args)
	        { 
	            string ttValue = args.Value;
	            //use the value to populate the toolip (fetch data from a database or to set properties of a user control)
	            //the below line directly sets its as text for the tooltip:
	            args.UpdatePanel.ContentTemplateContainer.Controls.Add(new LiteralControl(ttValue));
	        }
	
````
````VB.NET
	
	        RadToolTipManager1.TargetControls.Add("TextBox1", "ValueForTextBox1", False)
	        RadToolTipManager1.TargetControls.Add(TextBox2.ClientID, "SecondTextBox", True)
	
	    Protected Sub OnAjaxUpdate(sender As Object, args As ToolTipUpdateEventArgs)
	        Dim ttValue As String = args.Value
	        'use the value to populate the toolip (fetch data from a database or to set properties of a user control)
	        'the below line directly sets its as text for the tooltip:
	        args.UpdatePanel.ContentTemplateContainer.Controls.Add(New LiteralControl(ttValue))
	    End Sub
	
	
````


# See Also

 * [Overview]({%slug tooltip/radtooltipmanager/overview%})

 * [Load Content On Demand]({%slug tooltip/radtooltipmanager/load-content-on-demand%})

 * [Using RadToolTipManager in MS AJAX UpdatePanels]({%slug tooltip/troubleshooting/using-radtooltipmanager-in-ms-ajax-updatepanels%})
