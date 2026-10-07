---
title: Customize Hyperlinks inside RadGrid
page_title: Customize Hyperlinks inside RadGrid - RadGrid
description: Learn how to customize hyperlink colors and hover styles inside Telerik UI for ASP.NET AJAX RadGrid with and without a skin.
slug: grid/appearance-and-styling/customize-hyperlinks-inside-radgrid
components: ["grid"]
tags: customize,hyperlinks,inside,radgrid
published: True
position: 8
---

# Customize Hyperlinks inside RadGrid



## Styling Hyperlinks with a Skin

You can use CSS selectors to customize hyperlink appearance. Define the CSS rules in classes and apply them to the grid through the **CssClass** property.

The following example makes links in the **GridHyperLinkColumn** brown by default. The links become orange and larger when a user hovers over or has visited them.

Choose the example that matches the **Skin** property configuration of your grid.

>note If you do not set the **Skin** property, the `Default` skin is used.


> caption Example: Styling hyperlinks when a RadGrid skin is enabled

````ASP.NET
<html>
<head>
  <title>Customize hyperlinks in Telerik RadGrid</title>
  <style>
    div.RadGrid_Default .rgRow a,
    div.RadGrid_Default .rgAltRow a
    {
      color: brown;
    }
    div.RadGrid_Default .rgRow a:hover,
    div.RadGrid_Default .rgRow a:visited,
    div.RadGrid_Default .rgAltRow a:hover,
    div.RadGrid_Default .rgAltRow a:visited
    {
      color: orange;
      font-size: 15px;
    }
  </style>
</head>
<body>
  <form id="Form1" method="post" runat="server">
  <telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" CssClass="RadGrid" runat="server" AutoGenerateColumns="False"
    Skin="Default">
    <MasterTableView>
      <Columns>
        <telerik:GridBoundColumn UniqueName="ContactName" HeaderText="Contact Name" DataField="ContactName">
        </telerik:GridBoundColumn>
        <telerik:GridBoundColumn UniqueName="Address" HeaderText="Address" DataField="Address">
        </telerik:GridBoundColumn>
        <telerik:GridHyperLinkColumn NavigateUrl="http://www.sharepointcontrols.com" UniqueName="HyperLinkColumn"
          HeaderText="Hyperlink Column" Text="link">
        </telerik:GridHyperLinkColumn>
      </Columns>
    </MasterTableView>
  </telerik:RadGrid>
  <a href="http://www.sharepointcontrols.com">Open the linked site</a>
  </form>
</body>
</html>
````



>note This example uses the `Default` skin. To use another skin, replace `Default` in `RadGrid_Default` with the relevant skin name, such as `RadGrid_[SkinName]`.


## Styling Hyperlinks without a Skin

Use this approach when the **Skin** property is set to an empty string (`""`).

> caption Example: Styling hyperlinks when a RadGrid skin is disabled

````ASP.NET
<html>
<head>
  <title>Customize hyperlinks in Telerik RadGrid</title>
  <style>
    .RadGrid a     
    {
      color: brown;
    }
    .RadGrid  a:hover,
    .RadGrid  a:visited     
    {
      color: orange;
      font-size: 15px;
    }
  </style>
</head>
<body>
  <form id="Form2" method="post" runat="server">
  <telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" CssClass="RadGrid" runat="server" AutoGenerateColumns="False"
    Skin="">
    <MasterTableView>
      <Columns>
        <telerik:GridBoundColumn UniqueName="ContactName" HeaderText="Contact Name" DataField="ContactName">
        </telerik:GridBoundColumn>
        <telerik:GridBoundColumn UniqueName="Address" HeaderText="Address" DataField="Address">
        </telerik:GridBoundColumn>
        <telerik:GridHyperLinkColumn NavigateUrl="http://www.sharepointcontrols.com" UniqueName="HyperLinkColumn"
          HeaderText="Hyperlink Column" Text="link">
        </telerik:GridHyperLinkColumn>
      </Columns>
    </MasterTableView>
  </telerik:RadGrid>
  <a href="http://www.sharepointcontrols.com">Open the linked site</a>
  </form>
</body>
</html>
````

## See Also

* [RadGrid Skins]({%slug grid/appearance-and-styling/skins%})
* [Customizing Row Appearance]({%slug grid/appearance-and-styling/customizing-row-appearance%})


