---
title: Accessing Rows
page_title: Accessing rows Client-Side - RadGrid | Telerik UI for ASP.NET AJAX
description: Accessing Grid Rows on Client
slug: grid/accessing-values-and-controls/client-side/accessing-rows
published: True
position: 0
---

# Accessing Grid Rows Client-Side

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource">
</telerik:RadGrid>

<telerik:RadButton runat="server" ID="RadButton1" Text="RadButton1" AutoPostBack="false" OnClientClicked="RadButton1_OnClientClicked" />
````

````JavaScript
<script>
    function RadButton1_OnClientClicked(sender, args) {
        // Grid
        var grid = $find('<%= RadGrid1.ClientID %>');
        // MasterTable
        var masterTable = grid.get_masterTableView();
        // Rows
        var dataItems = masterTable.get_dataItems();

        for (var i = 0; i < dataItems.length; i++) {
            var item = dataItems[i];
        }
    }
</script>
````

