---
title: Client Templates
page_title: Client Templates | RadTreeMap for ASP.NET AJAX Documentation
description: Client Templates
slug: treemap/templates/client-templates
tags: client,templates
published: True
position: 0
---

# Client Templates



The following article, demonstrates the techniques of usage of the **RadTreeMap ClientTemplates**

## 

The **ClientTemplate** contains mark up and binding expressions, which are evaluated against the **DataItem** and then rendered as the Item's content on the client. As The **RadTreeMap** supports only **ClientTemplate**, the control provides the ability to directly evaluate the **DataKeyFields** in the declaration of the **ClientTemplate**. In such a manner you could visualize any needed data from the underlying data source. You need to simply enumerate the needed fields in the **DataKeyNames** property of the RadTreeMap, in order for the control to be aware of the fields, which are about to be used from the DataItem. The templates support the following type of expressions which are evaluated at run-time:

* **#=...#** - Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template.

* **#...#** - Evaluates the JavaScript code expression inside, but doesn't output value.

* **#:...#** - Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template which is HTML encoded.

>important Client templates **could not** contain server-side controls.
>


As mentioned above, the **RadTreeMap** supports only **ClientTemplate**. This is why, you can use the template to evaluate any KeyField from the datasource and use the **DataKeyNames** property to enumerate them. In the example bellow you could observe how this is achieved using **SqlDataSource**. If you are binding the **RadTreeMap** from code-behind, you would need to call **DataBind()**, in order to bind the template with the specified KeyFields.



````ASPNET
<telerik:radtreemap runat="server"
    id="TreeMap1"
    datasourceid="SqlDataSource1"
    datakeynames="Rank,Pay"
    datafieldid="ID"
    datafieldparentid="ParentID"
    datatextfield="Name"
    datavaluefield="Value">
    <ClientItemTemplate>
        <div>#:dataItem.Rank #</div>
        <div>#:text#</div>
        <div>#:dataItem.Pay#</div>
    </ClientItemTemplate>
</telerik:radtreemap>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:CustomConnectionString %>"
    SelectCommand="SELECT ID, ParentID, Name, Rank, Pay, Value FROM [TopPaidAthletes]"></asp:SqlDataSource>
````


# See Also

 * [Client Template Online Demo](http://demos.telerik.com/aspnet-ajax/treemap/functionality/client-template/defaultcs.aspx)
