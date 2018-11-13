---
title: Getting Started
page_title: Getting Started | RadTreeMap for ASP.NET AJAX Documentation
description: Getting Started
slug: treemap/getting-started
tags: getting,started
published: True
position: 1
---

# Getting Started


The following article demonstrates how you can add a **RadTreeMap** control with three steps. The end result will be similar to **Figure 1**:
>caption Figure 1: RadTreeMap data visualization with three easy steps.

![treemap-gettingstarted](images/treemap-gettingstarted.png)

>note The control visualizes its data in **Squarified AlgorithmType** as this is the default algorithm type.
>


## 

To add a **RadTreeMap** control into the page, you can simply drag it from the Visual Studio Toolbox into an ASP.NET page with correctly set ScriptManager control. Or you can paste the markup from **Example 1** into the form element.

1. Add a **ScriptManager** control on the Web Form.

1. Add a **RadTreeMap** control on Web Form, with a preferable **Width** and **Height**:

1. Add **RadTreeMapItems** into the declaration of **RadTreeMap** and set preferable **Text** and **Value**. Note that the **Value** of the items is used for calculation of their ratio, regarding the visualization.

**Example 1**: Simple declaration of a **RadTreeMap** control.


````ASPNET
<telerik:radtreemap runat="server" id="RadTreeMap1" height="250" width="400">
    <Items>
        <telerik:TreeMapItem Text="Parent Item">
            <Items>
                <telerik:TreeMapItem Text="Item 1" Value="6">
                    <Items>
                        <telerik:TreeMapItem Text="Sub Item 1.1" Value="2"></telerik:TreeMapItem>
                        <telerik:TreeMapItem Text="Sub Item 1.2" Value="2"></telerik:TreeMapItem>
                        <telerik:TreeMapItem Text="Sub Item 1.3" Value="1"></telerik:TreeMapItem>
                    </Items>
                </telerik:TreeMapItem>
                <telerik:TreeMapItem Text="Item 2" Value="4">
                    <Items>
                        <telerik:TreeMapItem Text="Sub Item 2.1" Value="5"></telerik:TreeMapItem>
                        <telerik:TreeMapItem Text="Sub Item 2.2" Value="5"></telerik:TreeMapItem>
                        <telerik:TreeMapItem Text="Sub Item 2.3" Value="3"></telerik:TreeMapItem>
                        <telerik:TreeMapItem Text="Sub Item 2.5" Value="2"></telerik:TreeMapItem>
                    </Items>
                </telerik:TreeMapItem>
                <telerik:TreeMapItem Text="Item 3" Value="3">
                    <Items>
                        <telerik:TreeMapItem Text="Sub Item 3.1" Value="2"></telerik:TreeMapItem>
                        <telerik:TreeMapItem Text="Sub Item 3.2" Value="2"></telerik:TreeMapItem>
                        <telerik:TreeMapItem Text="Sub Item 3.4" Value="1"></telerik:TreeMapItem>
                    </Items>
                </telerik:TreeMapItem>
            </Items>
        </telerik:TreeMapItem>
    </Items>
</telerik:radtreemap>
````

>note All **RadTreeMapItems** should have one **Parent** item.
>

