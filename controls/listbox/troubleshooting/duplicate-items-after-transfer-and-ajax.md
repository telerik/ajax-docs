---
title: Duplicate Items after Transfer and AJAX Request
page_title: Duplicate Items after Transfer and AJAX Request - RadListBox
description: Check our Web Forms article about Transfer an item client-side, make an AJAX request and then a postback causes the transferred item to duplicate, and a server error.
slug: listbox/troubleshooting/duplicate-items-after-transfer-and-ajax
tags: duplicate,item,ajax,request,transfer,postback,clientstate
published: True
position: 4
---

# Duplicate Items after Transfer and AJAX Request


Problematic situation (**Example 1**):

1. Move an item from a listbox to another listbox
1. Make an AJAX call that does not include the listboxes
1. Make a postback

**Issue**: After the postback, the transferred item is duplicated and you may get [a server error]({%slug listbox/troubleshooting/index-out-of-range-on-item-transfer-%}).

**Solution**: Make the listboxes part of the response (**Example 2**), or set their `AutoPostBackOnTransfer` property to `true` (**Example 3**).

**Description and origin of the problem**:

1. An item is transferred to the second listbox.
1. Both listboxes update their ClientState field with information of this change.
1. An AJAX request is made, this information is POSTed to the server.
1. The listboxes use this information and update their state on the server.
1. They are not part of the response, so their ClientState fields are not updated to reflect their server-side state, so they still contain information that an item must be transferred.
1. Another postback is made, which POSTs information that the transfer must happen.
1. Since the transfer has already happened, you may get an error. At the very least, the item would be duplicated.
1. Then, after a full postback the ClientState of the listboxes is now updated to reflect their server state.

>caption Example 1: Problematic scenario

````ASP.NET
<table>
	<tr>
		<td>Step 1. Move one or more items from left box to right box.</td>
	</tr>
	<tr>
		<td>
			<telerik:RadListBox runat="server" ID="RadListBox1" Height="200px" Width="300px"  
								AllowTransfer="True" TransferToID="RadListBox2" />
		</td>
		<td>
			<telerik:RadListBox runat="server" ID="RadListBox2" Height="200px" Width="235px" />
		</td>
	</tr>
</table>
<br /><br />
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
	<telerik:RadButton runat="server" ID="RadButton1" Text="Step 2. Make AJAX Call" OnClick="RadButton1_Click" />

	<asp:Literal ID="Literal1" runat="server" />

</telerik:RadAjaxPanel>
<br /><br />

<telerik:RadButton runat="server" ID="RadButton2" Text="Step 3. Show Selected" OnClick="RadButton2_Click" />
<br />
<asp:Literal ID="Literial2" runat="server" />
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (Page.IsPostBack == false)
	{
		RadListBox1.Items.Add(new RadListBoxItem("Item 1", "1"));
		RadListBox1.Items.Add(new RadListBoxItem("Item 2", "2"));
		RadListBox1.Items.Add(new RadListBoxItem("Item 3", "3"));
	}
}

protected void RadButton1_Click(object sender, EventArgs e)
{
	Literal1.Text = DateTime.Now.ToLongTimeString();
}

protected void RadButton2_Click(object sender, EventArgs e)
{
	Literial2.Text = string.Format("Selected Count = {0}<br/>Items ={1}", RadListBox2.Items.Count, string.Join(", ", RadListBox2.Items.Select(i => i.Text)));
}
````

>caption Example 2: Include the listboxes in the response

````ASP.NET
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
	<table>
		<tr>
			<td>Step 1. Move one or more items from left box to right box.</td>
		</tr>
		<tr>
			<td>
				<telerik:RadListBox runat="server" ID="RadListBox1" Height="200px" Width="300px"  
									AllowTransfer="True" TransferToID="RadListBox2" />
			</td>
			<td>
				<telerik:RadListBox runat="server" ID="RadListBox2" Height="200px" Width="235px" />
			</td>
		</tr>
	</table>
	<br /><br />

	<telerik:RadButton runat="server" ID="RadButton1" Text="Step 2. Make AJAX Call" OnClick="RadButton1_Click" />

	<asp:Literal ID="Literal1" runat="server" />

</telerik:RadAjaxPanel>
<br /><br />

<telerik:RadButton runat="server" ID="RadButton2" Text="Step 3. Show Selected" OnClick="RadButton2_Click" />
<br />
<asp:Literal ID="Literial2" runat="server" />
````

>caption Example 3: Make the listboxes postback automatically

````ASP.NET
<table>
	<tr>
		<td>Step 1. Move one or more items from left box to right box.</td>
	</tr>
	<tr>
		<td>
			<telerik:RadListBox runat="server" ID="RadListBox1" Height="200px" Width="300px"  
								AllowTransfer="True" TransferToID="RadListBox2" AutoPostBackOnTransfer="true" />
		</td>
		<td>
			<telerik:RadListBox runat="server" ID="RadListBox2" Height="200px" Width="235px" AutoPostBackOnTransfer="true" />
		</td>
	</tr>
</table>
<br /><br />
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
	<telerik:RadButton runat="server" ID="RadButton1" Text="Step 2. Make AJAX Call" OnClick="RadButton1_Click" />

	<asp:Literal ID="Literal1" runat="server" />

</telerik:RadAjaxPanel>
<br /><br />

<telerik:RadButton runat="server" ID="RadButton2" Text="Step 3. Show Selected" OnClick="RadButton2_Click" />
<br />
<asp:Literal ID="Literial2" runat="server" />
````

## See Also

* [Index Out of Range on Item Transfer]({%slug listbox/troubleshooting/index-out-of-range-on-item-transfer-%})
