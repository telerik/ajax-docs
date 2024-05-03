---
title: Single RadioButton check at a time with row selection
description: Single RadioButton check at a time with row selection. Check it out!
type: how-to
page_title: Single RadioButton check at a time with row selection. | RadGrid
slug: grid-single-radiobutton-check-at-a-time-with-row-selection
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms Grid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

This sample represents a symbiosis of radio check and row selection by means of a radio button residing in item template of RadGrid template column

## Solution

Steps to be followed:

1. Call the function `setGrdRadioButtonOnClick()` in the **Page_Load** to find each radio button in the Grid items.
1. Add **OnClick** attribute to the radio button to invoke the javascript function `SelectMeOnly` which will select only one button at a time.
1. Select the row which corresponds to the checked radio button in the RadioButton's `CheckedChanged` event handler.

````ASP.NET
<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <telerik:RadGrid ID="RadGrid1" runat="server" GridLines="None"
            OnNeedDataSource="RadGrid1_NeedDataSource" Skin="Glassy" EnableAJAX="True" Width="668px">
            <MasterTableView>
                <Columns>
                    <telerik:GridTemplateColumn UniqueName="TemplateColumn" HeaderText="Select ">
                        <ItemTemplate>
                            &nbsp;<asp:RadioButton ID="rdSelect" runat="server"   AutoPostBack="True" OnCheckedChanged="rdSelect_CheckedChanged" />
                        </ItemTemplate>
                    </telerik:GridTemplateColumn>
                </Columns>
                <ExpandCollapseColumn Visible="False">
                    <HeaderStyle Width="19px" />
                </ExpandCollapseColumn>
                <RowIndicatorColumn Visible="False">
                    <HeaderStyle Width="20px" />
                </RowIndicatorColumn>
            </MasterTableView>
            <ClientSettings>
                <Selecting AllowRowSelect="True" />
            </ClientSettings>
        </telerik:RadGrid></div>
    </form>
</body>
</html>
````

````JavaScript
function SelectMeOnly(objRadioButton, grdName) {
    var i, obj;
    for (i = 0; i < document.all.length; i++) {
        obj = document.all(i);

        if (obj.type == "radio") {
            if (objRadioButton.id.substr(0, grdName.length) == grdName) {
                if (objRadioButton.id == obj.id) {
                    obj.checked = true;
				}
                else {
                    obj.checked = false;
				}
			}
        }
    }
}
````

````C#
public static DataTable dtTable;

protected void Page_Load(object sender, EventArgs e)
{
    //Function to select one Radio Button at a time 
    setGrdRadioButtonOnClick();
}

protected void RadGrid1_NeedDataSource(object source, Telerik.WebControls.GridNeedDataSourceEventArgs e)
{
    //Populate the Radgrid  
    OleDbConnection MyOleDbConnection = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("~//App_Data//NWind.mdb"));
    //the database in the web application root   

    OleDbDataAdapter MyOleDbDataAdapter = new OleDbDataAdapter();

    dtTable = new DataTable();

    MyOleDbConnection.Open();
    try
    {

        string query = "SELECT CategoryID,CategoryName FROM Categories";
        MyOleDbDataAdapter.SelectCommand = new OleDbCommand(query, MyOleDbConnection);
        MyOleDbDataAdapter.Fill(dtTable);

        RadGrid1.DataSource = dtTable;
    }
    finally
    {
        MyOleDbConnection.Close();
    }
}

public void setGrdRadioButtonOnClick()
{
    int i;
    RadioButton radioButton;
    for (i = 0; i < RadGrid1.Items.Count; i++)
    {
        radioButton = (RadioButton)RadGrid1.Items[i].FindControl("rdSelect");
        radioButton.Attributes.Add("OnClick", "SelectMeOnly(" + radioButton.ClientID + ", " + "'RadGrid1'" + ")");
    }
}

protected void rdSelect_CheckedChanged(object sender, EventArgs e)
{
    ((sender as RadioButton).Parent.Parent as GridItem).Selected = (sender as RadioButton).Checked;
}
````
````VB
'Declare a global DataTable dtTable    
Public Shared dtTable As DataTable

Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles MyBase.Load
    'Function to select one Radio Button at a time    
    setGrdRadioButtonOnClick()
End Sub

Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.WebControls.GridNeedDataSourceEventArgs)
    'Populate the Radgrid     
    Dim MyOleDbConnection As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("~//App_Data//NWind.mdb"))
    'the database in the web application root      

    Dim MyOleDbDataAdapter As New OleDbDataAdapter()

    dtTable = New DataTable()

    MyOleDbConnection.Open()
    Try
        Dim query As String = "SELECT CategoryID,CategoryName FROM Categories"
        MyOleDbDataAdapter.SelectCommand = New OleDbCommand(query, MyOleDbConnection)
        MyOleDbDataAdapter.Fill(dtTable)

        RadGrid1.DataSource = dtTable
    Finally
        MyOleDbConnection.Close()
    End Try
End Sub

Public Sub setGrdRadioButtonOnClick()
    Dim i As Integer
    Dim radioButton As RadioButton
    i = 0
    While i < RadGrid1.Items.Count

        radioButton = CType(RadGrid1.Items(i).FindControl("rdSelect"), RadioButton)


        radioButton.Attributes.Add("OnClick", "SelectMeOnly(" & radioButton.ClientID & ", " & "'RadGrid1'" & ")")

    End While
End Sub

Protected Sub rdSelect_CheckedChanged(ByVal sender As Object, ByVal e As EventArgs)
    CType(CType(sender, RadioButton).Parent.Parent, GridItem).Selected = CType(sender, RadioButton).Checked
End Sub
````

[Download the sample](files/grid-single-radiobutton-check-at-a-time-with-row-selection.zip)



