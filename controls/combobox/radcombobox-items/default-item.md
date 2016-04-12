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



**The Default Item** of the **RadComboBox** provides the abilty for custom validation scenarios. The item inherits the **RadComboBoxItem** and once set, it will appear as the first item in the drop down(even if there are no items). When the default item is selected, the value of the **RadComboBox** DOM object should return default item’s value, in order to validate easier with the required fields validators.

## Adding default item at run-time

>note  **The Default Item** is applicable only in cases with readonly **RadComboBoxes** 
>


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


## Functionality

The **Default Item** will not persist in the server/client side **RadComboBoxItem's** collection. It will be rendered at the top of the items list. When the item is selected the server/client side Text property of the RadCombobox should return its text. The server/client side SelectedIndexChanged events will not be fired when the default item is selected. In addition, ItemTemplates do not affect the DefaultItem and you could not rely on the ViewState.

## Examples

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


# See Also

 * [ItemDataBound]({%slug combobox/server-side-programming/itemdatabound%})
