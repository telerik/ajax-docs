---
title: Modifying Existing Skins
page_title: Modifying Existing Skins | UI for ASP.NET AJAX Documentation
description: Modifying Existing Skins
slug: grid/appearance-and-styling/modifying-existing-skins
tags: modifying,existing,skins
published: True
position: 2
---

# Modifying Existing Skins



A skin is a set of images and a CSS file used by Telerik RadGrid for setting its appearance. Review [this section]({%slug grid/appearance-and-styling/skins%}) from the documentation to understand how to apply non-embedded/custom skins for the control.

## CSS Classes Description

Each CSS class should have a suffix with the name of the skin, e.g. "___Vista__" before the Q1 2009 release of the product. The table below shows the classes used by the embedded Telerik RadGrid Default skin (the non-embedded skins css classes signature conforms to the same concepts):

__Prior to the Q1 2009 release of RadGrid for ASP.NET AJAX__


>caption  

| CSS Class | Description |
| ------ | ------ |
| __div.RadGrid_Default__ |The default Telerik RadGrid wrapper __<div>__ . All Telerik RadGrid elements are placed inside it. Rendering Telerik RadGrid in one tag helps further integrations with other controls (Telerik RadAjax and ASP.NET AJAX for example).|
| __.RadGrid_Default,.RadGrid_Default a__ |A reference to any table cell (<td>) and link (<a>) inside the main class. Using these two classes you can skin the grid cells and links in Telerik RadGrid cells.|
| __.MasterTable_Default__ |A class for customizing the master table view|
| __.MasterTable_Default td,.MasterTable_Default th__ |References to any table <td> and table header <th> belonging to that master table|
| __.GridDataDiv_Default__ |For skinning the grid in scrolling mode.|
| __th.GridHeader_Default,th.ResizeHeader_Default__ |Header class <th> for customizing the Telerik RadGrid header.|
| __.GridHeaderOver_Default.GridHeader_Default a.GridHeaderDiv_Default__ |For skinning the hovered header item.<a> element belonging to the header classFor skinning the header row when scrolling the grid.|
| __.GridRow_Default,.GridRow_Default td__  __.GridRowOver_Default__ |For skinning the normal grid row. For skinning the hovered grid row.|
| __.GridAltRow_Default,.GridAltRow_Default td__ |For skinning the alternate grid row (zebra style tables).|
| __.SelectedRow_Default,__  __.SelectedRow_Default__  __td__ |Skinning the currently selected row.|
| __.ActiveRow_Default,.ActiveRow_Default td__ |Active row class - the focused row skinning|
| __.GridEditRow_Default,.GridEditRow_Default td__ |For skinning the row that is currently in edit mode.|
| __.GridEditForm_Default__ |For skinning the edit form of the row that is currently in edit mode.|
| __.GridCommandRow_Default__ |For skinning the CommandItem.|
| __.GridGroupFooter_Default,.GridGroupFooter_Default td__ |For skinning the group footers (meaning with grouping feature enabled).Defaults to the *GroupFooter_[Skin]/GroupFooter_[Skin] td* classes.|
| __.GridFilterRow_Default__ |For skinning the FilteringItem.|
| __.GridPager_Default,__  __.GridPager_Default__  __td__ |Skinning the grid pager|
| __.GridFooter_Default,.GridFooter_Default td.GridFooterDiv_Default__ |A reference to the grid footer.For skinning the grid footer when scrolling the grid.|
| __.GridFooter_Default a__ |Reference to any link <a> belonging to the footer.|
| __.GridPager_Default a__ |Reference to any link <a> belonging to the pager.|
| __.GridPager_Default a:hover,.GridFooter_Default a:hover__ |Reference to any hovered link <a> in the pager or footer.|
| __tr.GroupHeader_Default td__ |For skinning the group panel row (grouping must be enabled).|
| __.GroupPanel_Default__ |For skinning the group panel (grouping must be enabled).|
| __.GroupPanelItems_Default__ |Reference to items belonging to the group panel (grouping must be enabled).|
| __td.GridHeader_Default input__ |Reference to the <input> element belonging to the grid header (grouping must be enabled)|
| __.GridCaption_Default__ |Reference to the table caption in each level of the grid hierarchy|
| __.GridToolTip_Default__ |For customizing the scroller when the virtual scrolling feature is enabled (<Scrolling AllowScroll="True" EnableVirtualScrollPaging="True" UseStaticHeaders="True" />). Applicable for the column resizer tooltip as well|
| __.GridRowSelector_Default__ |For styling the colored rectangle when selecting multiple rows by dragging.|
| __.GridItemDropIndicator_Default__ |Defines the drop indicator appearance when utilizing drag and drop of grid records.|

