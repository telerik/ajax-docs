---
title: Editor Content Is Not Saved After AJAX Update
page_title: Editor Content Is Not Saved After AJAX Update | RadEditor for ASP.NET AJAX Documentation
description: Editor Content Is Not Saved After AJAX Update
slug: editor/troubleshooting/editor-content-is-not-saved-after-ajax-update
tags: editor,content,is,not,saved,after,ajax,update
published: True
position: 11
---

# Editor Content Is Not Saved After AJAX Update


This help article describes an issue with the content saving of **RadEditor** after an AJAX update and offers a resolution.

1. [Scenario Description - RadEditor Content is Not Saved After an AJAX Request](#scenario-description---radeditor-content-is-not-saved-after-an-ajax-request)
1. [Resolutions](#resolutions)
	* [telerik:RadButton initiates the request](#telerikradbutton-initiates-the-request)
	* [telerik:RadCheckBox initiates the request](#telerikradcheckbox-initiates-the-request)
	* [asp:Button initiates the request](#aspbutton-initiates-the-request)
	* [asp:ImageButton initiates the request](#aspimagebutton-initiates-the-request)

## Scenario Description - RadEditor Content is Not Saved After an AJAX Request

The RadEditor content is not saved after an AJAX update when one of the following criteria is met:

* An asp:ImageButton or RadButton updates RadEditor within an asp:UpdatePanel or through RadAjaxPanel/RadAjaxManager (**Example 1**).

* An asp:Button updates RadEditor within an asp:UpdatePanel (**Example 2**).

The unexpected behavior stems from an issue inside the MS AJAX framework that relates to passing information about the partial page update. Considering the fact that RadEditor and RadAjax are built on top of the MS AJAX framework, the controls are also affected by this issue.

In the case of ImageButtons and server buttons, by the time the MS AJAX framework "informs" the editor that a partial update is about to occur, the POST data has already been collected and recorded. The editor does not get a chance to set the updated content properly.

>caption Example 1: An ImageButton updates a RadEditor within a RadAjaxPanel, which causes the editor content to be lost.

````ASP.NET
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
	<asp:ImageButton ID="ImageButton1" runat="server" OnClick="btnSave_Click" ImageUrl="http://demos.telerik.com/aspnet-ajax/button/images/images/button.png" />
	<telerik:RadEditor ID="RadEditor1" runat="server"></telerik:RadEditor>
</telerik:RadAjaxPanel>
````
````C#
protected void btnSave_Click(object sender, EventArgs e)
{
	string content = RadEditor1.Content;
}
````
````VB
Protected Sub btnSave_Click(sender As Object, e As EventArgs)
	Dim content As String = RadEditor1.Content
End Sub
````


>caption Example 2: A Button updates a RadEditor within an asp:UpdatePanel, which causes the editor content to be lost.


````ASP.NET
<asp:UpdatePanel ID="UpdatePanel1" runat="server">
	<ContentTemplate>
		<asp:Button ID="Button1" runat="server" OnClick="btnSave_Click" Text="Save" />
		<telerik:RadEditor ID="RadEditor1" runat="server"></telerik:RadEditor>
	</ContentTemplate>
</asp:UpdatePanel>
````
````C#
protected void btnSave_Click(object sender, EventArgs e)
{
	string content = RadEditor1.Content;
}
````
````VB
Protected Sub btnSave_Click(sender As Object, e As EventArgs)
	Dim content As String = RadEditor1.Content
End Sub
````


## Resolutions

In order to handle the issue you can use one of the following approaches:

### telerik:RadButton initiates the request

Set the **UseSubmitBehavior** property of the push button to **false** when:

* A RadButton updates a RadEditor within an asp:UpdatePanel or through RadAjaxPanel/RadAjaxManager.

* An asp:Button updates a RadEditor within an asp:UpdatePanel (**Example 3**).

>caption Example 3: A Button with the **UseSubmitBehavior** property set to **false** which enables the editor content to be sent to the server.

````ASP.NET
<asp:UpdatePanel ID="UpdatePanel1" runat="server">
	<ContentTemplate>
		<asp:Button ID="Button1" runat="server" OnClick="btnSave_Click" UseSubmitBehavior="false" Text="Save" />
		<telerik:RadEditor ID="RadEditor1" runat="server"></telerik:RadEditor>
	</ContentTemplate>
</asp:UpdatePanel>
````
````C#
protected void btnSave_Click(object sender, EventArgs e)
{
	string content = RadEditor1.Content;
}
````
````VB
Protected Sub btnSave_Click(sender As Object, e As EventArgs)
	Dim content As String = RadEditor1.Content
End Sub
````

### telerik:RadCheckBox initiates the request

Use the **RadCheckBox** control events to prevent the default postback in order to initiate it via the standard `__doPostBack()` method. You also need to use the control API to change its checked state. See **Example 4**.

>caption Example 4: A RadCheckBox updates the editor without loss of content.

````ASP.NET
<asp:UpdatePanel ID="Updatepanel1" runat="server">
	<ContentTemplate>
		<telerik:RadCheckBox runat="server" ID="RadCheckBox1" Text="check me" OnClientClicking="OnClientClicking" AutoPostBack="true" OnCheckedChanged="RadCheckBox1_CheckedChanged"></telerik:RadCheckBox>
		<telerik:RadEditor ID="RadEditor1" runat="server"></telerik:RadEditor>
	</ContentTemplate>
</asp:UpdatePanel>
<script type="text/javascript">
	function OnClientClicking(sender, args) {
		args.set_cancel(true); //prevent the framework postback
		sender.set_checked(!sender.get_checked()); //toggle the checked state because cancelling the event cancels the state change as well
		__doPostBack(sender.get_element().getAttribute("name"), ''); //initiate a postback
	}
</script>
````
````C#
protected void RadCheckBox1_CheckedChanged(object sender, EventArgs e)
{
	string content = RadEditor1.Content;
}
````
````VB
Protected Sub RadCheckBox1_CheckedChanged(sender As Object, e As EventArgs)
	Dim content As String = RadEditor1.Content
End Sub
````


### asp:Button initiates the request

Use RadAjaxPanel/RadAjaxManager with asp:Button because they automatically set the **UseSubmitBehavior** property to **false** for all asp push buttons (**Example 4**).

>caption Example 5: Editor content is properly saved after partial update with RadAjaxPanel triggered by а Button.

````ASP.NET
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
	<asp:Button ID="Button2" runat="server" OnClick="btnSave_Click" Text="Save" />
	<telerik:RadEditor ID="RadEditor1" runat="server"></telerik:RadEditor>
</telerik:RadAjaxPanel>
````
````C#
protected void btnSave_Click(object sender, EventArgs e)
{
	string content = RadEditor1.Content;
}
````
````VB
Protected Sub btnSave_Click(sender As Object, e As EventArgs)
	Dim content As String = RadEditor1.Content
End Sub
````


### asp:ImageButton initiates the request

Use the MS AJAX framework's [__doPostBack()](http://www.dotnetspider.com/resources/189-AutoPostBack-What-How-works.aspx) method inside the client-side event of the ImageButton because it doesn't have a **UseSubmitBehavior** property (**Example 6**).

>caption Example 6: Triggering partial page update by calling the __doPostBack method inside the client click method of an asp:ImageButton, which allows the editor content to be sent to the server.



````ASP.NET
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
	<asp:ImageButton ID="ImageButton1" runat="server" OnClientClick="javascript:__doPostBack(this.name,'');return false;" OnClick="btnSave_Click" ImageUrl="http://demos.telerik.com/aspnet-ajax/button/images/images/button.png" />
	<telerik:RadEditor ID="RadEditor1" runat="server"></telerik:RadEditor>
</telerik:RadAjaxPanel>
````
````C#
protected void btnSave_Click(object sender, EventArgs e)
{
	string content = RadEditor1.Content;
}
````
````VB
Protected Sub btnSave_Click(sender As Object, e As EventArgs)
	Dim content As String = RadEditor1.Content
End Sub
````


When RadEditor and an ImageButton are used to update RadGrid fields, you can use the approach from **Example 5**. You should, however, properly reference the ImageButton from the code behind and handle its onclick event in order to call the __doPostBack() method (**Example 7**).

>caption Example 7: Calling the __doPostBack() method when image update button in RadGrid is clicked.



````ASP.NET
<asp:UpdatePanel ID="Updatepanel2" runat="server">
	<ContentTemplate>
		<telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource" OnItemCreated="RadGrid1_ItemCreated" OnItemCommand="RadGrid1_ItemCommand">
			<MasterTableView AutoGenerateColumns="false" EditMode="InPlace">
				<Columns>
					<telerik:GridEditCommandColumn ButtonType="ImageButton" HeaderText="Edit" UniqueName="EditButton">
					</telerik:GridEditCommandColumn>
					<telerik:GridBoundColumn DataField="ID" HeaderText="ID"></telerik:GridBoundColumn>
					<telerik:GridHTMLEditorColumn DataField="Text" HeaderText="Content" UniqueName="myGridHTMLEditorColumn"></telerik:GridHTMLEditorColumn>
				</Columns>
			</MasterTableView>
		</telerik:RadGrid>
		GridHTMLEditorColumn value after Edit:
		<asp:Label ID="Label1" Text="" runat="server" />
	</ContentTemplate>
</asp:UpdatePanel>
````
````C#
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
	if (e.Item is GridEditableItem && e.Item.IsInEditMode)
	{
		string buttonId = e.Item is IGridInsertItem ? "PerformInsertButton" : "UpdateButton";
		ImageButton but = e.Item.FindControl(buttonId) as ImageButton;
		but.Attributes.Add("onclick", @"javascript:__doPostBack('" + but.UniqueID + "',''); return false;");
	}
}

protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
	if (e.CommandName == "Update")
	{
		if (e.Item is GridEditableItem)
		{

			GridEditableItem editedItem = e.Item as GridEditableItem;
			TableCell cell = editedItem["myGridHTMLEditorColumn"];
			Label1.Text = (cell.Controls[0] as RadEditor).Content;
		}
	}
}

protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
	(sender as RadGrid).DataSource = GetData();
}

protected DataTable GetData()
{
	DataTable dt = new DataTable();

	dt.Columns.Add("ID", typeof(int));
	dt.Columns.Add("Text", typeof(string));

	dt.Rows.Add(1, "content 11111");
	dt.Rows.Add(2, "content 22222");

	return dt;
}
````
````VB
Protected Sub RadGrid1_ItemCreated(sender As Object, e As GridItemEventArgs)
	If TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode Then
		Dim buttonId As String = If(TypeOf e.Item Is IGridInsertItem, "PerformInsertButton", "UpdateButton")
		Dim but As ImageButton = TryCast(e.Item.FindControl(buttonId), ImageButton)
		but.Attributes.Add("onclick", "javascript:__doPostBack('" + but.UniqueID & "',''); return false;")
	End If
End Sub

Protected Sub RadGrid1_ItemCommand(sender As Object, e As GridCommandEventArgs)
	If e.CommandName = "Update" Then
		If TypeOf e.Item Is GridEditableItem Then

			Dim editedItem As GridEditableItem = TryCast(e.Item, GridEditableItem)
			Dim cell As TableCell = editedItem("myGridHTMLEditorColumn")
			Label1.Text = TryCast(cell.Controls(0), RadEditor).Content
		End If
	End If
End Sub

Protected Sub RadGrid1_NeedDataSource(sender As Object, e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
	TryCast(sender, RadGrid).DataSource = GetData()
End Sub

Protected Function GetData() As DataTable
	Dim dt As New DataTable()

	dt.Columns.Add("ID", GetType(Integer))
	dt.Columns.Add("Text", GetType(String))

	dt.Rows.Add(1, "content 11111")
	dt.Rows.Add(2, "content 22222")

	Return dt
End Function
````


## See Also

 * [RadEditor Overview]({%slug editor/overview%})

 * [AutoPostBack - What it is and How it works ?](http://www.dotnetspider.com/resources/189-AutoPostBack-What-How-works.aspx)
