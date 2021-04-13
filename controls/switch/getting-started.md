---
title: Getting Started
page_title: Getting Started - RadSwitch
description: Check our Web Forms article about Getting Started.
slug: switch/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started

The following tutorial demonstrates how to set up a page with a **RadSwitch** control and use its **OnCheckedChanged** server event:

1. In the default page of a new ASP.NET AJAX-enabled Web Application add a **RadSwitch** control:

	**ASP.NET**	
	
		<telerik:RadSwitch ID="RadSwitch1" runat="server">
		</telerik:RadSwitch>

1. Set the `Text` of the RadSwitch Toggle states (unless you want them empty)

	**ASP.NET**

        <telerik:RadSwitch runat="server" ID="RadSwitch1" Value="0" CommandArgument="arg1">
            <ToggleStates>
                <ToggleStateOff Text="No" />
                <ToggleStateOn Text="Yes" />
            </ToggleStates>
        </telerik:RadSwitch>
        
1. Add a Label to show a text associated with **RadSwitch**

	**ASP.NET**

        <telerik:RadLabel ID="switchLabel" runat="server" AssociatedControlID="RadSwitch1" Text="I agree to the Terms & Conditions."></telerik:RadLabel>


1. To hook to the **OnCheckedChanged** server-side event of **RadSwitch** add an attribute to the main control tag and add the method signature:

	**ASP.NET**

        <telerik:RadSwitch runat="server" ID="RadSwitch1" Value="0" CommandArgument="arg1" OnCheckedChanged="RadSwitch1_CheckedChanged">
            <ToggleStates>
                <ToggleStateOff Text="No" />
                <ToggleStateOn Text="Yes" />
            </ToggleStates>
        </telerik:RadSwitch>

	**C#**
	
		protected void RadSwitch1_CheckedChanged(object sender, EventArgs e)
		{
	
		}

	**VB**
	
		Protected Sub RadSwitch1_CheckedChanged(ByVal sender As Object, ByVal e As EventArgs)
		End Sub

1. Add a Label control to write the information to:

	**ASP.NET**

        <telerik:RadLabel ID="Label1" runat="server"></telerik:RadLabel>

1. Use the **CheckedChanged** event handler to write information about the switch properties:
	
	**C#**

        protected void RadSwitch1_CheckedChanged(object sender, EventArgs e)
        {
            var switchObj = sender as RadSwitch;
            var currentText = (bool)switchObj.Checked ? switchObj.ToggleStates.ToggleStateOn.Text : switchObj.ToggleStates.ToggleStateOff.Text;
            string data = string.Format("current text: {0}, current value {1}, current command argument: {2}, checked: {3}",
    
                                        currentText, switchObj.Value, switchObj.CommandArgument, switchObj.Checked);
            Label1.Text = data;
        }


	**VB**
	
        Protected Sub RadSwitch1_CheckedChanged(ByVal sender As Object, ByVal e As EventArgs)
            Dim switchObj = TryCast(sender, RadSwitch)
            Dim currentText = If(CBool(switchObj.Checked), switchObj.ToggleStates.ToggleStateOn.Text, switchObj.ToggleStates.ToggleStateOff.Text)
            Dim data As String = String.Format("current text: {0}, current value {1}, current command argument: {2}, checked: {3}", currentText, switchObj.Value, switchObj.CommandArgument, switchObj.Checked)
            Label1.Text = data
        End Sub


## See Also

 * [Properties and Events]({%slug switch/server-side-programming/properties-and-events%})
