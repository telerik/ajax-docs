---
title: Default Item
page_title: Default Item | RadComboBox for ASP.NET AJAX Documentation
description: Default Item
slug: combobox/radcombobox-items/default-item
tags: default,item
published: True
position: 6
---

# Default Item

The **Default Item** in a **RadComboBox** facilitates custom validation scenarios. The `DefaultItem` will appear as the first item in the drop down even if there are no items.

>tip The `DefaultItem` feature is available for read-only combo boxes (i.e., `AllowCustomText` must be set to `false`, its default value). For load-on-demand scenarios, see the [Default Item with Load On Demand](#default-item-with-load-on-demand) section below.

When the default item is selected, the value of the **RadComboBox** DOM object will return default item's value, in order to validate easier with the required fields validators (see the [examples below](#examples)). The server/client side Text property of the RadCombobox will return the default item text.

The **Default Item** will not persist in the server/client side **RadComboBoxItem's** collection.  The server/client side SelectedIndexChanged events will not be fired when the default item is selected. In addition, ItemTemplates do not affect the DefaultItem and you could not rely on the ViewState.

The `DefaultItem` inherits **RadComboBoxItem**.

## Adding Default Item


````ASPNET
<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" runat="server">
   <DefaultItem Text="Please select country" Value="-1"/>
</telerik:RadComboBox>
````





````C#
RadComboBox1.DefaultItem.Text = "-Please select gender-";
RadComboBox1.DefaultItem.Value = "-1";
````

````VB.NET	
RadComboBox1.DefaultItem.Text = "-Please select gender-"
RadComboBox1.DefaultItem.Value = "-1"
````




### Examples

Shows how to use **Default Item** with a **RequiredFieldValidator**

````ASPNET
<telerik:RadComboBox RenderMode="Lightweight" runat="server" ID="RadComboBox1" ValidationGroup="validationGroup">
	<DefaultItem Text="Please select item" Value="-1" />
	<Items>
		<telerik:RadComboBoxItem Text="Item1" Value="1" />
		<telerik:RadComboBoxItem Text="Item2" Value="2" />
		<telerik:RadComboBoxItem Text="Item3" Value="3" />
		<telerik:RadComboBoxItem Text="Item4" Value="4" />
	</Items>
</telerik:RadComboBox>
<telerik:RadButton RenderMode="Lightweight" runat="server" ValidationGroup="validationGroup" Text="Submit">
</telerik:RadButton>
<asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ValidationGroup="validationGroup" ControlToValidate="RadComboBox1" ErrorMessage="You should select item!"
	InitialValue="-1"></asp:RequiredFieldValidator>
````



Shows how validate several **RadComboBoxes** with **Default Item**

````ASPNET
<h3>Selection form</h3>
	<ul>
		<li>
			<label>Gender:</label>
			<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox2" runat="server" Width="180" skin="Office2010Blue"/>
		</li>
		<li>
			<label>Country:</label>
			<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox3" runat="server" Width="180" skin="Office2010Blue"/>
		</li>
		<li>
			<label>Age:</label>
			<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox4" runat="server" Width="180" skin="Office2010Blue"/>
		</li>
	</ul>
	<asp:CustomValidator ID="CustomValidator1" ErrorMessage="Please choose your gender, age and country !" ClientValidationFunction="selectionFormValidationGroup"
		 ValidationGroup="SelectionFormValidationGroup" runat="server" CssClass="validator" />
	<p class="buttons">
		<asp:Button ID="Button3" runat="server" Text="Submit" ValidationGroup="SelectionFormValidationGroup" />
	</p>
````



````JavaScript
<script type="text/javascript">
	function selectionFormValidationGroup(sender, args) {
		var combos = $telerik.$(".selection-form .RadComboBox");

		args.IsValid = true;

		for (var i = 0; i < combos.length; i++) {
			if (combos[i].value == "-1") {
				args.IsValid = false;
				break;
			}
		}
	}
</script>
````





````C#
protected void Page_Load(object sender, EventArgs e)
{
	if ( ! Page.IsPostBack)
	{
		LoadGenders();
		LoaAges();
		LoadCountries();
	}

	LoadDefaultItems();
}

private void LoadDefaultItems()
{
	RadComboBox2.DefaultItem.Text = "-Please select gender-";
	RadComboBox2.DefaultItem.Value = "-1";

	RadComboBox3.DefaultItem.Text = "-Please select age-";
	RadComboBox3.DefaultItem.Value = "-1";

	RadComboBox4.DefaultItem.Text = "-Please select country-";
	RadComboBox4.DefaultItem.Value = "-1";
}

private void LoadGenders()
{
	RadComboBox2.Items.Add(new RadComboBoxItem("Male"));
	RadComboBox2.Items.Add(new RadComboBoxItem("Female"));
}

private void LoaAges()
{
	RadComboBox3.Items.Add(new RadComboBoxItem("0 - 19"));
	RadComboBox3.Items.Add(new RadComboBoxItem("20 - 39"));
	RadComboBox3.Items.Add(new RadComboBoxItem("40 - 59"));
	RadComboBox3.Items.Add(new RadComboBoxItem("60 - 79"));
	RadComboBox3.Items.Add(new RadComboBoxItem("80 - 100"));
}

private void LoadCountries()
{
	RadComboBox4.Items.Add(new RadComboBoxItem("Bulgaria"));
	RadComboBox4.Items.Add(new RadComboBoxItem("USA"));
	RadComboBox4.Items.Add(new RadComboBoxItem("Other"));
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	If Not Page.IsPostBack Then
		LoadGenders()
		LoaAges()
		LoadCountries()
	End If

	LoadDefaultItems()

End Sub


Private Sub LoadDefaultItems()
	RadComboBox2.DefaultItem.Text = "-Please select gender-"
	RadComboBox2.DefaultItem.Value = "-1"

	RadComboBox3.DefaultItem.Text = "-Please select age-"
	RadComboBox3.DefaultItem.Value = "-1"

	RadComboBox4.DefaultItem.Text = "-Please select country-"
	RadComboBox4.DefaultItem.Value = "-1"
End Sub

Private Sub LoadGenders()
	RadComboBox2.Items.Add(New RadComboBoxItem("Male"))
	RadComboBox2.Items.Add(New RadComboBoxItem("Female"))
End Sub

Private Sub LoaAges()
	RadComboBox3.Items.Add(New RadComboBoxItem("0 - 19"))
	RadComboBox3.Items.Add(New RadComboBoxItem("20 - 39"))
	RadComboBox3.Items.Add(New RadComboBoxItem("40 - 59"))
	RadComboBox3.Items.Add(New RadComboBoxItem("60 - 79"))
	RadComboBox3.Items.Add(New RadComboBoxItem("80 - 100"))
End Sub

Private Sub LoadCountries()
	RadComboBox4.Items.Add(New RadComboBoxItem("Bulgaria"))
	RadComboBox4.Items.Add(New RadComboBoxItem("USA"))
	RadComboBox4.Items.Add(New RadComboBoxItem("Other"))
End Sub
````

## Default Item with Load On Demand

When using load-on-demand, there are no items initially in the combo box. To have an item that is always available and/or visible to the end user, you can take three approaches:

* [Always Add the Desired Item](#always-add-the-desired-item)
* [Add a Static Item Client-side](#add-a-static-item-client-side)
* [Add the Item in the Markup](#add-item-in-the-markup)

### Always Add the Desired Item

Always add the desired item at the top of the items list that your load-on-demand logic will return. This can depend on the `Text` value from the combo box that the handler receives. For example, if it is an empty string, add a default item, otherwise, return only relevant data and/or a default item. 

### Add a Static Item Client-side

You can use the `OnClientLoad` event to create an item with the desired values so it will always be at the top of the list and item from load-on-demand requests will be appended after it. You must set the `AppendDataBoundItems` property to `true`.

If you are using custom templates, this will let the default item also use that template. The other two options can only provide standard text-value items.

>caption Declarative data source

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1"
	RenderMode="Lightweight"
	runat="server"
	AllowCustomText="True"
	EnableLoadOnDemand="true"
	OnClientLoad="OnClientLoad"
	AppendDataBoundItems="True"
	DataSourceID="SqlDataSource1"
	DataTextField="CompanyName"
	DataValueField="CompanyName">
</telerik:RadComboBox>
<script>
	function OnClientLoad(combo, args) {
		//the two commented calls store the item in the ClientState of the control so it will get persisted across postbacks
		//and it is easier to just add it each time the combo initialized than to check if it is there every time
		//combo.trackChanges();
		var comboItem = new Telerik.Web.UI.RadComboBoxItem();
		comboItem.set_text("Default Option");
		comboItem.set_value("-1");
		var items = combo.get_items();
		items.insert(0, comboItem);
		//combo.commitChanges();
	}
</script>
<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	ProviderName="System.Data.SqlClient" SelectCommand="SELECT [CompanyName] from [Customers] ORDER By [CompanyName]"></asp:SqlDataSource>
````

>caption ItemSrequested handler

````ASP.NET
<telerik:RadComboBox ID="RadComboBox2"
	RenderMode="Lightweight"
	runat="server"
	AllowCustomText="True"
	EnableLoadOnDemand="true"
	OnClientLoad="OnClientLoad"
	AppendDataBoundItems="True"
	OnItemsRequested="RadComboBox2_ItemsRequested"
	OnClientDropDownOpening="requestItems">
</telerik:RadComboBox>
<script>
	function OnClientLoad(combo, args) {
		//the two commented calls store the item in the ClientState of the control so it will get persisted across postbacks
		//and it is easier to just add it each time the combo initialized than to check if it is there every time
		//combo.trackChanges();
		var comboItem = new Telerik.Web.UI.RadComboBoxItem();
		comboItem.set_text("Default Option");
		comboItem.set_value("-1");
		var items = combo.get_items();
		items.insert(0, comboItem);
		//combo.commitChanges();
	}
	function requestItems(sender, args) {
		sender.requestItems("", true);//request items each time
		//you can add a flag to prevent this from running multiple times
		//or use the server EndOfItems flag
	}
</script>
````

````C#
protected void RadComboBox2_ItemsRequested(object sender, RadComboBoxItemsRequestedEventArgs e)
{
	for (int i = 0; i < 5; i++)
	{
		RadComboBox2.Items.Add(new RadComboBoxItem(i.ToString(), i.ToString()));
		e.EndOfItems = true;//set to true when data is finished to prevent further requests
	}
}
````
````VB
Protected Sub RadComboBox2_ItemsRequested(sender As Object, e As RadComboBoxItemsRequestedEventArgs)
	For i As Integer = 0 To 4
		RadComboBox2.Items.Add(New RadComboBoxItem(i.ToString(), i.ToString()))
			'set to true when data is finished to prevent further requests
		e.EndOfItems = True
	Next
End Sub
````


### Add Item in the Markup

With the `AppendDataBoundItems` property to `true`, such an item will appear at the top of each batch of items returned from the data source. This means it may appear multiple times in the dropdown, depending on the exact load-on-demand scenario, and in some cases this may be desired (for example, when returning a lot of items you may want to prompt the user for a default or preferred option).

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1"
	RenderMode="Lightweight"
	runat="server"
	AllowCustomText="True"
	EnableLoadOnDemand="true"
	ItemsPerRequest="10"
	EnableAutomaticLoadOnDemand="true"
	AppendDataBoundItems="True"
	ShowMoreResultsBox="true"
	DataSourceID="SqlDataSource1"
	DataTextField="CompanyName"
	DataValueField="CompanyName">
	<Items>
		<telerik:RadComboBoxItem Text="Default Option" Value="-1" />
	</Items>
</telerik:RadComboBox>
<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	ProviderName="System.Data.SqlClient" SelectCommand="SELECT [CompanyName] from [Customers] ORDER By [CompanyName]"></asp:SqlDataSource>
````


# See Also

 * [ItemDataBound]({%slug combobox/server-side-programming/itemdatabound%})
