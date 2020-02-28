---
title: Automatic Database Updates
page_title: Automatic Database Updates | RadListBox for ASP.NET AJAX Documentation
description: Automatic Database Updates
slug: listbox/data-binding/automatic-database-updates
tags: automatic,database,updates
published: True
position: 4
---

# Automatic Database Updates

**RadListBox** supports automatic database updates. This means that the control can call the respective **UpdateCommand** or **DeleteCommand** of the [DataSource]({%slug listbox/data-binding/binding-to-asp.net-datasource-components%}).

>note To allow automatic updates you need to set the **AllowAutomaticUpdates="True"** and **AutoPostBackOn[Operation]="True"** property of the listbox. The listbox must be bound to a [declarative DataSource]({%slug listbox/data-binding/binding-to-asp.net-datasource-components%}) which has its **UpdateCommand** and/or **DeleteCommand** configured.
>


The following paragraphs will show how to configure **RadListBox** for automatic database operations.

## Automatic item deletion

In order to delete the item from RadListBox and the DataSource you need to:

* Set the **AllowDelete="True"** (so the Delete button is visible)

* Set the **AllowAutomaticUpdates="True"** (so the DataSource is updated automatically)

* Set the **AutoPostBackOnDelete="True"**.

* Make sure that the DataSource has a **DeleteCommand** set.

Here is a sample:

````ASPNET
<asp:SqlDataSource ID="SqlDataSource2" runat="server"
   ConnectionString="<$ ConnectionStrings>"
   SelectCommand="SELECT [ID], [Name], [Order] FROM [Cities] ORDER BY [Order]"
   DeleteCommand="DELETE FROM [Cities] WHERE [ID] = @ID" >
<DeleteParameters>
   <asp:Parameter Name="ID" Type="Int32" />
</DeleteParameters>
</asp:SqlDataSource>
<telerik:RadListBox RenderMode="Lightweight" ID="RadListBox1"
   runat="server"
   AllowDelete="True"
   AutoPostBackOnDelete="true"
   AllowAutomaticUpdates="true"
   DataKeyField="ID"                 
   DataTextField="Name"  
   DataValueField="ID"
   DataSourceID="SqlDataSource1" >
</telerik:RadListBox> 
````

## Automatic item reorder

In order to update the DataSource while reordering items you need to:

* Set the **AllowReorder="True"** (so the Up and Down arrows are visible)

* Set the **AllowAutomaticUpdates="True"** (so the DataSource is updated automatically)

* Set the **AutoPostBackOnReorder="True"**.

* Make sure you have set the **DataSortField** property to the name of the column which is used for sorting (ordering).

* Make sure that the DataSource has its **UpdateCommand** set.

Here is an example:

````ASPNET
<asp:SqlDataSource ID="SqlDataSource1" runat="server"
   ConnectionString="<$ ConnectionStrings>"
   SelectCommand="SELECT [ID], [Name], [Order] FROM [Cities] ORDER BY [Order]"
   UpdateCommand="UPDATE [Cities] SET [Name] = @Name, [Order] = @Order WHERE [ID] = @ID">
<UpdateParameters>
   <asp:Parameter Name="Name" Type="String" />
   <asp:Parameter Name="Order" Type="Int32" />
   <asp:Parameter Name="ID" Type="Int32" />
</UpdateParameters>
</asp:SqlDataSource>
<telerik:RadListBox RenderMode="Lightweight" ID="RadListBox1"
   runat="server"
   AllowAutomaticUpdates="true"
   AllowReorder="True"        
   AutoPostBackOnReorder="True"
   DataKeyField="ID"           
   DataSortField="Order"        
   DataTextField="Name"  
   DataValueField="ID"                
   DataSourceID="SqlDataSource1" >
</telerik:RadListBox> 
````

## Automatic item insert

In order to move items from one RadListBox to another you need to:

1. In the first RadListBox:

* Set the **AllowAutomaticUpdates="True"** (so the DataSource is updated automatically)

* Set the **AllowTransfer="True"** and **TransferToID="RadListBox2"** (Where "RadListBox2" is the ID of the second RadListBox)).

