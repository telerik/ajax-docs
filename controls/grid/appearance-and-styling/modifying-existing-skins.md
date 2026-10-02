---
title: Modifying Existing Skins
page_title: Modifying Existing Skins - RadGrid
description: Learn how to modify Telerik UI for ASP.NET AJAX RadGrid skin CSS classes, register external skin files, and inspect generated HTML.
slug: grid/appearance-and-styling/modifying-existing-skins
components: ["grid"]
tags: modifying,existing,skins
published: True
position: 2
---

# Modifying Existing Skins

A RadGrid skin is a set of images and a CSS file that controls the grid's appearance. Review [Applying RadGrid skins]({%slug grid/appearance-and-styling/skins%}) to learn how to apply non-embedded or custom skins.

## CSS Classes Description

Before the Q1 2009 release, each CSS class had a suffix with the skin name, such as `_Vista`. The table below shows the classes used by the embedded Telerik RadGrid Default skin. Non-embedded skin class names follow the same concepts.

### Before the Q1 2009 Release of RadGrid for ASP.NET AJAX

> caption Table 1: CSS classes used by the pre-Q1 2009 Default skin

| CSS Class | Description |
| ------ | ------ |
| **div.RadGrid_Default** |The default Telerik RadGrid wrapper **<div>** . All Telerik RadGrid elements are placed inside it. Rendering Telerik RadGrid in one tag helps further integrations with other controls (Telerik RadAjax and ASP.NET AJAX for example).|
| **.RadGrid_Default,.RadGrid_Default a** |A reference to any table cell (`<td>`) and link (`<a>`) inside the main class. Using these two classes you can skin the grid cells and links in Telerik RadGrid cells.|
| **.MasterTable_Default** |A class for customizing the master table view|
| **.MasterTable_Default td,.MasterTable_Default th** |References to any table `<td>` and table header `<th>` belonging to that master table|
| **.GridDataDiv_Default** |For skinning the grid in scrolling mode.|
| **th.GridHeader_Default,th.ResizeHeader_Default** |Header class `<th>` for customizing the Telerik RadGrid header.|
| **.GridHeaderOver_Default.GridHeader_Default a.GridHeaderDiv_Default** |For skinning the hovered header item. `<a>` element belonging to the header classFor skinning the header row when scrolling the grid.|
| **.GridRow_Default,.GridRow_Default td**  **.GridRowOver_Default** |For skinning the normal grid row. For skinning the hovered grid row.|
| **.GridAltRow_Default,.GridAltRow_Default td** |For skinning the alternate grid row (zebra style tables).|
| **.SelectedRow_Default,**  **.SelectedRow_Default**  **td** |Skinning the currently selected row.|
| **.ActiveRow_Default,.ActiveRow_Default td** |Active row class - the focused row skinning|
| **.GridEditRow_Default,.GridEditRow_Default td** |For skinning the row that is currently in edit mode.|
| **.GridEditForm_Default** |For skinning the edit form of the row that is currently in edit mode.|
| **.GridCommandRow_Default** |For skinning the CommandItem.|
| **.GridGroupFooter_Default,.GridGroupFooter_Default td** |For skinning the group footers (meaning with grouping feature enabled).Defaults to the *GroupFooter_[Skin]/GroupFooter_[Skin] td* classes.|
| **.GridFilterRow_Default** |For skinning the FilteringItem.|
| **.GridPager_Default,**  **.GridPager_Default**  **td** |Skinning the grid pager|
| **.GridFooter_Default,.GridFooter_Default td.GridFooterDiv_Default** |A reference to the grid footer.For skinning the grid footer when scrolling the grid.|
| **.GridFooter_Default a** |Reference to any link `<a>` belonging to the footer.|
| **.GridPager_Default a** |Reference to any link `<a>` belonging to the pager.|
| **.GridPager_Default a:hover,.GridFooter_Default a:hover** |Reference to any hovered link `<a>` in the pager or footer.|
| **tr.GroupHeader_Default td** |For skinning the group panel row (grouping must be enabled).|
| **.GroupPanel_Default** |For skinning the group panel (grouping must be enabled).|
| **.GroupPanelItems_Default** |Reference to items belonging to the group panel (grouping must be enabled).|
| **td.GridHeader_Default input** |Reference to the `<input>` element belonging to the grid header (grouping must be enabled)|
| **.GridCaption_Default** |Reference to the table caption in each level of the grid hierarchy|
| **.GridToolTip_Default** |For customizing the scroller when the virtual scrolling feature is enabled (`<Scrolling AllowScroll="True" EnableVirtualScrollPaging="True" UseStaticHeaders="True" />`). Applicable for the column resizer tooltip as well|
| **.GridRowSelector_Default** |For styling the colored rectangle when selecting multiple rows by dragging.|
| **.GridItemDropIndicator_Default** |Defines the drop indicator appearance when utilizing drag and drop of grid records.|

### After the Q1 2009 Release of RadGrid for ASP.NET AJAX

The `[SkinName]` part is missing from the CSS class names except for external grid elements.

