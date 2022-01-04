---
title: Chrome Creates Spans with Inherited Styles on Delete and Paste
page_title: Chrome Creates Spans with Inherited Styles on Delete and Paste - RadEditor
description: Check our Web Forms article about Chrome Creates Spans with Inherited Styles on Delete and Paste.
slug: editor/troubleshooting/chrome-creates-spans-with-inherited-styles-on-delete-and-paste
tags: chrome,creates,spans,with,inherited,styles,on,delete,and,paste
published: True
position: 13
---

# Chrome Creates Spans with Inherited Styles on Delete and Paste

Chrome creates additional spans with inline styles (inherits styles) on backspace/delete key and paste when the content is inside an editable div/iframe element. This is a known Chrome issue that has been reported as follows:

 * [https://bugs.chromium.org/p/chromium/issues/detail?id=226941](https://bugs.chromium.org/p/chromium/issues/detail?id=226941)
 * [https://bugs.webkit.org/show_bug.cgi?id=114791](https://bugs.webkit.org/show_bug.cgi?id=114791)

You can work around this Chrome browser behavior by setting an empty value for the `EditorCssFile`, which will prevent the page style inheritance.

>caption **Example 1**: Prevent the page style inheritance by setting an empty value for the `EditorCssFile`.

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server">
    <CssFiles>
        <telerik:EditorCssFile Value="~/empty.css" />
    </CssFiles>
    <Content>
        <p>para</p>
    </Content>
</telerik:RadEditor>
````

## How to apply the CssFiles workaround if I do need to use telerik:EditorCssFile?	

If the CssFiles property is already set then it is up to the developer to decide what CSS and font settings to apply to the content area by having in mind the verified Chrome/Chromium bug.

So if you apply a font with rem to the iframe content area 

````CSS
body {
    font-size: 1rem
}
````

via the CssFiles property, this will trigger the browser bug.

If the font is not specified or set in pixels 

````CSS
body {
    font-size: 12px
}
````

the problem will not happen.

You can test with a regular editable div element and you will reproduce the same problem when the body font-size is set in rem - http://dojo.telerik.com/AFoHOpOf/2.

## See Also

 * [RadEditor Overview]({%slug editor/overview%})
 * [https://bugs.chromium.org/p/chromium/issues/detail?id=226941](https://bugs.chromium.org/p/chromium/issues/detail?id=226941)
 * [https://bugs.webkit.org/show_bug.cgi?id=114791](https://bugs.webkit.org/show_bug.cgi?id=114791)
