---
title: On the Client
page_title: On the Client - RadAutoCompleteBox
description: Check our Web Forms article about On the Client.
slug: autocompletebox/working-with-entries/on-the-client
tags: on,the,client
published: True
position: 1
---

# On the Client



The following case scenario gives an insight into the AutoCompleteBoxEntry collection when working with the selected entries	of RadAutoCompleteBox on the client.

## 

````JavaScript
<script type="text/javascript" language="javascript">
	function addNewEntry(sender, args) {
		var autoCompleteBox = $find("<%= RadAutoCompleteBox1.ClientID %>");
		var textBox = $find("RadTextBox1");
		if (textBox.get_value() == "") return;
		var entry = new Telerik.Web.UI.AutoCompleteBoxEntry();
		entry.set_text(textBox.get_value());
		autoCompleteBox.get_entries().add(entry);
	}

	function removeEntry(sender, args) {
		var autoCompleteBox = $find("<%= RadAutoCompleteBox1.ClientID %>");
		var firstEntry = autoCompleteBox.get_entries().getEntry(0);
		if (firstEntry) {
			autoCompleteBox.get_entries().remove(firstEntry);
		}
	}

	function printSelectedEntries(sender, args) {
		var autoCompleteBox = $find("<%= RadAutoCompleteBox1.ClientID %>");
		var label = $telerik.$("#Label1")[0];
		var entriesCount = autoCompleteBox.get_entries().get_count();
		if (entriesCount == 0)
			label.innerHTML = "There are no selected entries!";
		else {
			label.innerHTML = "Selected entries: ";
			for (var i = 0; i < entriesCount; i++) {
				label.innerHTML += autoCompleteBox.get_entries().getEntry(i).get_text() + ", ";
			}
			var innerHTML = label.innerHTML;
			label.innerHTML = innerHTML.substr(0, innerHTML.length - 2);
		}

	}

	function clearAllEntries(sender, args) {
		$find("RadAutoCompleteBox1").get_entries().clear();
	}
</script>
````



````ASPNET
<div>
	<telerik:RadTextBox RenderMode="Lightweight" runat="server" ID="RadTextBox1" EmptyMessage="Type an entry" />
	<telerik:RadButton RenderMode="Lightweight" runat="server" ID="RadButton1" OnClientClicked="addNewEntry" Text="Add new entry"
		AutoPostBack="false" />
</div>
<br />
<div>
	<telerik:RadButton RenderMode="Lightweight" runat="server" ID="RadButton2" OnClientClicked="removeEntry" Text="Remove first entry"
		AutoPostBack="false" />
	<telerik:RadButton RenderMode="Lightweight" runat="server" ID="RadButton4" OnClientClicked="clearAllEntries"
		Text="Clear all entries" AutoPostBack="false" />
</div>
<br />
<div>
	<telerik:RadButton RenderMode="Lightweight" runat="server" ID="RadButton3" OnClientClicked="printSelectedEntries"
		Text="Print all selected entries" AutoPostBack="false" />
	<asp:Label runat="server" ID="Label1" />
</div>
<br />
<div>
	<label>RadAutoCompleteBox:</label>
	<telerik:RadAutoCompleteBox RenderMode="Lightweight" ID="RadAutoCompleteBox1" runat="server" AllowCustomEntry="true"
		InputType="Token" Delimiter=";" DataSourceID="SqlDataSource1" DataTextField="Name"
		DataValueField="ID">
	</telerik:RadAutoCompleteBox>
	<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
		SelectCommand="SELECT [ID], [NAME] FROM [Cities]"></asp:SqlDataSource>
</div>
````



# See Also

 * [Add/remove tokens from the AutoCompleteBoxEntry collectionon the client.](https://demos.telerik.com/aspnet-ajax/autocompletebox/examples/programming/addremoveclientside/defaultcs.aspx)
