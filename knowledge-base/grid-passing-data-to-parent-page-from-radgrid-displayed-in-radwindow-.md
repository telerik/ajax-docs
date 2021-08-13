---
title: Passing data to parent page from RadGrid displayed in RadWindow 
description: Passing data to parent page from RadGrid displayed in RadWindow . Check it now!
type: how-to
page_title: Passing data to parent page from RadGrid displayed in RadWindow 
slug: grid-passing-data-to-parent-page-from-radgrid-displayed-in-radwindow
res_type: kb
---


 
   
 **HOW-TO**   
 Pass data to parent page from RadGrid displayed in RadWindow   
   
 **DESCRIPTION**  
 There are cases in which you may want to visualize grid instance in pop-up window and channel data to the opener page in par with the user actions undertook in the modal window. This article demonstrates how to combine the interaction between RadGrid and RadWindow with the data transfer.  
   
 **SOLUTION**
 The forthcoming code implementation presents how to fetch the data from the checked records in the grid which resides in a modal RadWindow object. The main parts of the logic are outlined in the points below:  
   
 
1. Wire the **OnCheckedChanged** event of the checkbox residing in the template grid column
2. Insert the data for the selected grid records in a List of strings object and store it in a Session variable (you may also prefer to use different technique to preserve the info for the selected items)
3. Assign function to the **OnClientClick** attribute of the button shown under the grid which closes the window instance and reloads the parent page. The data from the selected records will be rendered in a label control on the main page.

 
Those are the code snippets from the sample application available [here](files/grid-inside-radwindow.zip):  
   
 **Default.aspx**
 
 ````ASPX
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableScriptLocalization="True">
    <Scripts>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js">
        </asp:ScriptReference>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js">
        </asp:ScriptReference>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js">
        </asp:ScriptReference>
    </Scripts>
</telerik:RadScriptManager>
<div>
    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
        <script type="text/javascript">
            function ShowDialog() {
                window.radopen(null, "UserListDialog");
            }
        </script>
    </telerik:RadCodeBlock>
    <input id="Button1" type="button" value="Open grid window" onclick="ShowDialog()" />
    <telerik:RadWindowManager ID="RadWindowManager1" runat="server">
        <Windows>
            <telerik:RadWindow ID="UserListDialog" runat="server" Width="600px" Height="600px"
                Modal="true" Title="User List Dialog" NavigateUrl="SelectionList.aspx">
            </telerik:RadWindow>
        </Windows>
    </telerik:RadWindowManager>
    <br />
    <asp:Label ID="Label1" runat="server"></asp:Label>
</div>
 ````
 
   
 
   
 **Default.aspx.cs**  

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (Session["returnedValues"] != null)
    {
        List<string> results = (List<string>)Session["returnedValues"];
        while (results.Count > 0)
        {
            Label1.Text += results[results.Count-1];
            results.RemoveAt(results.Count - 1);
        }
    }
}
````
   
 
   
 **Default.aspx.vb**  
   
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
    If Session("returnedValues") IsNot Nothing Then
        Dim results As List(Of String) = DirectCast(Session("returnedValues"), List(Of String))
        While results.Count > 0
            Label1.Text += results(results.Count - 1)
            results.RemoveAt(results.Count - 1)
        End While
    End If
End Sub
````
 
   
 
   
 **SelectionList.aspx**  
   
````ASPX
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
    <Scripts>
        <asp:ScriptReference Assembly="Telerik.Web.UI"
            Name="Telerik.Web.UI.Common.Core.js">
        </asp:ScriptReference>
        <asp:ScriptReference Assembly="Telerik.Web.UI"
            Name="Telerik.Web.UI.Common.jQuery.js">
        </asp:ScriptReference>
        <asp:ScriptReference Assembly="Telerik.Web.UI"
            Name="Telerik.Web.UI.Common.jQueryInclude.js">
        </asp:ScriptReference>
    </Scripts>
