---
title: Using Custom Attributes Client-side
page_title: Using Custom Attributes at the Client | RadTreeView for ASP.NET AJAX Documentation
description: Using Custom Attributes at the Client
slug: treeview/custom-attributes/using-custom-attributes-at-the-client
tags: using,custom,attributes,at,the,client
published: True
position: 3
---

# Using Custom Attributes Client-side



## 

Access custom attributes on the client side by using first the **get_attributes()** method. Then extract the specific attribute with the **getAttribute()** method, passing the attribute name.

>caution The custom attribute's name should not be an **HTML reserved word**. Please see the [Troubleshooting Custom Attributes]({%slug treeview/troubleshooting/custom-attributes%}) article for more information.
>


The example below demonstrates accessing the node attributes within the **OnClientNodeClicked** event handler.


>caption 

![RadTreeView OnClientNodeClicked Event](images/treeview_customattributesclientside.png)


````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" OnClientNodeClicked="onNodeClicked">
    <Nodes>
        <telerik:RadTreeNode runat="server" Text="Red Oak" ScientificName="Quercus rubra">
        </telerik:RadTreeNode>
        <telerik:RadTreeNode runat="server" Text="Eastern Red Cedar" ScientificName="Juniperus virginiana">
        </telerik:RadTreeNode>
        <telerik:RadTreeNode runat="server" Text="Lacebark Elm" ScientificName="Ulmus parvifolia ">
        </telerik:RadTreeNode>
    </Nodes>
</telerik:RadTreeView>
````

````JavaScript
function onNodeClicked(sender, args)  
{    
    var node = args.get_node();    
    alert(node.get_attributes().getAttribute("ScientificName"));
    //you can also set attributes, like:
    //node.get_attributes().setAttribute("ScientificName");
}
````



# See Also

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [Custom Attributes Troubleshooting]({%slug treeview/troubleshooting/custom-attributes%})
