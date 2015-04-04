---
title: Client Templates
page_title: Client Templates | UI for ASP.NET AJAX Documentation
description: Client Templates
slug: treemap/templates/client-templates
tags: client,templates
published: True
position: 0
---

# Client Templates



The following article, demonstrates the techniques of usage of the __RadTreeMap ClientTemplates__

## 

The __ClientTemplate__ contains mark up and binding expressions, which are evaluated against the __DataItem__ and then rendered as the Item's content on the client. As The __RadTreeMap__ supports only __ClientTemplate__, the control provides the ability to directly evaluate the __DataKeyFields__ in the declaration of the __ClientTemplate__. In such a manner you could visualize any needed data from the underlying data source. You need to simply enumerate the needed fields in the __DataKeyNames__ property of the RadTreeMap, in order for the control to be aware of the fields, which are about to be used from the DataItem. The templates support the following type of expressions which are evaluated at run-time:

* __#=...#__ - Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template.

* __#...#__ - Evaluates the JavaScript code expression inside, but doesn't output value.

* __#:...#__ - Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template which is HTML encoded.

>important Client templates __could not__ contain server-side controls.
>


As mentioned above, the __RadTreeMap__ supports only __ClientTemplate__. This is why, you can use the template to evaluate any KeyField from the datasource and use the __DataKeyNames__ property to enumerate them. In the example bellow you could observe how this is achieved using __SqlDataSource__. If you are binding the __RadTreeMap__ from code-behind, you would need to call __DataBind()__, in order to bind the template with the specified KeyFields.

>tabbedCode

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
>end

# See Also

 * [Client Template Online Demo](http://demos.telerik.com/aspnet-ajax/treemap/functionality/client-template/defaultcs.aspx)