__After the Q1 2009 release of RadGrid for ASP.NET AJAX(note that the [SkinName] part is missing from the css classes names except for external grid elements)__


>caption  

| CSS Class | Description |
| ------ | ------ |
| __div.RadGrid_[SkinName]__ |The default Telerik RadGrid wrapper __<div>__ . All Telerik RadGrid elements are placed inside it. Rendering Telerik RadGrid in one tag helps further integrations with other controls (Telerik RadAjax and ASP.NET AJAX for example).|
| __.RadGrid_[SkinName],__  __.RadGridRTL_[SkinName],.RadGrid_[SkinName] a__ |A reference to any table cell (<td>) and link (<a>) inside the main class. Using these two classes you can skin the grid cells and links in Telerik RadGrid cells.|
| __.rgMasterTable__ |A class for customizing the master table view|
| __.rgClipCells__ |An additional class applied to the master table view when its table layout is fixed.|
| __.rgMasterTable td,.rgMasterTable th__ |References to any table <td> and table header <th> belonging to that master table|
| __.rgDataDiv__ |For skinning the grid in scrolling mode.|
| __th.rgHeader,th.rgResizeCol__ |Header class <th> for customizing the Telerik RadGrid header.|
| __.rgHeaderOver.rgHeaderDiv a.rgHeaderDiv__ |For skinning the hovered header item.<a> element belonging to the header classFor skinning the header row when scrolling the grid.|
| __.rgRow,.rgRow td__  __.rgHoveredRow__ |For skinning the normal grid row.For skinning the hovered grid row.|
| __.rgAltRow,.rgAltRow td__ |For skinning the alternate grid row (zebra style tables).|
| __.rgSelectedRow,__  __.rgSelectedRow__  __td__ |Skinning the currently selected row.|
| __.rgActiveRow,.rgActiveRow td__ |Active row class - the focused row skinning|
| __.rgEditRow,.rgEditRow td__ |For skinning the row that is currently in edit mode.|
| __.rgEditForm__ |For skinning the edit form of the row that is currently in edit mode.|
| __.rgCommandRow__ |For skinning the CommandItem.|
| __.rgFooter,.rgFooter td__ |For skinning the group footers (meaning with grouping feature enabled).Defaults to the *GroupFooter_[Skin]/GroupFooter_[Skin] td* classes.|
| __.rgFilterRow__ |For skinning the FilteringItem.|
| __.rgPager,__  __.rgPager__  __td__ |Skinning the grid pager|
| __.rgFooter,.rgFooter td.rgFooterDiv__ |A reference to the grid footer.For skinning the grid footer when scrolling the grid.|
| __.rgFooter a__ |Reference to any link <a> belonging to the footer.|
| __.rgPager a__ |Reference to any link <a> belonging to the pager.|
| __.rgPager a:hover,.rgFooter a:hover__ |Reference to any hovered link <a> in the pager or footer.|
| __tr.rgGroupHeader td__ |For skinning the group panel row (grouping must be enabled).|
| __.rgGroupPanel__ |For skinning the group panel (grouping must be enabled).|
| __.rgGroupItem__ |Reference to items belonging to the group panel (grouping must be enabled).|
| __td.rgHeader input__ |Reference to the <input> element belonging to the grid header (grouping must be enabled)|
| __.rgCaption__ |Reference to the table caption in each level of the grid hierarchy|
| __.GridToolTip_[SkinName]__ |For customizing the scroller when the virtual scrolling feature is enabled (<Scrolling AllowScroll="True" EnableVirtualScrollPaging="True" UseStaticHeaders="True" />). Applicable for the column resizer tooltip as well|
| __.GridRowSelector_[SkinName]__ |For styling the colored rectangle when selecting multiple rows by dragging.|
| __.GridItemDropIndicator_[SkinName]__ |Defines the drop indicator appearance when utilizing drag and drop of grid records.|
| __.rgDetailTable__ |A class for customizing the detail tables in hierarchical grid|
| __.GridReorderTop_[SkinName]__ |A class to customize the embedded top image indicator when reordering grid columns|
| __.GridReorderBottom_[SkinName]__ |A class to customize the embedded bottom image indicator when reordering grid columns|
| __.GridReorderTopImage_[SkinName]__ |A class to customize the top image indicator when reordering grid columns and the embedded skins are disabled for the grid|
| __.GridReorderBottomImage_[SkinName]__ |A class to customize the bottom image indicator when reordering grid columns and the embedded skins are disabled for the grid|
| __.rgVScroll__ |A class to customize the appearance of the RadGrid virtual scroll|
| __.rgNoRecords__ |A class to customize the visual appearance of the NoRecords template/text|
| __.GridDraggedRows_[SkinName]__ |A class applied to the <div> element, which wraps the dragged rows. The same <div> element also has the "RadGrid" and "RadGrid_SkiName" classes.|

