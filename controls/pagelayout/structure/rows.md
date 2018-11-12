---
title: Rows
page_title: Rows | RadPageLayout for ASP.NET AJAX Documentation
description: Rows
slug: pagelayout/structure/rows
tags: rows
published: True
position: 1
---

# Rows



This article provides information about the rows that you can use in the **RadPageLayout** control. You can also find out what attributes that can be applied and how to declare them on your page.

## Rows

Since **Q2 2014** rows could be nested using the property **Rows**. Rows are simple containers for holding columns. They can either hold LayoutRow element or Content elements. Below you can find few examples demonstrating the purpose of the Content elements and LayoutRow element as well as the attributes that can be set:


| Property Name | Description |
| ------ | ------ |
| **HtmlTag** |Gets or sets the HTML tag that will be rendered for this element. If the property is set to None, only the element's content will be rendered.|
| **StaticId** |Gets or sets the actual rendered ID attribute. If the property is not set, it will return an empty string.|
| **WrapperHtmlTag** |Gets or sets the HTML tag that will be rendered for the wrapper of this element. If the property is set to None, the wrapper will not be rendered.|
| **WrapperCssClass** |Gets or sets the wrapper HTML class.|
| **Hidden[Device Resolution]** |Boolean value to show (when set to **false** ) or hide (when set to **true** ) the corresponding row depending on the device resolution - Xl, Lg, Md, Sm, Xs (for instance this can be **HiddenXl="true"** ).|
| **Rows** |Contains the nested rows.|
| **RowType** |Determine what styles will be applied for the row element. The available values are: **Container** - applies the styles from the RadPagePayout div container to the row element; **Row** - the default value; **Generic** - no styles are applied to the row element; **Region** - region styles are applied.|

Since rows in the **RadPageLayout** control are designed in a very flexible way you can use them in two ways:

* You can directly place the desired content in the defined row only by using the **`<Content>` ...`</Content>`**. This can be any HTML or control that you need to place at the desired position.

* You can create additional columns by using the **`<Columns>` ... `</Columns>`**

Below you can find a sample code that demonstrates how you can use either of the approaches:

````ASPNET
<head runat="server">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style type="text/css">
        .borderCssClass div {
            border: 1px solid red;
        }
    </style>
</head>
````



````ASPNET	            
<telerik:RadPageLayout ID="RadPageLayout2" runat="server" CssClass="borderCssClass"
    ShowGrid="true" GridType="Fluid" >
    <Rows>
        <telerik:LayoutRow  HtmlTag="Div" WrapperHtmlTag="Div" >
            <Content>
               Some sample text goes here
            </Content>
              <Columns>
                <telerik:LayoutColumn Span="8">
                    Main content here
                </telerik:LayoutColumn>
                <telerik:CompositeLayoutColumn Span="4">
                    <Rows>
                        <telerik:LayoutRow WrapperHtmlTag="Div">                                  
                            <Content>additional content 1</Content>
                        </telerik:LayoutRow>
                        <telerik:LayoutRow WrapperHtmlTag="Div">
                            <Content> additional content 2</Content>
                        </telerik:LayoutRow>
                    </Rows>
                </telerik:CompositeLayoutColumn>
            </Columns>
        </telerik:LayoutRow>
    </Rows>
</telerik:RadPageLayout>
````


>caption Figure 1. RadPageLayout control demonstrating how to use rows and columns

![page-layout-structure-row](images/page-layout-structure-row.png)

# See Also

 * [Overview]({%slug pagelayout/overview%})