</telerik:RadScriptManager>
<div>
    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
        <script type="text/javascript">
            function GetRadWindow() {
                var oWindow = null;
                if (window.radWindow) oWindow = window.radWindow; //Will work in Moz in all cases, including clasic dialog
                else if (window.frameElement.radWindow) oWindow = window.frameElement.radWindow; //IE (and Moz az well)
  
                return oWindow;
            }
            function CloseAndReload() {
                var oWnd = GetRadWindow();
                oWnd.BrowserWindow.location.reload();
                oWnd.close();
            }
        </script>
    </telerik:RadCodeBlock>
    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
        <AjaxSettings>
            <telerik:AjaxSetting AjaxControlID="RadGrid1">
                <UpdatedControls>
                    <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
                </UpdatedControls>
            </telerik:AjaxSetting>
        </AjaxSettings>
    </telerik:RadAjaxManager>
    <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" GridLines="None"
        Width="95%" CellSpacing="0">
        <ExportSettings>         
            <Pdf FontType="Subset" PaperSize="Letter" />
            <Excel Format="Html" />
            <Csv ColumnDelimiter="Comma" RowDelimiter="NewLine" />
        </ExportSettings>
        <MasterTableView CommandItemDisplay="None" CurrentResetPageIndexAction="SetPageIndexToFirst"
            DataSourceID="SqlDataSource1" Dir="LTR" Frame="Border" TableLayout="Auto">
            <RowIndicatorColumn CurrentFilterFunction="NoFilter" FilterListOptions="VaryByDataType"
                Visible="False">
                <HeaderStyle Width="20px" />
            </RowIndicatorColumn>
            <ExpandCollapseColumn CurrentFilterFunction="NoFilter" FilterListOptions="VaryByDataType"
                Resizable="False" Visible="False">
                <HeaderStyle Width="20px" />
            </ExpandCollapseColumn>
            <EditFormSettings>
                <EditColumn CurrentFilterFunction="NoFilter" FilterListOptions="VaryByDataType">
                </EditColumn>
            </EditFormSettings>
            <Columns>
                <telerik:GridTemplateColumn>
                    <ItemTemplate>
                        <asp:CheckBox ID="CheckBox1" runat="server" AutoPostBack="True" OnCheckedChanged="CheckBox1_CheckedChanged" />
                    </ItemTemplate>
                </telerik:GridTemplateColumn>
            </Columns>
        </MasterTableView>
    </telerik:RadGrid>
    <asp:Button ID="btnGetValues" Text="Get selected and close" runat="server" OnClientClick="CloseAndReload();">
    </asp:Button>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" SelectCommand="SELECT TOP 10 CustomerID, ContactName, ContactTitle FROM Customers"
        ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"></asp:SqlDataSource>
</div>
````

**SelectionList.aspx.cs**

````C#
protected List<string> returnedValues = new List<string>(); 
  
protected void CheckBox1_CheckedChanged(object sender, EventArgs e)
{
    CheckBox checkBox = sender as CheckBox;
  
    if (Session["returnedValues"] != null)
    {
        returnedValues = (List<string>)Session["returnedValues"];
    }
    GridDataItem dataItem = (GridDataItem)(sender as CheckBox).NamingContainer;
    string selectedCustomer = "<b>Selected customer data:</b> " + dataItem["CustomerID"].Text +
        " : " + dataItem["ContactName"].Text + " : " + dataItem["ContactTitle"].Text + "<br/>";
    if (checkBox.Checked)
    {
        returnedValues.Add(selectedCustomer);         
    }
    else
    {
        returnedValues.Remove(selectedCustomer);
    }
    Session["returnedValues"] = returnedValues;
}
````

````VB
Protected returnedValues As New List(Of String)()
 
Protected Sub CheckBox1_CheckedChanged(ByVal sender As Object, ByVal e As EventArgs)
    Dim checkBox As CheckBox = CType(sender, CheckBox)
    If Session("returnedValues") IsNot Nothing Then
        returnedValues = DirectCast(Session("returnedValues"), List(Of String))
    End If
    Dim dataItem As GridDataItem = DirectCast((TryCast(sender, CheckBox)).NamingContainer, GridDataItem)
    Dim selectedCustomer As String = "<b>Selected customer data:</b> " & dataItem("CustomerID").Text & " : " & dataItem("ContactName").Text & " : " & dataItem("ContactTitle").Text & "<br/>"
    If checkBox.Checked Then
        returnedValues.Add(selectedCustomer)
    Else
        returnedValues.Remove(selectedCustomer)
    End If
    Session("returnedValues") = returnedValues
End Sub
````


  