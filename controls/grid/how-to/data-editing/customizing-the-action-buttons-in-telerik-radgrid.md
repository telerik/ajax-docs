---
title: Customizing the Action Buttons in Telerik RadGrid
page_title: Customizing the Action Buttons in Telerik RadGrid - RadGrid
description: Check our Web Forms article about Customizing the Action Buttons in Telerik RadGrid.
slug: grid/how-to/data-editing/customizing-the-action-buttons-in-telerik-radgrid
previous_url: controls/grid/data-editing/how-to/customizing-the-action-buttons-in-telerik-radgrid
tags: customizing,the,action,buttons,in,telerik,radgrid
published: True
position: 0
---

# Customizing the Action Buttons in Telerik RadGrid



##

This article helps you customize the presentation of Edit/Update/Cancel/Insert buttons in GridEditCommandColumn and GridButtonColumn.

## Access and Modify the Auto-Generated Buttons in Edit Mode

This article rather targets the buttons in the View mode of the grid generated for every row. For the Update/Insert and Cancel buttons generated in Edit/Insert mode, you can refer to this article:

[Customizing the Appearance of Auto-generated Action Buttons]({%slug grid/functionality/exporting/overview%})

If you would like to render image buttons in the place of the default Update/Cancel/Insert link buttons, you merely have to select `ButtonType = ”ImageButton”` from the EditFormSettings -> EditForm section and optionally assign proper UpdateImageUrl/CancelImageUrl/InsertImageUrl for them.For the Edit button or the button inside the GridButtonColumn the operation is pretty similar. You should change the **ButtonType** of the column to ImageButton and define EditImageUrl/ImageUrl which to point to the image which will be visualized.

## Customize the Auto-Generated Edit and Delete Column Buttons

These options are enabled using these properties:
````ASP.NET
        <telerik:RadGrid ... AutoGenerateEditColumn="true" AutoGenerateDeleteColumn="true">
````

The generated controls can be accessed and modified in the code-behind. One important note is that you can cast the control to **Button** type in the highly recommended [Lightweight RenderMode]({%slug grid/mobile-support/render-modes%}#setting-render-mode). For Classic RenderMode, the control is of type **LinkButton**.

````C#
    protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
    {
        if (e.Item is GridDataItem)
        {
            GridDataItem item = e.Item as GridDataItem;

            Button editButton = item["AutoGeneratedEditColumn"].Controls[0] as Button;
            editButton.BackColor = Color.LightCyan;

            Button deleteButton = item["AutoGeneratedDeleteColumn"].Controls[0] as Button;
            deleteButton.BackColor = Color.Orange;
        }
    }
````
````VB.NET
    Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
        If TypeOf e.Item Is GridDataItem Then
            Dim item As GridDataItem = DirectCast(e.Item, GridDataItem)

            Dim editButton As Button = TryCast(item("AutoGeneratedEditColumn").Controls(0), Button)
            editButton.BackColor = Color.LightCyan

            Dim deleteButton As Button = TryCast(item("AutoGeneratedDeleteColumn").Controls(0), Button)
            deleteButton.BackColor = Color.Orange
        End If
    End Sub
````


## Customize the Command Column Buttons

There are various situations in which you would like to change the buttons in GridEditCommandcolumn/GridButtonColumn. For simple modifications (like alternating the font size/font family) you can find the respective buttons (hooking the ItemDataBound event of the grid) and apply your preferences through the Style attribute of that button.

You can also change the default link buttons to other type of buttons by simply changing the **ButtonType** property of the GridEditCommandColumn/GridButtonColumn. Depending on the chosen option, the grid will generate different buttons. For the highly recommended [Lightweight RenderMode]({%slug grid/mobile-support/render-modes%}#setting-render-mode) the default type is **FontIconButton** (cast to Button in code-behind). For Classic RenderMode, the type is **LinkButton**.



````ASP.NET
                    <telerik:GridEditCommandColumn UniqueName="EditCommandColumn"
                        ButtonType="ImageButton">
                    </telerik:GridEditCommandColumn>
                    <telerik:GridButtonColumn UniqueName="ViewDetailsColumn"
                        CommandName="ViewDetails" Text="View Details"
                        ButtonType="PushButton">
                    </telerik:GridButtonColumn>
````
````C#
    protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
    {
        if (e.Item is GridDataItem)
        {
            GridDataItem item = e.Item as GridDataItem;

            ImageButton editButton = item["EditCommandColumn"].Controls[0] as ImageButton;
            editButton.BackColor = Color.Aquamarine;

            Button viewDetailsButton = item["ViewDetailsColumn"].Controls[0] as Button;
            viewDetailsButton.BackColor = Color.Turquoise;
        }
    }
````
````VB.NET
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridDataItem Then
        Dim item As GridDataItem = TryCast(e.Item, GridDataItem)
        
        Dim editButton As ImageButton = TryCast(item("EditCommandColumn").Controls(0), ImageButton)
        editButton.BackColor = Color.Aquamarine
        
        Dim viewDetailsButton As Button = TryCast(item("ViewDetailsColumn").Controls(0), Button)
        viewDetailsButton.BackColor = Color.Turquoise
    End If
End Sub
````



## Achieve Full Customization Using a Template

You can also use a GridTemplateColumn to achieve the same functionality with full customization:

````ASP.NET
                    <telerik:GridTemplateColumn UniqueName="TemplateButtonColumn"
                        HeaderText="Template Buttons">
                        <ItemTemplate>
                            <telerik:RadPushButton ID="RadPushButton1" runat="server" Text="Edit"
                                CommandName="Edit">
                                <Icon CssClass="rbEdit"></Icon>
                            </telerik:RadPushButton>
                        </ItemTemplate>
                    </telerik:GridTemplateColumn>
````
````C#
    protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
    {
        if (e.Item is GridDataItem)
        {
            GridDataItem item = e.Item as GridDataItem;

            RadPushButton templateButton = item.FindControl("RadPushButton1") as RadPushButton;
            templateButton.BackColor = Color.Aqua;
        }
    }
````
````VB.NET
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridDataItem Then
        Dim item As GridDataItem = TryCast(e.Item, GridDataItem)
        
        Dim templateButton As RadPushButton = TryCast(item.FindControl("RadPushButton1"), RadPushButton)
        templateButton.BackColor = Color.Aqua
    End If
End Sub
````


