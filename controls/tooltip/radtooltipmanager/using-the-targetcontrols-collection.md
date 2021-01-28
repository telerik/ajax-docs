---
title: Using the TargetControls Collection
page_title: Using the TargetControls Collection - RadTooltip
description: Check our Web Forms article about Using the TargetControls Collection.
slug: tooltip/radtooltipmanager/using-the-targetcontrols-collection
tags: using,the,targetcontrols,collection
published: True
position: 1
---

# Using the TargetControls Collection



The **TargetControls** collection specifies a list of IDs of server controls (or ClientIDs of HTML elements, depending on the **IsClientID** flag) that should be 'tooltipified'. By default the **RadToolTipManager** assumes that the IDs in the **TargetControls** collection are the server IDs of the controls. If the IDs are client-side, (e.g. when elements are pure HTML and not server controls), then the **IsClientID** property should be set to **True**.The **Value** property is a string, containg information, specific for this target. Is can be used to pass additional information to the **OnAjaxUpdate** event handler so that context-specific content can be populated in the tooltip.

>tip If targets are declared for the manager setting AutoTooltipify to true will not have effect because explicit targets have higher priority.



## Define TargetControls declaratively

Example for defining TargetControls in the Markup

````ASP.NET
<telerik:RadToolTipManager RenderMode="Lightweight" ID="RadToolTipManager1" runat="server" Skin="Web20">
    <TargetControls>
        <telerik:ToolTipTargetControl IsClientID="False" TargetControlID="TextBox1" Value="ValueForTextBox1" />
        <telerik:ToolTipTargetControl IsClientID="False" TargetControlID="TextBox2" Value="ValueForTextBox2" />
        <telerik:ToolTipTargetControl IsClientID="False" TargetControlID="TextBox3" Value="ValueForTextBox3" />
    </TargetControls>
</telerik:RadToolTipManager>
````


## Define TargetControls in the CodeBehind/CodeFile

Example for defining TargetControls on server-side

````C#
RadToolTipManager1.TargetControls.Add("TextBox1");

// Define TargetControls with additional parameters
// @param1: TargetControlID (string)
// @param2: Value (string)
// @param3: IsClientID (bool)
RadToolTipManager1.TargetControls.Add("TextBox1", "ValueForTextBox1", false);
RadToolTipManager1.TargetControls.Add(TextBox2.ClientID, "SecondTextBox", true);
````
````VB
RadToolTipManager1.TargetControls.Add("TextBox1")

' Define TargetControls with additional parameters
' @param1: TargetControlID (string)
' @param2: Value (string)
' @param3: IsClientID (bool)
RadToolTipManager1.TargetControls.Add("TextBox1", "ValueForTextBox1", False)
RadToolTipManager1.TargetControls.Add(TextBox2.ClientID, "SecondTextBox", True)
````

When adding controls with client-side IDs to the **TargetControls** collection use the overloaded version of the **Add()** that takes two arguments. The second argument represents the **IsClientID** property.

````C#
Button button1 = new Button();
button1.ID = "Button1";
form1.Controls.Add(button);
RadToolTipManager1.TargetControls.Add(button1.ClientID, true);
````
````VB
Dim button1 As New Button()
button1.ID = "Button1"
form1.Controls.Add(button)
RadToolTipManager1.TargetControls.Add(button1.ClientID, True)
````


The **Value** property is a string that can, for example, originate from the data source. It passes information to the event handlers:

## Display the values

Once the TargetControls have been defined either in the Markup or server-side, the values need to be displayed using the OnAjaxUpdate event.


````C#
protected void OnAjaxUpdate(object sender, ToolTipUpdateEventArgs args)
{ 
    string ttValue = args.Value;
    //use the value to populate the toolip (fetch data from a database or to set properties of a user control)
    //the below line directly sets its as text for the tooltip:
    args.UpdatePanel.ContentTemplateContainer.Controls.Add(new LiteralControl(ttValue));
}
````
````VB
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


