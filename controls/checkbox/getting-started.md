---
title: Getting Started
page_title: Getting Started - RadCheckBox
description: Check our Web Forms article about Getting Started.
slug: checkbox/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started with the Telerik WebForms CheckBox

The following tutorial demonstrates how to set up a page with a **RadCheckBox** control and use its **OnCheckedChanged** server event:

1) In the default page of a new ASP.NET AJAX-enabled Web Application add a **RadCheckBox** control:

````ASPX	
<telerik:RadCheckBox ID="RadCheckBox1" runat="server" />
````

2) Set the `Text`, `Value` and `CommandArgument` properties:

````ASPX
<telerik:RadCheckBox ID="RadCheckBox1" runat="server" Text="Some Text" Value="0" CommandArgument="arg1" />
````

3) To hook to the **OnCheckedChanged** server-side event of **RadCheckBox** add an attribute to the main control tag and add the method signature:

````ASPX
<telerik:RadCheckBox ID="RadCheckBox1" runat="server" OnCheckedChanged="RadCheckBox1_CheckedChanged" Text="Some Text" Value="0" CommandArgument="arg1" />
````

````C#
protected void RadCheckBox1_CheckedChanged(object sender, EventArgs e)
{

}
````
````VB
Protected Sub RadCheckBox1_CheckedChanged(ByVal sender As Object, ByVal e As EventArgs)
End Sub
````

5) Add a Label control to write the information to:

````ASPX
<asp:Label ID="Label1" Text="" runat="server" />
````

6) Use the **CheckedChanged** event handler to write information about the checkbox properties:

````C#
protected void RadCheckBox1_CheckedChanged(object sender, EventArgs e)
{
	RadCheckBox checkbox = sender as RadCheckBox;

	string data = string.Format("current text: {0}, current value {1}, current command argument: {2}, checked: {3}",
								checkbox.Text, checkbox.Value, checkbox.CommandArgument, checkbox.Checked);
	Label1.Text = data;
}
````
````VB
Protected Sub RadCheckBox1_CheckedChanged(sender As Object, e As EventArgs)
	Dim checkbox = TryCast(sender, RadCheckBox)

	Dim data As String = String.Format("current text: {0}, current value {1}, current command argument: {2}, checked: {3}", checkbox.Text, checkbox.Value, checkbox.mmandArgument, checkbox.Checked)
	Label1.Text = data
End Sub
````

## See Also

 * [Design Time]({%slug checkbox/design-time%})

 * [Properties and Events]({%slug checkbox/server-side-programming/properties-and-events%})