> caption Table 2: CSS classes used by the post-Q1 2009 Default skin

| CSS Class | Description |
| ------ | ------ |
| **div.RadGrid_[SkinName]** |The default Telerik RadGrid wrapper `<div>`. All Telerik RadGrid elements are placed inside it. Rendering Telerik RadGrid in one tag helps further integrations with other controls (Telerik RadAjax and ASP.NET AJAX for example).|
| **.RadGrid_[SkinName],**  **.RadGridRTL_[SkinName],.RadGrid_[SkinName] a** |A reference to any table cell (`<td>`) and link (`<a>`) inside the main class. Using these two classes you can skin the grid cells and links in Telerik RadGrid cells.|
| **.rgMasterTable** |A class for customizing the master table view|
| **.rgClipCells** |An additional class applied to the master table view when its table layout is fixed.|
| **.rgMasterTable td,.rgMasterTable th** |References to any table `<td>` and table header `<th>` belonging to that master table|
| **.rgDataDiv** |For skinning the grid in scrolling mode.|
| **th.rgHeader,th.rgResizeCol** |Header class `<th>` for customizing the Telerik RadGrid header.|
| **.rgHeaderOver.rgHeaderDiv a.rgHeaderDiv** |For skinning the hovered header item, the `<a>` element belonging to the header classFor skinning the header row when scrolling the grid.|
| **.rgRow,.rgRow td**  **.rgHoveredRow** |For skinning the normal grid row.For skinning the hovered grid row.|
| **.rgAltRow,.rgAltRow td** |For skinning the alternate grid row (zebra style tables).|
| **.rgSelectedRow,**  **.rgSelectedRow**  **td** |Skinning the currently selected row.|
| **.rgActiveRow,.rgActiveRow td** |Active row class - the focused row skinning|
| **.rgEditRow,.rgEditRow td** |For skinning the row that is currently in edit mode.|
| **.rgEditForm** |For skinning the edit form of the row that is currently in edit mode.|
| **.rgCommandRow** |For skinning the CommandItem.|
| **.rgFooter,.rgFooter td** |For skinning the group footers (meaning with grouping feature enabled).Defaults to the *GroupFooter_[Skin]/GroupFooter_[Skin] td* classes.|
| **.rgFilterRow** |For skinning the FilteringItem.|
| **.rgPager,**  **.rgPager**  **td** |Skinning the grid pager|
| **.rgFooter,.rgFooter td.rgFooterDiv** |A reference to the grid footer.For skinning the grid footer when scrolling the grid.|
| **.rgFooter a** |Reference to any link `<a>` belonging to the footer.|
| **.rgPager a** |Reference to any link `<a>` belonging to the pager.|
| **.rgPager a:hover,.rgFooter a:hover** |Reference to any hovered link `<a>` in the pager or footer.|
| **tr.rgGroupHeader td** |For skinning the group panel row (grouping must be enabled).|
| **.rgGroupPanel** |For skinning the group panel (grouping must be enabled).|
| **.rgGroupItem** |Reference to items belonging to the group panel (grouping must be enabled).|
| **td.rgHeader input** |Reference to the `<input>` element belonging to the grid header (grouping must be enabled)|
| **.rgCaption** |Reference to the table caption in each level of the grid hierarchy|
| **.GridToolTip_[SkinName]** |For customizing the scroller when the virtual scrolling feature is enabled (`<Scrolling AllowScroll="True" EnableVirtualScrollPaging="True" UseStaticHeaders="True" />`). Applicable for the column resizer tooltip as well|
| **.GridRowSelector_[SkinName]** |For styling the colored rectangle when selecting multiple rows by dragging.|
| **.GridItemDropIndicator_[SkinName]** |Defines the drop indicator appearance when utilizing drag and drop of grid records.|
| **.rgDetailTable** |A class for customizing the detail tables in hierarchical grid|
| **.GridReorderTop_[SkinName]** |A class to customize the embedded top image indicator when reordering grid columns|
| **.GridReorderBottom_[SkinName]** |A class to customize the embedded bottom image indicator when reordering grid columns|
| **.GridReorderTopImage_[SkinName]** |A class to customize the top image indicator when reordering grid columns and the embedded skins are disabled for the grid|
| **.GridReorderBottomImage_[SkinName]** |A class to customize the bottom image indicator when reordering grid columns and the embedded skins are disabled for the grid|
| **.rgVScroll** |A class to customize the appearance of the RadGrid virtual scroll|
| **.rgNoRecords** |A class to customize the visual appearance of the NoRecords template/text|
| **.GridDraggedRows_[SkinName]** |A class applied to the <div> element, which wraps the dragged rows. The same <div> element also has the "RadGrid" and "RadGrid_SkiName" classes.|

>note To apply the old embedded skins of RadGrid for ASP.NET AJAX as external with versions of the grid after Q1 2009 (2009.1.311), download them from the [Skin Exchange article]({%slug common-skin-exchange%}) and follow the steps concerning how to register an external skin from the [Skin Registration]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}) and the [Disabling Embedded Resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) topic.
>


