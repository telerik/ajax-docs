---
title: How to Bind Checkbox in EditForm Template for RadGrid
description: Learn how to bind a checkbox in a RadGrid Edit Form Template.
type: how-to
page_title: Binding Edit Form Template with a Checkbox in RadGrid
slug: how-to-bind-checkbox-in-edit-form-template-for-radgrid
position: 
tags: RadGrid, Binding, EditForm
ticketid: 1447070
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.1023</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadGrid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Sometimes it is necessary to bind a Checkbox in a RadGrid Edit Form Template. This can be accomplished using the **Bind** method on the **DataField**.

## Solution
Using a BIT Data Type in a Database as shown below, use the Bind method in ASP.NET Web Forms.

### The Table Schema

````SQL
CREATE TABLE dbo.IsTrue
(
    Id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    IsTrue BIT NOT NULL,
);
GO
````

### The Grid Markup

````HTML
<telerik:RadGrid ID="RadGrid1" runat="server" GridLines="None"
    AutoGenerateColumns="False"
    ShowStatusBar="true"
    AllowAutomaticDeletes="True"
    AllowAutomaticInserts="True"
    AllowAutomaticUpdates="True"
    DataSourceID="SqlDataSource1">
    <MasterTableView CommandItemDisplay="Top" DataSourceID="SqlDataSource1"
        DataKeyNames="Id">
        <Columns>
            <telerik:GridEditCommandColumn>
            </telerik:GridEditCommandColumn>
            <telerik:GridBoundColumn UniqueName="Id" Display="true" HeaderText="ID" DataField="Id"></telerik:GridBoundColumn>
            <telerik:GridCheckBoxColumn UniqueName="IsTrue" HeaderText="Is True" DataField="IsTrue">
            </telerik:GridCheckBoxColumn>
            <telerik:GridButtonColumn CommandName="Delete" Text="Delete" UniqueName="column">
            </telerik:GridButtonColumn>
        </Columns>
        <EditFormSettings EditFormType="Template">
            <FormTemplate>
                <asp:CheckBox ID="Checkbox1" runat="server" Checked='<%# Bind("IsTrue") %>' />
                <asp:Button ID="btnUpdate" Text='<%# (Container is GridEditFormInsertItem) ? "Insert" : "Update" %>' runat="server" CommandName='<%# (Container is GridEditFormInsertItem) ? "PerformInsert" : "Update" %>'></asp:Button>&nbsp;
                <asp:Button ID="btnCancel" Text="Cancel" runat="server" CausesValidation="False" CommandName="Cancel"></asp:Button>
            </FormTemplate>
        </EditFormSettings>
    </MasterTableView>
    <ClientSettings>
        <ClientEvents OnRowDblClick="RowDblClick"></ClientEvents>
    </ClientSettings>
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:DefaultConnection %>"
    InsertCommand="INSERT INTO IsTrue (IsTrue) VALUES(@IsTrue)"
    SelectCommand="SELECT * FROM IsTrue"
    UpdateCommand="UPDATE IsTrue SET IsTrue = @IsTrue WHERE Id = @Id"
    DeleteCommand="DELETE FROM IsTrue WHEW Id = @Id">
    <InsertParameters>
        <asp:Parameter Name="IsTrue" Type="Boolean" />
    </InsertParameters>
    <UpdateParameters>
        <asp:Parameter Name="Id" Type="Int32" />
        <asp:Parameter Name="IsTrue" Type="Boolean" />
    </UpdateParameters>
    <DeleteParameters>
        <asp:Parameter Name="Id" Type="Int32"/>
    </DeleteParameters>
</asp:SqlDataSource>
````

## See Also

*   [RadGrid Edit Form Template Demo](https://demos.telerik.com/aspnet-ajax/grid/examples/data-editing/form-template-update/defaultcs.aspx)
