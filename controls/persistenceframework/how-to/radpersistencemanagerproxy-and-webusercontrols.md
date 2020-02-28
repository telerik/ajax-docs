---
title: RadPersistenceManagerProxy and WebUserControls
page_title: RadPersistenceManagerProxy and WebUserControls | RadPersistenceFramework for ASP.NET AJAX Documentation
description: Overview
slug: persistenceframework/radpersistencemanagerproxy-and-webusercontrols
tags: radpersistencemanagerproxy, webusercontrols
published: True
position: 0
---

# RadPersistManagerProxy and WebUserControls

**RadPersistenceManager** for ASP.NET AJAX allows a single instance of the control on the same page only. One cannot place manager in the main page and second instance inside a user control anymore. For such scenarios, you can use **RadPersistenceManagerProxy** inside a **WebUserControl** and configure it the same way as the manager. The following example demonstrates how to properly persist the state of **RadGrid** control inside a **WebUserControl**. 

**Content page**

````ASP.NET
<!DOCTYPE html>

<html xmlns="https://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
                <Scripts>
                    <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
                    <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
                    <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js" />
                </Scripts>
            </telerik:RadScriptManager>
            <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
            </telerik:RadAjaxManager>
            <telerik:RadPersistenceManager ID="RadPersistenceManager1" runat="server"></telerik:RadPersistenceManager>
            <uc1:WebUserControl runat="server" ID="WebUserControl1" />
            <uc1:WebUserControl runat="server" ID="WebUserControl2" />
        </div>
    </form>
</body>
</html>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
    (WebUserControl1.FindControl("RadPersistenceManagerProxy1") as RadPersistenceManagerProxy).UniqueKey = "1";
    (WebUserControl2.FindControl("RadPersistenceManagerProxy1") as RadPersistenceManagerProxy).UniqueKey = "2";
}
````

**WebUserControl**
````ASP.NET
<telerik:RadPersistenceManagerProxy ID="RadPersistenceManagerProxy1" runat="server">
    <PersistenceSettings>
        <telerik:PersistenceSetting ControlID="RadGrid1" />
    </PersistenceSettings>
</telerik:RadPersistenceManagerProxy>
<asp:Button Text="Save State" ID="Button1" OnClick="Button1_Click" runat="server" />
<asp:Button Text="Load State" ID="Button2" OnClick="Button2_Click" runat="server" />
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource" AutoGenerateColumns="false" AllowSorting="true" AllowFilteringByColumn="true"
    AllowPaging="true">
    <MasterTableView CommandItemDisplay="Top">
        <Columns>
            <telerik:GridBoundColumn DataField="Column1" HeaderText="Column1"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="Column2" HeaderText="Column2"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="Column3" HeaderText="Column3"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="Column4" HeaderText="Column4"></telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````
````C#
protected void Button1_Click(object sender, EventArgs e)
{
    RadPersistenceManager PersistenceManager1 = RadPersistenceManager.GetCurrent(Page);
    PersistenceManager1.StorageProviderKey = "GridState";
    PersistenceManager1.SaveState();
}
protected void Button2_Click(object sender, EventArgs e)
{
    RadPersistenceManager PersistenceManager1 = RadPersistenceManager.GetCurrent(Page);
    PersistenceManager1.StorageProviderKey = "GridState";
    PersistenceManager1.LoadState();
    RadGrid1.Rebind();
}

protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GeneratingTable();
}
private DataTable GeneratingTable()
{
    DataTable table = new DataTable();
    table.Columns.Add("Column1");
    table.Columns.Add("Column2");
    table.Columns.Add("Column3");
    table.Columns.Add("Column4");

    for (int i = 0; i < 20; i++)
    {
        table.Rows.Add("Col1Row" + i, "Col2Row" + i, "Col3Row" + i, "Col4Row" + i);
    }

    return table;
}
````

## See Also

 * [RadPersistenceManagerProxy]({%slug persistenceframework/radpersistencemanagerproxy %})
 
 * [RadPersistenceManager]({%slug persistenceframework/radpersistencemanager %})