>note To apply the old embedded skins of RadGrid for ASP.NET AJAX as external with versions of the grid after Q1 2009 (2009.1.311), download them from[this location](http://www.telerik.com/support/code-library/aspnet-ajax/skin-exchange)and follow the steps concerning how to register an external skin from[this](http://www.telerik.com/help/aspnet-ajax/skinregistration.html)and[this](http://www.telerik.com/help/aspnet-ajax/disabling_embedded_resources.html)topic.
>


Since RadGrid for ASP.NET AJAX uses internally RadContextMenu as a filtering menu, the styling of the filtering menu can be attained by accessing the RadContextMenu instance and utilizing its appearance mechanism.

To summarize, in order to modify an existing RadGrid skin, either take advantage of the css selectors "weight" as depicted in the [following blog post](http://blogs.telerik.com/aspnet-ajax/posts/08-06-17/how-to-override-styles-in-a-radcontrol-for-asp-net-ajax-embedded-skin.aspx) or:

1.Set the Skin property of the RadGrid to an existing skin name

2.Set the RadGrid property *EnableEmbeddedSkins="False"*

3.Manually create a link to the CSS on the page (or MasterPage) for both the RadGrid and RadMenu, for example:

````ASPNET
	  <link href="~/Skins/Telerik/Grid.Telerik.css" rel="stylesheet" type="text/css" runat="server" />
	  <link href="~/Skins/Telerik/Menu.Telerik.css" rel="stylesheet" type="text/css" runat="server" />
````



Additionally, for skins which have different styling for normal/alternating rows, you can disable the zebra effect by setting the *ClientSettings -> EnableAlternatingItems* property of the grid to false.

## Telerik RadGrid HTML Structure

The following table shows how the grid generates its HTML structure:


>caption  

| 

````XML
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

 | Telerik RadGrid and MasterTableView definition. |
| ------ | ------ |
|

````XML
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

|![](images/grd_skin_header.png)|
|

````XML
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

|![Pager](images/grd_skin_Pager.png)|
|

````XML
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

|![](images/grd_skin_NormalItem.png)![](images/grd_skin_AlternatingItem.png)![](images/grd_skin_SelectedItem.png)|

## Creating a custom skin (basic steps)

The easiest way to create your own skin for RadGrid (as discussed previously in this article) is to copy one of our existing skins and modify its existing CSS settings.You can do this in five steps:

* Copy one of our existing skins (CSS and images). For example the Vista skin.

* Modify the corresponding css classes definitions in the CSS file.

* Change the urls for the images referenced in the CSS file.

* Register your CSS file in the HEAD section of your page.

* Set Skin="<MyCustomSkinName>" and EnableEmbeddedSkins="false" for RadGrid.

>note  __Important:__ RadGrid may create other UI controls as part of its elements (slider pager, filtering menu, date pickers in GridDateTimeColumns, etc.) and you will need to perform the same steps for these controls as well!
>


Review the [following online demo](http://demos.telerik.com/ASPNET/Prometheus/Grid/Examples/Styles/CustomSkin/DefaultCS.aspx)

of the product (the ASPX and CSS definitions mainly) for more details on the aforementioned approach to create a custom skin for RadGrid. You may also consider utilizing the [Visual Style Builder for ASP.NET tool](http://www.telerik.com/products/visual-style-builder.aspx) to modify existing skins/create new custom skins.
