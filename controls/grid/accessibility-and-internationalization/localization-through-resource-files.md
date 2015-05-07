---
title: Localization through Resource Files
page_title: Localization through Resource Files | RadGrid for ASP.NET AJAX Documentation
description: Localization through Resource Files
slug: grid/accessibility-and-internationalization/localization-through-resource-files
tags: localization,through,resource,files
published: True
position: 5
---

# Localization through Resource Files



## 

When localizing different elements of Telerik RadGrid, it may be necessary to use language sources, located in resource files. This process involves two steps:

1. First, you need to include the necessary settings in a resource file. The sample below shows a simple resource file, containing two value strings:

````ASP.NET
  .RESX
<resheader name="resmimetype">
   <value>text/microsoft-resx</value>
 </resheader>
 <resheader name="version">
   <value>2.0</value>
 </resheader>
 <resheader name="reader">
   <value>System.Resources.ResXResourceReader, System.Windows.Forms, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089</value>
 </resheader>
 <resheader name="writer">
   <value>System.Resources.ResXResourceWriter, System.Windows.Forms, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089</value>
 </resheader>
 <data name="column1" xml:space="preserve">
   <value>customized1</value>
 </data>
 <data name="column2" xml:space="preserve">
   <value>customized2</value>
 </data>
</root>
````



2. Second, after you have a resource file ready, it is necessary to attach to the **ItemCreated** event, and replace the text in a grid element with the one from the resource. This is shown in the code samples below:



````C#
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridHeaderItem)
    {
        GridHeaderItem header = (GridHeaderItem)e.Item;

        header["CustomerID"].Text = GetLocalResourceObject("column1").ToString();
        header["CompanyName"].Text = GetLocalResourceObject("column2").ToString();
    }
}
````
````VB
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridHeaderItem Then
        Dim header As GridHeaderItem = CType(e.Item, GridHeaderItem)

        header("CustomerID").Text = GetLocalResourceObject("column1").ToString()
        header("CompanyName").Text = GetLocalResourceObject("column2").ToString()
    End If
End Sub
````


If you are using resource files, you can use explicit localization to set the text for the Edit button text, as well as the text for the Cancel, Insert and Update buttons. The code below demonstrates one such approach:

````ASP.NET
<MasterTableView  CommandItemDisplay="Top"
DataKeyNames="CustomerID" DataSourceID="AccessDataSource1">
          
    <EditFormSettings
    EditColumn-UpdateText='<%$ Resources:Resource, UpdateText %>'
    EditColumn-InsertText='<%$ Resources:Resource, PerformIndertText %>'
    EditColumn-CancelText='<%$ Resources:Resource, CancelText %>'>            
    </EditFormSettings>

    <Columns>
        <telerik:GridEditCommandColumn EditText='<%$ Resources:Resource, EditText %>'>
        </telerik:GridEditCommandColumn>	
    </Columns>
</MasterTableView>
````



Additional information on resource files, as well as explicit and implicit resource localization is available on this page:

[http://msdn2.microsoft.com/en-us/library/ms227427.aspx](http://msdn2.microsoft.com/en-us/library/ms227427.aspx)

and in [this code library project](http://www.telerik.com/community/code-library/aspnet-ajax/localization/local-resources-for-radgrid-radcalendar-and-radinput.aspx).


