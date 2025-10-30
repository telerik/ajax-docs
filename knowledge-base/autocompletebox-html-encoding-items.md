---
title: HTML Encoding Items in RadAutoCompleteBox Control
description: Learn how to handle HTML encoding in the RadAutoCompleteBox control to securely display special characters while preventing script injection vulnerabilities.
type: how-to
page_title: Handle HTML Encoding in RadAutoCompleteBox Items
meta_title: Handle HTML Encoding in RadAutoCompleteBox Items
slug: autocompletebox-html-encoding-items
tags: autocompletebox, ui for asp.net ajax, html encoding, xss, security
res_type: kb
ticketid: 1702307
---

## Environment
<table>
  <tbody>
    <tr>
      <td>Product</td>
      <td>UI for ASP.NET AJAX AutoCompleteBox</td>
    </tr>
    <tr>
      <td>Version</td>
      <td>All</td>
    </tr>
  </tbody>
</table>

## Description

I want to display text with special characters like `<`, `>`, and `'` in the [RadAutoCompleteBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/autocompletebox/overview) control for UI for ASP.NET AJAX. Adding raw text results in special characters being rendered as HTML, which may expose the site to script injection vulnerabilities. Encoding the text ensures safe display but causes the tags to appear encoded. I need to know how RadAutoCompleteBox handles HTML encoding and how to prevent vulnerabilities while displaying special characters as literal text.

This knowledge base article also answers the following questions:
- How to encode special characters in RadAutoCompleteBox?
- Does RadAutoCompleteBox automatically encode HTML?
- How to prevent XSS vulnerabilities in RadAutoCompleteBox?

## Solution

RadAutoCompleteBox does not automatically HTML encode the text of its items. You must handle the encoding or sanitization of data before adding it to the control to prevent cross-site scripting (XSS) vulnerabilities. Follow these solutions:

Utilize the `DropDownItemTemplate` feature to encode item text dynamically at runtime.

````ASP.NET
<telerik:RadAutoCompleteBox runat="server" ID="auto" DataTextField="Text" DataValueField="Value">
    <DropDownItemTemplate>
        <%# System.Web.HttpUtility.HtmlEncode(DataBinder.Eval(Container.DataItem, "Text")) %>
    </DropDownItemTemplate>
</telerik:RadAutoCompleteBox>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    List<Item> items = new List<Item>
    {
        new Item() { Value = "1", Text = "<script>alert('xss')</script>" },
        new Item() { Value = "2", Text = "name <>" },
        new Item() { Value = "3", Text = "'single-quote'@example.com" }
    };

    auto.DataSource = items;
}

public class Item
{
    public string Value { get; set; }
    public string Text { get; set; }
}
````

If you prefer plain text without any HTML tags, use regular expressions to remove tags.

````C#
string userInput = "<b>Hello</b>";
string plainText = Regex.Replace(userInput, "<.*?>", string.Empty);
RadAutoCompleteBox1.Entries.Add(new AutoCompleteBoxEntry(plainText, null));
````

Always validate and sanitize user input on the server side before saving or displaying it. This adds additional protection against XSS attacks.

