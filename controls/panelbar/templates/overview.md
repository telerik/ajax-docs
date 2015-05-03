---
title: Overview
page_title: Templates Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: panelbar/templates/overview
tags: overview
published: True
position: 0
---

# Templates Overview



**RadPanelBar** items are extremely configurable. In addition to the preset [skins]({%slug panelbar/appearance-and-styling/skins%}), you can customize the appearance of panel items by [adding custom images]({%slug panelbar/appearance-and-styling/adding-images-to-items%}), using [CSS classes]({%slug panelbar/appearance-and-styling/setting--the-css-class-of-items%}), or [creating custom skins]({%slug panelbar/appearance-and-styling/tutorial:-creating-a-custom-skin%}). However, if you want to embed other HTML controls in a panel item, you must use templates. You can embed any content inside a **RadPanelItem** template, including:

* HTML markup

* ASP.NET server controls

* Other third-party controls (including other Telerik controls)

At design time, add item templates to your **RadPanelBar** control using the [Template Design Surface]({%slug panelbar/design-time/template-design-surface%}). **RadPanelBar** supports two base types of item templates:

1. **Item Template**. The content appears in the panel item immediately below its text. The item cannot be collapsed nor expanded. If the item does not have any text, then the contents of the Item Template become the item itself. There are two types of Item Templates:

1. The global RadPanelItem template affects the appearance of all items in the panel bar.

1. Individual Item templates affect the appearance of a single panel item, overriding the global RadPanelItem template if it is set.

1. **Content Template**. The content renders as a sub-group of the target panel item. The item can be expanded and collapsed as if it had child panel items. If the item does not have text, the contents of the Content Template become the item itself and cannot be expanded/collapsed. Finally, if there are a global template and a content template on some item, the content template will take precedence.

>tip There are two important differences between the Item and Content Templates:
>


* The Content Template is meant to be a substitute for the child items of a given item, so the latter cannot have children when a Content Template is set (in contrast to the Item Template which allows child items).

* An item can have either an individual Item or a Content Template.

If both of the above conditions are false a **RadPanelItemTemplateException** is thrown during the PreRender phase to indicate that such an inconsistency exists in a RadPanelBar instance.

## Example

The following example shows a panel bar that uses a global template on child items as a data entry form. The root level items use an item template to override the default template on child items:

>tip For an example of Content Templates please see the [PanelBar / Templates](http://demos.telerik.com/aspnet-ajax/panelbar/examples/functionality/templates/defaultcs.aspx) demo.
>


![Templates](images/panelbar_templates.png)

````ASPNET
<telerik:RadPanelBar
   ID="RadPanelBar1"
   runat="server"
   Skin="Telerik" >
 <Items >
   <telerik:RadPanelItem
       Text="Your Data"
       runat="server">
     <Items>
       <telerik:RadPanelItem
         runat="server"
         Text="Please Enter your details:" />
     </Items>
     <ItemTemplate>
       <!-- Empty template to suppress global template -->
     </ItemTemplate>
  </telerik:RadPanelItem>
  <telerik:RadPanelItem
      runat="server"
      Text="Institution Data">
    <Items>
      <telerik:RadPanelItem
         runat="server"
         Text="Please Enter your company's details:">
      </telerik:RadPanelItem>
    </Items>
    <ItemTemplate>
      <!-- Empty template to suppress global template -->
    </ItemTemplate>
  </telerik:RadPanelItem>
 </Items >
 <ItemTemplate>
  <div class="module" style="width:100%;float:left">
   <dl>
     <dt>Name:</dt>
     <dd>
       <asp:TextBox ID="Name" Runat="server" Width="140px" />
     </dd>
     <dt>Address:</dt>
     <dd>
       <asp:TextBox TextMode="MultiLine" Columns="20" Rows="3"
          ID="Address" Runat="server" Width="140px" />
     </dd>
     <dt>Phone:</dt>
     <dd>
       <asp:TextBox ID="Phone" runat="server" />
     </dd>
   </dl>
  </div>
 </ItemTemplate>
</telerik:RadPanelBar> 
````



# See Also

 * [DataBinding Expressions]({%slug panelbar/templates/databinding-expressions%})

 * [Accessing Controls Inside Templates]({%slug panelbar/templates/accessing-controls-inside-templates%})

 * [Adding Templates at Designtime]({%slug panelbar/templates/adding-templates-at-designtime%})

 * [Demo: PanelBar / Templates](http://demos.telerik.com/aspnet-ajax/panelbar/examples/functionality/templates/defaultcs.aspx)
