---
title: Overview
page_title: Overview - RadMultiColumnComboBox
description: Check our Web Forms article about Overview.
slug: multicolumncombobox/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

You can configure the settings of **RadMultiColumnComboBox** and create its elements in the code-behind via the Server-Side API of the control.

## RadMultiColumnComboBox Server-side Events

In the R2 2019 release, server-side events for the **RadMultiColumnComboBox** control are introduced. Here is a list of the available events: 

* OnDataBinding
* OnDataBound
* OnInit
* [OnItemDataBound]({%slug multicolumncombobox/server-side-programming/events/itemdatabound%})
* OnLoad
* OnPreRender
* [OnSelectedIndexChanged]({%slug multicolumncombobox/server-side-programming/events/selectedindexchanged%})

## RadMultiColumnComboBox Public Properties and Methods

For a list with the server-side properties and methods of the control, see the [Server-Side API of the RadMultiColumnComboBox class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadMultiColumnComboBox). You can also find it in the intellisense in Visual Studio.

## Get Selected Text and Value

**RadMultiColumnComboBox** exposes the **Text** and **Value** server-side properties that contain the information from the `DataTextField` and `DataValueField` fields respectively.

>caption Example 1: Get selected value and text from RadMultiColumnComboBox

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox1" Skin="Default"
	DataTextField="TheText" DataValueField="ID"
	Width="300" DropDownWidth="300">
	<ColumnsCollection>
		<telerik:MultiColumnComboBoxColumn Field="ID" Title="ID" />
		<telerik:MultiColumnComboBoxColumn Field="TheText" Title="Name" />
		<telerik:MultiColumnComboBoxColumn Field="MoreData" Title="Extra Info" />
	</ColumnsCollection>
	<PopupSettings />
</telerik:RadMultiColumnComboBox>

<asp:Button Text="Get Data" ID="Button1" OnClick="Button1_Click" runat="server" />
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!Page.IsPostBack)
	{
		var data = Enumerable.Range(0, 10).Select(x => new
		{
			ID = x,
			TheText = "Name " + x,
			MoreData = "Extra " + x
		});

		RadMultiColumnComboBox1.DataSource = data;
		RadMultiColumnComboBox1.DataBind();

	}
}

protected void Button1_Click(object sender, EventArgs e)
{
	string text = RadMultiColumnComboBox1.Text;
	string val = RadMultiColumnComboBox1.Value;
	string result = string.Format("text: {0}<br />value: {1}", text, val);
	Response.Write(result);
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	If Not Page.IsPostBack Then
		Dim data = Enumerable.Range(0, 10).[Select](Function(x) New With {
														Key .ID = x,
														Key .TheText = "Name " & x,
														Key .MoreData = "Extra " & x
																		})

		RadMultiColumnComboBox1.DataSource = data
		RadMultiColumnComboBox1.DataBind()
	End If
End Sub

Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
	Dim text As String = RadMultiColumnComboBox1.Text
	Dim val As String = RadMultiColumnComboBox1.Value
	Dim result As String = String.Format("text: {0}<br />value: {1}", text, val)
	Response.Write(result)
End Sub
````