* Set the **AutoPostBackOnTransfer="True"**.

* Make sure you have set the **DataKeyField** property to the primary key of the table, from which you are transfering.

* Depending on what you want to implement, you have to:

* **Copy:** Set **TransferMode="Copy"** in the first RadListBox

* **Move:** Set **TransferMode="Move"** (default) in the first RadListBox and make sure that it's corresponding DataSource has its **DeleteCommand** set.

Here is an example:

````ASPNET
<asp:SqlDataSource ID="SqlDataSource1" runat="server"
   ConnectionString="<$ ConnectionStrings>"
   SelectCommand="SELECT [ID], [Name], [Order] FROM [Cities] ORDER BY [Order]"
   DeleteCommand="DELETE FROM [Cities] WHERE [ID] = @ID">
<DeleteParameters>
   <asp:Parameter Name="ID" Type="Int32" />
<//DeleteParameters>
</asp:SqlDataSource>
<telerik:RadListBox RenderMode="Lightweight" ID="RadListBox1"
   runat="server"
   AllowAutomaticUpdates="true"   
   AllowTransfer="true"
   TransferToID="RadListBox2"
   AutoPostBackOnTransfer="true"
   DataKeyField="ID"             
   DataTextField="Name"  
   DataValueField="ID"                
   DataSourceID="SqlDataSource1" >
</telerik:RadListBox> 
````

>note The names of the selected columns from the first **DataSource** have to be the same as the names of the **InsertParameters** of the second **DataSource** 
>


>note If you want to use the field, bound to the **DataKeyField** of the first RadListBox in the **InsertCommands** of the second ListBox, select it twice in the **SelectCommand** and give them different names. Then use the first one for the **DataKeyField** of the first RadListBox, and the second one for the **InsertCommand** of the second RadListBox.
>Here is an example:
>


````ASPNET
<asp:SqlDataSource ID="SqlDataSource1" runat="server"
   ConnectionString="<$ ConnectionStrings>"
   SelectCommand="SELECT [ID] as [DataKeyID], [ID] as [InsertID], [Name], [Order] FROM [Cities] ORDER BY [Order]"
   DeleteCommand="DELETE FROM [Cities] WHERE [ID] = @ID">
<DeleteParameters>
   <asp:Parameter Name="ID" Type="Int32" />
<//DeleteParameters>
</asp:SqlDataSource>
<telerik:RadListBox RenderMode="Lightweight" ID="RadListBox1"
   runat="server"
   AllowAutomaticUpdates="true"   
   AllowTransfer="true"
   TransferToID="RadListBox2"
   AutoPostBackOnTransfer="true"
   DataKeyField="DataKeyID"             
   DataTextField="Name"  
   DataValueField="ID"                
   DataSourceID="SqlDataSource1" >
</telerik:RadListBox> 
````

2. In the second RadListBox:

* Set the **AllowAutomaticUpdates="True"** (so the DataSource is updated automatically)

* Make sure that the DataSource has its **InsertCommand** set.

Here is an example:

````ASPNET
<asp:SqlDataSource ID="SqlDataSource2" runat="server"
   ConnectionString="<$ ConnectionStrings>"
   SelectCommand="SELECT [ID], [Name], [Order] FROM [Cities] ORDER BY [Order]"
   InsertCommand="INSERT INTO [Cities] ([Name], [Order]) VALUES (@Name, @Order)">
<InsertParameters>
   <asp:Parameter Name="Name" Type="String" />
   <asp:Parameter Name="Order" Type="Int32" />
</InsertParameters>
</asp:SqlDataSource>
<telerik:RadListBox RenderMode="Lightweight" ID="RadListBox2"
   runat="server"
   AllowAutomaticUpdates="true"  
   DataKeyField="ID"            
   DataTextField="Name"  
   DataValueField="ID"                
   DataSourceID="SqlDataSource1" >
</telerik:RadListBox> 
````

# See Also

 * [Overview]({%slug listbox/data-binding/overview%})

 * [Automatic DataBase Update Demo](https://demos.telerik.com/aspnet-ajax/listbox/examples/populatingwithdata/databaseupdate/defaultcs.aspx)
