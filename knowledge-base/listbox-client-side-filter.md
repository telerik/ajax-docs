---
title: Client side filter
description: Client side filter. Check it now!
type: how-to
page_title: Client side filter. | RadListBox
slug: listbox-client-side-filter
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms ListBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

This example combines a RadTextBox with a RadListBox to filter the RadListBox items much like the RadComboBox filters its items.  A video demo can be seen [here](https://www.screencast.com/t/DEj4iCsLa).

## Solution

Notes:

- **Up and Down Arrow Usage**: If the user uses the up and down arrows to go through a filtered list, it may appear to not work because the up and down arrow will potentially be "stopping" on hidden items.
- **Clearing the Filter after a Transfer**: I opted to clear the filtered list and the filter after a transfer is made.  Otherwise, if the user transfers the item back while your listbox is filtered, you'll need to re-filter.  Also, that item may not match the filter criteria and seem to disappear to the user.

````ASP.NET
<div>
    <telerik:RadButton ID="btnSave" runat="server"
        Text="Save"
        OnClick="btnSave_Click">
        <Icon PrimaryIconCssClass="rbSave" />
    </telerik:RadButton>
</div>
<div class="listBoxHeaders">
    <span style="margin-left: 50px;">Available States
    </span>
    <span style="margin-left: 136px;">Chosen States
    </span>
</div>
<div>
    <table style="position: relative; left: -3px; margin-bottom: 2px;">
        <tr>
            <td>
                <telerik:RadTextBox ID="tbAvailableFilter" runat="server"
                    Width="187px"
                    EmptyMessage="Search States..."
                    autocomplete="off"
                    onkeyup="filterList();" />
            </td>
            <td>
                <telerik:RadButton ID="rbtnClear" runat="server"
                    Width="22px"
                    AutoPostBack="false"
                    OnClientClicking="rbtnClear_OnClientClicking">
                    <Icon PrimaryIconCssClass="rbClear" />
                </telerik:RadButton>
            </td>
        </tr>
    </table>
</div>

<telerik:RadListBox ID="rlbAvailable" runat="server"
    Height="250px"
    Width="250px"
    AllowTransfer="true"
    AllowTransferOnDoubleClick="true"
    TransferToID="rlbChosen"
    EnableDragAndDrop="true"
    OnClientTransferring="rlbAvailable_OnClientTransferring"
    ButtonSettings-ShowTransferAll="false" />

<telerik:RadListBox ID="rlbChosen" runat="server"
    Height="250px"
    Width="250px"
    EnableDragAndDrop="true"
    AllowReorder="true" />
<br />
<br />
<strong>States I've Lived In:</strong>
<asp:Repeater ID="rptStates" runat="server">
    <ItemTemplate>
        <div><%# Eval("Text") %></div>
    </ItemTemplate>
</asp:Repeater>
````

````JavaScript
// Function to filter the items in the list box
function filterList() {
    var listbox = $find("<%= rlbAvailable.ClientID %>");
    var textbox = $find('<%= tbAvailableFilter.ClientID %>');

    // Clear any previous emphasis and create a list with matching items
    clearListEmphasis(listbox);
    createMatchingList(listbox, textbox.get_textBoxValue());
}

// Function to remove emphasis from matching text in ListBox items
function clearListEmphasis(listbox) {
    var re = new RegExp("</{0,1}em>", "gi");
    var items = listbox.get_items();
    var itemText;

    items.forEach(function (item) {
        itemText = item.get_text();
        item.set_text(itemText.replace(re, ""));
    });
}

// Function to emphasize matching text in ListBox items and hide non-matching items
function createMatchingList(listbox, filterText) {
    if (filterText != "") {
        filterText = escapeRegExCharacters(filterText);

        var items = listbox.get_items();
        var re = new RegExp(filterText, "i");

        items.forEach(function (item) {
            var itemText = item.get_text();

            if (itemText.match(re)) {
                item.set_text(itemText.replace(re, "<em>$&</em>"));
                item.set_visible(true);
            } else {
                item.set_visible(false);
            }
        });
    } else {
        // If no filter text provided, show all items
        var items = listbox.get_items();
        items.forEach(function (item) {
            item.set_visible(true);
        });
    }
}

// Function called when items are being transferred from the list box
function rlbAvailable_OnClientTransferring(sender, eventArgs) {
    // Clear emphasis from transferred items
    clearListEmphasis(sender);
    // Clear the filter text
    clearFilterText();
    // Refresh the list to show all items
    createMatchingList(sender, "");
}

// Function called when the clear button is clicked
function rbtnClear_OnClientClicking(sender, eventArgs) {
    // Clear the filter text
    clearFilterText();
    // Get the list box control
    var listbox = $find("<%= rlbAvailable.ClientID %>");
    // Clear any emphasis and show all items
    clearListEmphasis(listbox);
    createMatchingList(listbox, "");
}

// Function to clear the filter text
function clearFilterText() {
    var textbox = $find('<%= tbAvailableFilter.ClientID %>');
    textbox.clear();
}

// Function to escape special characters for use in regular expressions
function escapeRegExCharacters(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
````

````CSS
body {
    font-family: Trebuchet MS, Sans-Serif;
}

.listBoxHeaders {
    color: Green;
    font-weight: bold;
}

.RadListBox span.rlbText em {
    background-color: #E5E5E5;
    font-weight: bold;
    font-style: normal;
}

.rbClear {
    background-image: url(images/clear.png);
    background-position: center;
    background-repeat: no-repeat;
}
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        rlbAvailable.LoadContentFile("states.xml");
    }
}

