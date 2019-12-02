---
title: Item Count in footer Template using RadComboBox with Load On Demand
description: Item Count in footer Template using RadComboBox with Load On Demand
type: how-to
page_title: Use LoadOnDemand and display Item count in Footer Template - RadComboBox | Telerik UI for ASP.NET AJAX
slug: combobox-load-on-demand-item-count-in-footer-template
position: 
tags: 
ticketid: 1444335
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadComboBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

Q: I have EnableLoadOnDemand enabled in some RadComboBoxes. Is there a way to show the count of items in the footer (template) after itemes were loaded on Client side? 


Assuming the following markup:

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server">
    <FooterTemplate>
        <asp:Label ID="Label1" runat="server" Text=""></asp:Label>
    </FooterTemplate>
</telerik:RadComboBox>
````

Normally this label (or even other controls) can be accessed on the server-side like in the example below

````CS
RadComboBox combo = sender as RadComboBox;
var lbl = combo.Footer.FindControl("Label1") as Label;
lbl.Text = "SomeText";
````

If there is a full PostBack or a Partial PostBack where the ComboBox is included in the response, updating the label would work. 

However, the LoadOnDeman functionality does not update the RadComboBox control as a whole, it only makes a callback request to the server and use the response to display the data.


## Solution

Here are few steps to create a scenario where updating a Label inside the Footer Template of a RadComboBox that has Load On Demand enabled. Updating the label with the number of items returned by the Load On Demand functionality.

RadComboBox Markup:

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight"
    OnDataBinding="RadComboBox1_DataBinding"
    EnableLoadOnDemand="true" 
    OnItemsRequested="RadComboBox1_ItemsRequested" 
    OnClientItemsRequested="OnClientItemsRequested">
    <FooterTemplate>
        <asp:Label ID="Label1" runat="server" Text=""></asp:Label>
    </FooterTemplate>
</telerik:RadComboBox>
````

Server Side code to bind data and handle the ItemsRequested Event.

````C#
private string _sessionKey = "MyKey";
private IEnumerable<MyObject> ComboSource
{
	get
	{
		if (!IsPostBack || Session[_sessionKey] == null)
		{
			Session[_sessionKey] = Enumerable.Range(1, 20).Select(x => new MyObject
			{
				ID = x,
				Text = "Item " + x,
				Value = "Value" + x
			});
		}
		return (IEnumerable<MyObject>)Session[_sessionKey];
	}
	set
	{
		Session[_sessionKey] = value;
	}
}
protected void Page_Load(object sender, EventArgs e)
{
	if (!IsPostBack)
	{
		RadComboBox1.DataBind();
	}
}
protected void RadComboBox1_DataBinding(object sender, EventArgs e)
{
	RadComboBox combo = sender as RadComboBox;
	combo.DataTextField = "Text";
	combo.DataValueField = "Value";
	combo.DataSource = ComboSource;

	// When the Combo Renders the Label in the Footertemplate can be rendered as needed
	var lbl = combo.Footer.FindControl("Label1") as Label;
	lbl.Text = string.Format("Number of results: {0}", ComboSource.Count().ToString());
}
protected void RadComboBox1_ItemsRequested(object sender, RadComboBoxItemsRequestedEventArgs e)
{
	RadComboBox combo = sender as RadComboBox;
	combo.Items.Clear();

	string text = e.Context["Text"].ToString().ToLower();

	var searchResults = ComboSource.Where(x => x.Text.ToLower().IndexOf(text) > -1 || x.Value.ToLower().IndexOf(text.ToLower()) > -1);

	foreach (MyObject obj in searchResults)
	{
		combo.Items.Add(new RadComboBoxItem(obj.Text.ToString(), obj.Value.ToString()));
	}
}
public class MyObject
{
	public int ID { get; set; }
	public string Text { get; set; }
	public string Value { get; set; }
}
````

Later when searching in the ComboBox's input field, it will make callbacks to the server requesting the Items. In the ItemsRequested server event, the database is filtered and only the match items will be returned.

As soon as the Request completes, meaning that a response is received by the ComboBox on the client, it fill fire the ClientItemsRequested event.  

This event can be used to count the number of items returned, also to access the Label in the footer template and set its value accordingly.

```JavaScript
function OnClientItemsRequested(sender, args) {
	var numberOfItems = sender.get_items().get_count();

	var lbl = $telerik.$(sender._getFooterElement()).find("span[id$='Label1']");

	lbl.text("Number of results: " + numberOfItems);
}
```







