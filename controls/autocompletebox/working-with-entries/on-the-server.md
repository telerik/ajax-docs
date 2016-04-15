---
title: On the Server
page_title: On the Server | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: On the Server
slug: autocompletebox/working-with-entries/on-the-server
tags: on,the,server
published: True
position: 0
---

# On the Server



The following case scenario gives an insight into the AutoCompleteBoxEntry collection when working with the selected entries	of RadAutoCompleteBox on the server.

## 

````ASPNET
<telerik:RadButton RenderMode="Lightweight" runat="server" ID="RadButton1" OnClick="RadButton1_Click" Text="Get selected entries" />

<asp:Label runat="server" ID="Label1" />

<telerik:RadAutoCompleteBox RenderMode="Lightweight" ID="RadAutoCompleteBox1" runat="server" AllowCustomEntry="true"
	InputType="Token" Delimiter=";" DataSourceID="SqlDataSource1" DataTextField="Name"
	DataValueField="ID">
</telerik:RadAutoCompleteBox>

<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
	SelectCommand="SELECT [ID], [NAME] FROM [Cities]"></asp:SqlDataSource>	
````





````C#
	
protected void RadAutoCompleteBox1_EntryAdded(object sender, AutoCompleteEntryEventArgs e)
{
	Label1.Text = e.Entry.Text + " was added.";
}
	
````
````VB
	
Protected Sub RadButton1_Click(sender As Object, e As EventArgs)
	For Each entry As AutoCompleteBoxEntry In RadAutoCompleteBox1.Entries
		Label1.Text += entry.Text + ": " + entry.Value + ", "
	Next
End Sub
	
````


# See Also

 * [Add/remove tokens from the AutoCompleteBoxEntry collectionon the server.](http://demos.telerik.com/aspnet-ajax/autocompletebox/examples/programming/addremove/defaultcs.aspx)