protected void btnSave_Click(object sender, EventArgs e)
{
    rptStates.DataSource = rlbChosen.Items;
    rptStates.DataBind();
}
````

````XML
<?xml version="1.0" encoding="utf-8" ?>
<Items>
	<Item Text="Alabama" Value="AL" />
	<Item Text="Alaska" Value="AK" />
	<Item Text="Arizona" Value="AZ" />
	<Item Text="Arkansas" Value="AR" />
	<Item Text="California" Value="CA" />
	<Item Text="Colorado" Value="CO" />
	<Item Text="Connecticut" Value="CT" />
	<Item Text="Delaware" Value="DE" />
	<Item Text="Florida" Value="FL" />
	<Item Text="Georgia" Value="GA" />
	<Item Text="Hawaii" Value="HI" />
	<Item Text="Idaho" Value="ID" />
	<Item Text="Illinois" Value="IL" />
	<Item Text="Iowa" Value="IA" />
	<Item Text="Kansas" Value="KS" />
	<Item Text="Kentucky" Value="KY" />
	<Item Text="Louisiana" Value="LA" />
	<Item Text="Maine" Value="ME" />
	<Item Text="Maryland" Value="MD" />
	<Item Text="Massachussetts" Value="MA" />
	<Item Text="Michigan" Value="MI" />
	<Item Text="Minnesota" Value="MN" />
	<Item Text="Mississippi" Value="MS" />
	<Item Text="Missouri" Value="MO" />
	<Item Text="Montana" Value="MT" />
	<Item Text="Nebraska" Value="NE" />
	<Item Text="Nevada" Value="NV" />
	<Item Text="New Hampshire" Value="NH" />
	<Item Text="New Jersey" Value="NJ" />
	<Item Text="New Mexico" Value="NM" />
	<Item Text="New York" Value="NY" />
	<Item Text="North Carolina" Value="NC" />
	<Item Text="North Dakota" Value="ND" />
	<Item Text="Ohio" Value="OH" />
	<Item Text="Oklahoma" Value="OK" />
	<Item Text="Oregon" Value="OR" />
	<Item Text="Pennsylvania" Value="PA" />
	<Item Text="Rhode Island" Value="RI" />
	<Item Text="South Carolina" Value="SC" />
	<Item Text="South Dakota" Value="SD" />
	<Item Text="Tennessee" Value="TN" />
	<Item Text="Texas" Value="TX" />
	<Item Text="Utah" Value="UT" />
	<Item Text="Vermont" Value="VT" />
	<Item Text="Virginia" Value="VA" />
	<Item Text="Washington" Value="WA" />
	<Item Text="West Virgina" Value="WV" />
	<Item Text="Wisconsin" Value="WI" />
	<Item Text="Wyoming" Value="WY" />
</Items>
````
 
  
   
   