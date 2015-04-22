---
title: Two-way Declarative Binding
page_title: Two-way Declarative Binding | RadGrid for ASP.NET AJAX Documentation
description: Two-way Declarative Binding
slug: grid/data-editing/two-way-declarative-binding
tags: two-way,declarative,binding
published: True
position: 7
---

# Two-way Declarative Binding



## 

Under .NET 2.x/3.x framework you can use the newly introduced **Bind**() syntax to perform two-way binding (to and from the underlying database):

````ASPNET
	  <EditItemTemplate>
	      <asp:TextBox id="TextBox1" runat="server" text='<%# Bind("Country") %>'>
	      </asp:TextBox>
	  </EditItemTemplate>
````



This is especially useful for data editing operations like update or insert when you would like to retrieve/pass the new data to the underlying database without extra coding. Here are two online examples (in **C#** and **VB.NET**) which demonstrate this approach:

[ Auto-generated edit form ](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/AllEditableColumns/DefaultCS.aspx)

[ Form template edit form ](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultCS.aspx)

>note With the Bind() syntax mentioned above you will be able to extract the updated by the user value from the FormTemplate without any additional code and pass it directly for the automatic update operation through the DataSource control (see[Automatic DataSource operations]({%slug grid/data-editing/automatic-datasource-operations%})).
>

