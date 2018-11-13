---
title: How to Pre-Select a Node Based on Text or Value
page_title: How to Pre-Select a Node Based on Text or Value | RadDropDownTree for ASP.NET AJAX Documentation
description: How to Pre-Select a Node Based on Text or Value
slug: dropdowntree/how-to/how-to-pre-select-a-node-based-on-text-or-value
tags: how,to,pre-select,a,node,based,on,text,or,value
published: True
position: 2
---

# How to Pre-Select a Node Based on Text or Value



## How to pre-select a node by text or value

There are two options to pre-select a value in the **RadDropDownTree** when it is bound to a datasource - you can pre-select a node by its text or its value property. For the text the **SelectedText** can be used while for the value, one needs to use the **SelectedValue** one.For instance in a simple scenario this can be achieved by using the following data-bind expression:

>note These properties are available after the **Q2 2013** release of the Telerik controls.
>


````ASPNET
<telerik:raddropdowntree runat="server" id="RadDropDownTreeTest" datatextfield="LastName"
    datafieldparentid="ReportsTo" datafieldid="EmployeeID" ondatabound="RadDropDownTreeTest_DataBound"
    datavaluefield="EmployeeID" datasourceid="SqlDataSource2" selectedvalue='<%#Bind("EmployeeID") %>'>
	<DropDownSettings OpenDropDownOnLoad="true" />
</telerik:raddropdowntree>
````



## How to pre-select more than one node when checkboxes are enabled

This section describes how one can pre-select several nodes in the scenario when checkboxes are enabled (in other words, when more that one node can be selected). In such case the **SelectedValue** and **SelectedText** properties can be set from code behind. It is, however, important to notice that in this case there is a delimiter separating the nodes. By default, the text of the entries in the entry area is separated by a semicolon and therefore a semicolon needs to be used when selecting more than one node. However, this can easily be changed by using the [EntriesDelimiter property]({%slug dropdowntree/functionality/delimiters%}). Note, that you will also need to change the delimiter that is used in the code behind when the **SelectedText** is set.

In contrast to that, when the **SelectedValue** property is set in the code behind, the values for the nodes are separated by comma. Below you can find and example how to select few nodes from the RadDropDownTree when using SelectedValue and/or SelectedText property.

````ASPNET
<telerik:RadDropDownTree RenderMode="Lightweight" runat="server" Skin="Default" ID="RadDropDownTreeTest" DataTextField="LastName" DataFieldParentID="ReportsTo"
    DataFieldID="EmployeeID" OnDataBound="RadDropDownTreeTest_DataBound" CheckBoxes="TriState"
    DataValueField="EmployeeID" DataSourceID="SqlDataSource2">
    <DropDownSettings OpenDropDownOnLoad="true" />

</telerik:RadDropDownTree>
<asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT EmployeeID, ReportsTo, LastName FROM [Employees]"></asp:SqlDataSource>
````





````C#
protected void RadDropDownTreeTest_DataBound(object sender, System.EventArgs e)
{
    ((RadDropDownTree)sender).ExpandAllDropDownNodes();
    //either of the two methods can be used to select a node by using text
    RadDropDownTreeTest.SelectedText = "Davolio" + ";" + "Leverling";
    //RadDropDownTreeTest.SelectedText = "Davolio; Leverling";
    //the value of the nodes are separated by a comma 
    RadDropDownTreeTest.SelectedValue = "3,4";
}	
````
````VB.NET
Protected Sub RadDropDownTreeTest_DataBound(sender As Object, e As System.EventArgs)
    DirectCast(sender, RadDropDownTree).ExpandAllDropDownNodes()
    'either of the two methods can be used to select a node by using text
    RadDropDownTreeTest.SelectedText = "Davolio" + ";" + "Leverling"
    'RadDropDownTreeTest.SelectedText = "Davolio; Leverling";
    'the value of the nodes are separated by a comma 
    RadDropDownTreeTest.SelectedValue = "3,4"

End Sub
````

