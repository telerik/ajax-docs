title: Sanitizing HTML Content in RadEditor During Paste Operations
description: Learn how to sanitize HTML content inserted or pasted into RadEditor using the OnClientPasteHtml event and the Paste HTML dialog - Telerik UI for ASP.NET AJAX
type: how-to
page_title: How to Sanitize HTML Content in RadEditor During Paste Operations
slug: editor-sanitize-html-content
position:
tags:
ticketid: 1619141
res_type: kb

## Environment
<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>RadEditor for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>

## Description
In RadEditor for ASP.NET AJAX, users can paste HTML content via the "Paste HTML" dialog or manually with `Ctrl+V`. While the [RadEditor RemoveScripts, StripDomEventAttributes, StripCssExpressions content filters prevent XSS attacks by sanitizing the content](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/managing-content/prevent-cross-site-scripting-(xss)#radeditor-and-xss) upon submission and on the server side, some users may wish to sanitize the content at the time of pasting. This article explains how to sanitize HTML content during paste operations in the OnClientPasteHtml event as well as in the Paste HTML dialog.

## Solution
### Sanitizing HTML Content During OnClientPasteHtml Event
To sanitize the HTML content during the `OnClientPasteHtml event`, you can use the following JavaScript code in your RadEditor configuration:

````ASPX
        <telerik:RadEditor runat="server" ID="RadEditor1" Height="600px" OnClientPasteHtml="OnClientPasteHtml" ContentFilters="DefaultFilters,StripDomEventAttributes">
        </telerik:RadEditor>

        <script>
            function OnClientPasteHtml(editor, args) {
                var content = args.get_value();
                content = stripDomEventAttributes(content);
                args.set_value(content);
            }

            function stripDomEventAttributes(html) {
                var dummyElement = document.createElement('div');
                dummyElement.innerHTML = html;

                // Clean the dummy element
                cleanElement(dummyElement);

                // Remove script tags using regular expressions
                var sanitizedHtml = dummyElement.innerHTML.replace(/<(SCRIPT)([^>]*)\/>/ig, '');
                sanitizedHtml = sanitizedHtml.replace(/<(SCRIPT)([^>]*)>[\s\S]*?<\/(SCRIPT)([^>]*)>/ig, '');

                // Return the sanitized HTML
                return sanitizedHtml;
            }

            function cleanElement(element) {
                var EXPRESSION_PATTERN = /expression\s*\(.*?\)/gi;
                var eventAttributes = [
                    'onabort', 'onactivate', 'onafterprint', 'onauxclick', 'onbeforeactivate', 'onbeforecopy', 'onbeforecut', 'onbeforedeactivate', 'onbeforepaste', 'onbeforeprint', 'onbeforeunload', 'onblur', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondeactivate', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onfocusin', 'onfocusout', 'ongotpointercapture', 'onhashchange', 'onhelp', 'oninput', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmessage', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onmscontentzoom', 'onmsgesturechange', 'onmsgesturedoubletap', 'onmsgestureend', 'onmsgesturehold', 'onmsgesturestart', 'onmsgesturetap', 'onmsgotpointercapture', 'onmsinertiastart', 'onmslostpointercapture', 'onmsmanipulationstatechanged', 'onmspointercancel', 'onmspointerdown', 'onmspointerenter', 'onmspointerleave', 'onmspointermove', 'onmspointerout', 'onmspointerover', 'onmspointerup', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave', 'onpointermove', 'onpointerout', 'onpointerover', 'onpointerup', 'onpopstate', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onseeked', 'onseeking', 'onselect', 'onselectstart', 'onstalled', 'onstorage', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'onunload', 'onvolumechange', 'onwaiting', 'onwheel'
                ];

                if (element.nodeType === Node.ELEMENT_NODE) {
                    eventAttributes.forEach(function (attr) {
                        element.removeAttribute(attr);
                    });

                    if ((element.tagName === 'IFRAME' || element.tagName === 'IMG') && element.src.indexOf('javascript:') === 0) {
                        element.removeAttribute('src');
                    }

                    if (element.style) {
                        element.style.cssText = element.style.cssText.replace(EXPRESSION_PATTERN, '');
                    }

                    if (element.hasAttribute('style') && element.getAttribute('style').trim() === '') {
                        element.removeAttribute('style');
                    }

                    var children = element.children;
                    for (var i = 0; i < children.length; i++) {
                        cleanElement(children[i]);
                    }
                }
            }
        </script>
````

### Sanitizing HTML Content in the Paste HTML Dialog
The solution above also applies to the content inserted (pasted) by the `Paste HTML` since its content goes through the OnClientPasteHtml event. 

## Summary
By implementing these modifications, you ensure that HTML content pasted into RadEditor is sanitized immediately, providing an additional layer of security against potential XSS attacks. Although the built-in content filters are effective, this approach offers real-time protection during paste operations, enhancing the overall security of your application.
 
  