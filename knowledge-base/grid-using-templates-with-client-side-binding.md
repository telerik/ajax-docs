---
title: Using Templates with Client-Side Binding
description: Using Templates with Client-Side Binding
type: how-to
page_title: Using Templates with Client-Side Binding - RadGrid
slug: grid-using-templates-with-client-side-binding
res_type: kb
---


## DESCRIPTION

When the grid is bound on client-side, it does not create new items on server-side on rebinding actions like paging, filtering, sorting, etc., but rather uses the already created ones.

The generated items on the server-side by the RadGrid are determined by its PageSize property(+1), which is 10 by default. If you test it using ItemCreated or ItemDataBound event handler, you will notice that these events are raised depending on this property, even if you have 50 items bound using a client-side source. 

Also, any controls which should be generated on server-side will be loaded only for these items. For example, if you have **ItemTemplate** which is server-side template, only the first 11 items will have the control generated:

````XML
<telerik:GridTemplateColumn>
    <ItemTemplate>
        <telerik:RadDropDownList ID="RadDropDownList1" runat="server">
        </telerik:RadDropDownList>
    </ItemTemplate>
</telerik:GridTemplateColumn>
````

## SOLUTION
  
Having this behavior in mind, the RadGrid dev team introduced a new option to define a template when the grid is bound on client-side - the [ClientItemTemplate](https://demos.telerik.com/aspnet-ajax/grid/examples/data-binding/client-side/client-item-template/defaultcs.aspx)  
  
Of course, this means that this template option can hold only client-side objects:
 
````XML
<telerik:GridTemplateColumn>
    <ClientItemTemplate>
        <span>Success</span>
    </ClientItemTemplate>
</telerik:GridTemplateColumn>
````

If you need to have a server-side control in every item, the only option to achieve this requirement is to increase the PageSize of the grid before the items are generated on server-side. The reason for this is that contrary to the server-side binding when the grid knows the exact count of the database records beforehand, it does not know this info from any client-side source. So, in order to generate more server-side items and their corresponding inner template controls for a different amount than 11, you will need to manually set its PageSize on server-side.      
  
For **GridButtonColumns** or **GridHyperLinkColumns**, you can use the following collection:

````XML
<MasterTableView ... ClientDataKeyNames="OrderID">
````
 
