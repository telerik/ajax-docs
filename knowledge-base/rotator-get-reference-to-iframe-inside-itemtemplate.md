---
title: Get reference to iframe inside ItemTemplate
description: Get reference to iframe inside ItemTemplate. Check it now!
type: how-to
page_title: Get reference to iframe inside ItemTemplate
slug: rotator-get-reference-to-iframe-inside-itemtemplate
res_type: kb
---

## Description

Sometimes, one might want to get a reference to an **iframe** element inside the ItemTemplate of the Rotator

## Solution

The easiest way to get the iframe element would be to attach a handler to the Rotator's [`ItemDataBound`]({%slug rotator/server-side-programming/events%}) server-side event and find the target iframe element in the current item:

````ASP.NET
<telerik:RadRotator RenderMode="Lightweight" ID="RadRotator1" runat="server" OnItemDataBound="RadRotator1_ItemDataBound">
    <ItemTemplate>
        <iframe id="iframe1" runat="server">
            <asp:Image runat="server" ID="image1" />
        </iframe>
    </ItemTemplate>
</telerik:RadRotator>
````

````C#
private void Page_Load(object sender, System.EventArgs e)
{
    if (!IsPostBack)
    {
        RadRotator1.DataSource = GetRotatorDataSource();
        RadRotator1.DataBind();
    }
}

private string[] GetRotatorDataSource()
{
    string[] clients = { "ANATR", "ANTON", "BOTTM", "CACTU", "CENTC", "ERNSH", "LAUGB", "MAISD", "MEREP", "OCEAN" };
    return clients;
}

protected void RadRotator1_ItemDataBound(object sender, RadRotatorEventArgs e)
{
    HtmlIframe iframe = e.Item.Controls[1] as HtmlIframe; // Find the iframe server control
}
````




