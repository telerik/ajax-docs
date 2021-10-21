---
title: Commenting HTML in Web Forms
description: Commenting HTML in Web Forms. Check it now!
type: how-to
page_title: Commenting HTML in Web Forms
slug: commenting-html-in-web-forms
res_type: kb
---

**DESCRIPTION**  

When you want to exclude part of your mark-up page and code definition, you should avoid using the following approach:

```ASP.NET
<!-- <asp:Button ID="Button1" runat="server" Text="Click" /> -->
```

The HTML in this case is still rendered on the page:

```HTML
<!-- <input type="submit" name="Button1" value="Click" id="Button1" /> -->
```

This may lead to unpredictable issues and interfere with your script logic. Also, any server-side evaluation code inside the comments is still being executed.


**SOLUTION**

Instead, you can use the dedicated server-side comments of ASP.NET. This way the content inside the commented area won't be rendered at all:

```ASP.NET
<%--<asp:Button ID="Button1" runat="server" Text="Click" />--%>
```




