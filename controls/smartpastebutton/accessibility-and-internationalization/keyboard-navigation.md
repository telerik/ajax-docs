---
title: Keyboard Navigation
page_title: SmartPasteButton Keyboard Navigation
description: Get started with the WebForms SmartPasteButton and learn about the accessibility support it provides through its keyboard navigation functionality.
slug: smartpastebutton/accessibility/keyboard-navigation
position: 0
---

# Keyboard Navigation

The keyboard navigation of the SmartPasteButton is always available and provides convenient shortcuts for users to trigger AI-powered paste operations without using the mouse.

## Default Keyboard Shortcuts

The SmartPasteButton supports standard keyboard navigation patterns:

- **Tab** - Moves focus to the SmartPasteButton
- **Enter** or **Space** - Activates the SmartPasteButton and triggers the paste operation
- **Shift+Tab** - Moves focus to the previous focusable element

## Custom Keyboard Shortcuts

You can implement custom keyboard shortcuts to provide alternative ways to access the SmartPasteButton functionality. A common pattern is to use the **Alt+W** combination:

````ASP.NET
<telerik:RadTextBox runat="server" ID="RadTextBox1" EmptyMessage="Full Name" SmartPasteDescription="Name" />
<telerik:RadTextBox runat="server" ID="RadTextBox2" EmptyMessage="Address" SmartPasteDescription="Street Address" />

<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" Text="Smart Paste" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste" />
````

````JavaScript
document.addEventListener('keydown', function (e) {
    if (e.altKey && e.key === 'w') {
        let smartPasteButton = $find('<%= SmartPasteButton1.ClientID %>');
        smartPasteButton.get_element().focus();
    }
});
````

## Accessibility Best Practices

When implementing keyboard navigation for the SmartPasteButton:

1. **Provide clear visual focus indicators** - Ensure the focused SmartPasteButton is clearly visible
2. **Use logical tab order** - Position the SmartPasteButton appropriately in the form's tab sequence
3. **Implement custom shortcuts carefully** - Document any custom keyboard shortcuts for users
4. **Test with screen readers** - Verify that the SmartPasteButton announces its purpose and state correctly

## WAI-ARIA

The SmartPasteButton provides appropriate ARIA attributes for screen reader compatibility:

| Selector                         | Attribute                          | Usage                                                                         |
| -------------------------------- | ---------------------------------- | ----------------------------------------------------------------------------- |
| `.k-button.k-smart-paste-button` | `role=button` or `nodeName=button` | If the used element is not `<button>`, explicitly set its `role` to `button`. |
|                                  | `aria-disabled=true/false`         | Announces the enabled state of the button.                                    |
|                                  | `tabindex=0`                       | Makes the button keyboard-accessible.                                         |

## Section 508

The SmartPasteButton is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing

The SmartPasteButton has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers

The SmartPasteButton has been tested with the following screen readers and browsers combinations:

| Environment    | Tool |
| -------------- | ---- |
| Firefox        | NVDA |
| Chrome         | JAWS |
| Microsoft Edge | JAWS |

### Automated Testing

The SmartPasteButton has been tested with [axe-core](https://github.com/dequelabs/axe-core).

## Resources

[WAI-ARIA Authoring Practices: Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

## Next Steps

- [Client-side Programming]({%slug smartpastebutton/client-side-programming/overview%})
- [Server-side Programming]({%slug smartpastebutton/server-side-programming/overview%})
