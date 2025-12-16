---
title: Displaying Table Borders in RadEditor ReadOnly Mode
description: Learn how to ensure table borders are visible when the RadEditor component is set to read-only mode.
type: how-to
page_title: How to Make Table Borders Visible in RadEditor ReadOnly Mode
slug: editor-displaying-table-borders-in-radeditor-readonly-mode
tags: radeditor, asp.net ajax, table, borders, readonly, css, inline styles
res_type: kb
ticketid: 1662839
---

## Environment

| Product | RadEditor for ASP.NET AJAX |
| --- | --- |
| Version | all |

## Description

When using the RadEditor in view only or read-only mode, table borders may not appear as expected. This article outlines how to ensure table borders are visible in the read-only mode by using inline styles or CSS.

This KB article also answers the following questions:
- How do I display table borders in RadEditor when it's in read-only mode?
- Can I use CSS to style tables in RadEditor's non-editable mode?
- What are the ways to ensure table styling in RadEditor when editing is disabled?

## Solution

To make table borders visible in RadEditor's read-only mode, apply inline styles directly to the table elements or use CSS classes. Below are methods to achieve this:

### Using Inline Styles

Add inline styles to the table and its cells within RadEditor's content. Here is an example:

```asp
<telerik:RadEditor runat="server" ID="RadEditor1" Enabled="false">
    <Content>
        <table style="border: 1px solid black; border-collapse: collapse;">
            <tr>
                <td style="border: 1px solid black;">Cell 1</td>
                <td style="border: 1px solid black;">Cell 2</td>
            </tr>
            <tr>
                <td style="border: 1px solid black;">Cell 3</td>
                <td style="border: 1px solid black;">Cell 4</td>
            </tr>
        </table>
    </Content>
</telerik:RadEditor>
```

### Using CSS Classes

Define CSS classes for the table and cell borders, then apply these to your tables. Here is a basic example:

```html
<style>
    table {
        border: 1px solid black;
        border-collapse: collapse;
    }

    td {
        border: 1px solid black;
    }
</style>

<telerik:RadEditor runat="server" ID="RadEditor1" Enabled="false">
    <Content>
        <table>
            <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
            </tr>
            <tr>
                <td>Cell 3</td>
                <td>Cell 4</td>
            </tr>
        </table>
    </Content>
</telerik:RadEditor>
```

### Additional Styling Options

For more specific scenarios, you can target tables within the RadEditor using ID or parent div selectors in your CSS. This allows for greater flexibility and control over table presentation in read-only mode.

```html
        <style>
            div > table {
                border: 1px solid black;
                border-collapse: collapse;
            }

            div > RadEditor1 td {
                border: 1px solid black;
            }
        </style>

        <telerik:RadEditor runat="server" ID="RadEditor1" Enabled="false">
            <Content>
        <table>
            <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
            </tr>
            <tr>
                <td>Cell 3</td>
                <td>Cell 4</td>
            </tr>
        </table>
            </Content>
        </telerik:RadEditor>
```

## Notes

Table styling in read-only mode requires inline styles or CSS due to RadEditor rendering as a simple DIV element. For automatic table border application in inserted tables, see the Telerik forum reply: [Default Table Style in RadEditor](https://www.telerik.com/forums/default-table-style-in-radeditor#769217).

## See Also

- [Styling Tables with CSS](https://www.w3schools.com/css/css_table.asp)