RadGrid for ASP.NET AJAX uses **RadContextMenu** as its filtering menu. Style the filtering menu through the **RadContextMenu** instance and its appearance settings.

To summarize, in order to modify an existing RadGrid skin, either take advantage of the css selectors "weight" as depicted in the [How To Override Styles in a RadControl for ASP.NET AJAX' Embedded Skin
](https://www.telerik.com/blogs/how-to-override-styles-in-a-radcontrol-for-asp-net-ajax-embedded-skin) blog post or:

1. Set the **Skin** property of the RadGrid to an existing skin name.

1. Set the **EnableEmbeddedSkins** property to `False`.

1. Add links to the RadGrid and RadMenu CSS files on the page or master page:

> caption Example: Registering external RadGrid and RadMenu skin files

````ASP.NET
<link href="~/Skins/Telerik/Grid.Telerik.css" rel="stylesheet" type="text/css" runat="server" />
<link href="~/Skins/Telerik/Menu.Telerik.css" rel="stylesheet" type="text/css" runat="server" />
````



For skins with different normal and alternating row styles, disable the zebra effect by setting **ClientSettings > EnableAlternatingItems** to `false`.

## Telerik RadGrid HTML Structure

The following examples show how RadGrid generates its HTML structure.

> caption Example: RadGrid wrapper and master table structure

````ASP.NET
  <pre xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5">
<div class="RadGrid_WebBlue">
    <div>
      < input type="hidden" />
    </div>
    <script type="text/javascript" src=""></script>
    <script type="text/javascript" src=""></script>
    <span id="RadGrid1StyleSheetHolder"></span>
    <script type="text/javascript">
      // generated script block goes here
    </script>
    <table class="rgMasterTable">
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup>
</pre>
````

The following markup represents the RadGrid and `MasterTableView` definition.

> caption Example: RadGrid header structure

````ASP.NET
  <pre xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5">
<thead>
    <tr>
      <th class="rgResizeCol">
      </th>
      <th class="rgHeader">
        <a href="">Table Header 1</a>
      </th>
      <th class="rgHeader">
        <a href="">Table Header 2</a>
      </th>
      <th class="rgHeader">
        <a href="">Table Header 3</a>
      </th>
      <th class="rgHeader">
        <a href="">Table Header 4</a>
      </th>
      <th class="rgHeader">
        <a href="">Table Header 5</a>
      </th>
      <th class="rgHeader">
        <a href="">Table Header 6</a>
      </th>
    </tr>
  </thead>
</pre>
````

> caption Figure 1: RadGrid header structure

![RadGrid header structure](images/grd_skin_header.png)

The following markup represents the RadGrid footer and pager.

> caption Example: RadGrid footer and pager structure

````ASP.NET
  <pre xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5">       
<tfoot>
    <tr class="rgPager">
      <td colspan="7">
        <span></span><a href=""></a>
      </td>
    </tr>
  </tfoot>
</pre>
````

> caption Figure 2: RadGrid pager

![RadGrid pager](images/grd_skin_Pager.png)

> caption Example: RadGrid row structure

````ASP.NET
  <pre xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5">
<tbody>
    <tr class="rgRow">
      <td>
        Item
      </td>
      <td>
        Item
      </td>
      <td>
        Item
      </td>
    </tr>
    <tr class="rgAltRow">
      <td>
        Item
      </td>
      <td>
        Item
      </td>
      <td>
        Item
      </td>
    </tr>
    <tr class="rgHoveredRow">
      <td>
        Item
      </td>
      <td>
        Item
      </td>
      <td>
        Item
      </td>
    </tr>
  </tbody>
    </table>
    <script type="text/javascript">
      // generated script block goes here
    </script>
</div>
</pre>
````

> caption Figure 3: RadGrid normal, alternating, and selected row styles

![RadGrid normal row style](images/grd_skin_NormalItem.png)
![RadGrid alternating row style](images/grd_skin_AlternatingItem.png)
![RadGrid selected row style](images/grd_skin_SelectedItem.png)

## Creating a Custom Skin (Basic Steps)

The easiest way to create a custom RadGrid skin is to copy an existing skin and modify its CSS settings. Follow these steps:

1. Copy an existing skin, including its CSS and images. For example, copy the Vista skin.

1. Modify the corresponding CSS class definitions in the CSS file.

1. Change the image URLs referenced in the CSS file.

1. Register the CSS file in the `head` section of the page.

1. Set `Skin="<MyCustomSkinName>"` and `EnableEmbeddedSkins="false"` for RadGrid.

>note  RadGrid may create other UI controls as part of its elements (slider pager, filtering menu, date pickers in GridDateTimeColumns, etc.) and you will need to perform the same steps for these controls as well!
>

For more details on the aforementioned approach to create a custom skin for RadGrid, you may also consider utilizing the [Telerik ThemeBuilder for ASP.NET AJAX](https://themebuilder.telerik.com/) tool to modify existing skins/create new custom skins.

## See Also

 * [Telerik ThemeBuilder for ASP.NET AJAX](https://themebuilder.telerik.com/)


 
