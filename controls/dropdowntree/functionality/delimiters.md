---
title: Delimiters
page_title: Delimiters | RadDropDownTree for ASP.NET AJAX Documentation
description: Delimiters
slug: dropdowntree/functionality/delimiters
tags: delimiters
published: True
position: 1
---

# Delimiters



With the RadDropDownTree control you have the opportunity to set a customized delimiter that will separate the entries in the entry area. Currently, there are two types of delimiters that you can use. The first type of delimiter is applied between single entries that are added to the entry area. The second type sets delimiter between the nodes (indicating their hierarchy). To visualize this, you can set the **TextMode** property to ***FullPath***. The two types of delimiters can be used separately from each other or in a combination.

## EntriesDelimiter

The entry delimiter property is set using the ***EntriesDelimiter*** property of the RadDropDownTree control. For instance,using the code below you can customize the delimiter between the entries in the entry area:

````ASPNET
<telerik:RadDropDownTree ID="RadDropDownTree1" CheckBoxes="TriState" runat="server" Width="250px" EntriesDelimiter="->" DefaultMessage="Select a car from the list" >
````

## FullPathDelimiter

You can set the delimiter using the ***FullPathDelimiter*** property. It serves as a reparator of the entries composing the path (that is set in the entry area) of the selected node. To visualize it in the entry area you can set the **TextMode** property to **FullPath**. Using the code below you can you can easily replace the default delimiter with your custom one.

````ASPNET
<telerik:RadDropDownTree ID="RadDropDownTree2" CheckBoxes="TriState" runat="server" Width="250px" TextMode="FullPath" FullPathDelimiter="-->" DefaultMessage="Select a car from the list" >
````