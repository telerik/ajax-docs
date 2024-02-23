---
title: How to Add a Copy to Clipboard Button for RadTabStrip
description: This article provides step-by-step instructions on how to add a Copy to Clipboard button for a RadTabStrip in ASP.NET AJAX.
type: how-to
page_title: Adding a Copy to Clipboard Button for RadTabStrip in ASP.NET AJAX
slug: tabstrip-add-copy-to-clipboard-button
tags: radtabstrip, asp.net ajax, copy to clipboard, button
res_type: kb
---
## Environment
| Product | RadTabStrip for ASP.NET AJAX |
| --- | --- |
| Version | all |

## Description
I need to add a Copy to Clipboard button for a RadTabStrip in ASP.NET AJAX.

## Solution
To add a Copy to Clipboard button for a RadTabStrip in ASP.NET AJAX, follow these steps:

1. Add the following HTML markup for the button:
```html
<asp:Button ID="CopyContentButton" runat="server" Text="Copy PageView Content" OnClientClick="copyPageViewContent(); return false;" />
```

2. Add the following JavaScript code to define the `copyPageViewContent` function:
```javascript
<script type="text/javascript">
    function copyPageViewContent() {
        var multiPage = $find("<%= RadMultiPage1.ClientID %>"); // Find the RadMultiPage control
        var selectedPageView = multiPage.get_selectedPageView(); // Get the currently selected page view
        var content = selectedPageView.get_element().innerHTML; // Get the content of the selected page view

        navigator.clipboard.writeText(content).then(function () {
            console.log('Copying to clipboard was successful!');
            console.log(content);
        }, function (err) {
            console.error('Could not copy text: ', err);
        });
    }
</script>
```

3. Add the RadTabStrip and RadMultiPage controls to your page:
```html
<telerik:RadTabStrip RenderMode="Lightweight" runat="server" ID="RadTabStrip1" MultiPageID="RadMultiPage1" SelectedIndex="0" Skin="Silk">
    <Tabs>
        <telerik:RadTab Text="My Cook Book" Width="200px"></telerik:RadTab>
        <telerik:RadTab Text="Newest" Width="200px"></telerik:RadTab>
    </Tabs>
</telerik:RadTabStrip>

<telerik:RadMultiPage runat="server" ID="RadMultiPage1" SelectedIndex="0">
    <telerik:RadPageView runat="server" ID="RadPageView1">
        <!-- Page view content goes here -->
    </telerik:RadPageView>

    <telerik:RadPageView runat="server" ID="RadPageView2">
        <!-- Page view content goes here -->
    </telerik:RadPageView>
</telerik:RadMultiPage>
```

Note: 
- This solution uses the Clipboard API to copy the content to the clipboard. User permission may be required for copying actions, and they are usually only permitted as a direct result of user interaction.
- The script assumes that the inner HTML of the RadPageView is the content you want to copy. If you only want to copy text, additional processing of the `content` variable would be necessary to remove HTML tags.

## See Also
- [StackOverflow - How do I copy to the clipboard in JavaScript](https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript)
- [w3schools - How to Copy Text to the Clipboard](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp)
- [MDN - Clipboard API - writeText](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)
