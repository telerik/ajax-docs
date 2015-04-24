---
title: Programmatic Creation
page_title: Programmatic Creation | RadFilter for ASP.NET AJAX Documentation
description: Programmatic Creation
slug: filter/field-editors/programmatic-creation
tags: programmatic,creation
published: True
position: 2
---

# Programmatic Creation



There are two options for creating adding the RadFilter field editors dynamically - on **Page_Load** and **Page_Init**.

## Creating the field editors on Page_Load

When creating a field editor in the **Page_Load** event handler, it should be added to the *FieldEditors* collection first, before its values are set. This is important because no *ViewState* is managed for the editor before it has been added. Also, be sure to check that *IsPostBack* is false. Otherwise, you will end up adding the same editors to the RadFilter multiple times.



````ASPNET
<telerik:RadFilter runat="server" ID="RadFilter1" FilterContainerID="SqlDataSource1" ExpressionPreviewPosition="Bottom">
</telerik:RadFilter>
<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="Select OrderID, OrderDate, ShipVia, ShipName, ShipAddress, ShipCity, ShipCountry FROM Orders">
</asp:SqlDataSource>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        RadFilterTextFieldEditor textFieldEditor = new RadFilterTextFieldEditor();
        RadFilter1.FieldEditors.Add(textFieldEditor);
        textFieldEditor.FieldName = "ShipName";
        textFieldEditor.DataType = typeof(string);
    }
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    If Not IsPostBack Then
        Dim textFieldEditor As New RadFilterTextFieldEditor()
        RadFilter1.FieldEditors.Add(textFieldEditor)
        textFieldEditor.FieldName = "ShipName"
        textFieldEditor.DataType = GetType(String)
    End If
End Sub
````


## Creating the field editors on Page_Init

When creating a field editor in the **Page_Init** event handler, it should be added to the *FieldEditors* collection after its attributes are set. No *ViewState* is required for the editor to be persisted as it is recreated on each page initialization.



````ASPNET
<telerik:RadFilter runat="server" ID="RadFilter1" FilterContainerID="SqlDataSource1" ExpressionPreviewPosition="Bottom">
</telerik:RadFilter>
<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="Select OrderID, OrderDate, ShipVia, ShipName, ShipAddress, ShipCity, ShipCountry FROM Orders">
</asp:SqlDataSource>
````
````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadFilterTextFieldEditor textFieldEditor = new RadFilterTextFieldEditor();
    textFieldEditor.FieldName = "ShipName";
    textFieldEditor.DataType = typeof(string);
    RadFilter1.FieldEditors.Add(textFieldEditor);
}
````
````VB.NET
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
    Dim textFieldEditor As New RadFilterTextFieldEditor()
    textFieldEditor.FieldName = "ShipName"
    textFieldEditor.DataType = GetType(String)
    RadFilter1.FieldEditors.Add(textFieldEditor)
End Sub
````

