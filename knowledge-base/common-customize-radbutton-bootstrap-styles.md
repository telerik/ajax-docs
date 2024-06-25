---
title: Customizing RadButton Styles to Match Bootstrap Themes
description: Learn how to apply Bootstrap theme colors to Telerik RadButton for ASP.NET AJAX by customizing CSS styles.
type: how-to
page_title: How to Customize Telerik RadButton with Bootstrap Styles
slug: common-customize-radbutton-bootstrap-styles
tags: radbutton, asp.net ajax, css, styles, bootstrap, customization
res_type: kb
ticketid: 1656249
---

## Environment

| Product | Version |
| --- | --- |
| RadButton for ASP.NET AJAX | 2024.2.513 |

## Description

Creating custom CSS styles for the [RadButton](https://docs.telerik.com/devtools/aspnet-ajax/controls/button/overview) to match the Bootstrap theme colors can enhance the visual consistency of your web application. This KB article also answers the following questions:
- How can I apply Bootstrap colors to Telerik RadButton?
- What is the correct way to style RadButton to match a Bootstrap theme?
- How do I ensure custom styles for RadButton override default styles?

## Solution

To customize the RadButton styles and match them with Bootstrap themes, follow these steps:

1. Increase the specificity of your CSS selectors to ensure they override the default RadButton styles. This approach helps in applying the custom styles without using the `!important` declaration.

2. Apply the CSS styles for each button state (default, hover, focus, etc.) as needed.

Here is an example of custom CSS that applies Bootstrap theme colors to RadButton:

```css
/* Custom styles for Telerik RadButton */
html body .RadButton_Bootstrap.rbButton.rbPrimary {
    background-color: #007bff; /* Bootstrap primary color */
    border-color: #007bff;
    color: #fff;
}

html body .RadButton_Bootstrap.rbButton.rbSecondary {
    background-color: #6c757d; /* Bootstrap secondary color */
    border-color: #6c757d;
    color: #fff;
}

/* Repeat for other Bootstrap color classes as needed */

/* Styles for hover state */
html body .RadButton_Bootstrap.rbButton.rbPrimary:hover,
html body .RadButton_Bootstrap.rbButton.rbSecondary:hover {
    opacity: 0.85;
}
```

3. Add the custom class to your RadButton components in the ASPX page:

```aspx
<telerik:RadButton ID="RadButton1" runat="server" Skin="Bootstrap" Text="Primary" CssClass="RadButton_Bootstrap rbPrimary" />
<telerik:RadButton ID="RadButton2" runat="server" Skin="Bootstrap" Text="Secondary" CssClass="RadButton_Bootstrap rbSecondary" />
<!-- Add more buttons as needed -->
```

By following these steps and increasing the specificity of your CSS selectors, you can successfully apply Bootstrap theme colors to Telerik RadButtons, ensuring a consistent and appealing design across your web application.

Here is the complete example

````ASPX
  <style type="text/css">
            /* Custom styles for Telerik RadButton */
            html body .RadButton_Bootstrap.rbButton.rbPrimary {
                background-color: #007bff ; /* Bootstrap primary color */
                border-color: #007bff ;
                color: #fff ;
                padding-left: 0px;
            }

            html body .RadButton_Bootstrap.rbButton.rbSecondary  {
                background-color: #6c757d; /* Bootstrap secondary color */
                border-color: #6c757d;
                color: #fff;
            }

            html body .RadButton_Bootstrap.rbButton.rbSuccess {
                background-color: #28a745; /* Bootstrap success color */
                border-color: #28a745;
                color: #fff;
            }

            html body .RadButton_Bootstrap.rbButton.rbDanger {
                background-color: #dc3545; /* Bootstrap danger color */
                border-color: #dc3545;
                color: #fff;
            }

            html body .RadButton_Bootstrap.rbButton.rbWarning {
                background-color: #ffc107; /* Bootstrap warning color */
                border-color: #ffc107;
                color: #212529;
            }

            html body .RadButton_Bootstrap.rbButton.rbInfo {
                background-color: #17a2b8; /* Bootstrap info color */
                border-color: #17a2b8;
                color: #fff;

            }

            html body .RadButton_Bootstrap.rbButton.rbLight {
                background-color: #f8f9fa; /* Bootstrap light color */
                border-color: #f8f9fa;
                color: #212529;
            }

            html body .RadButton_Bootstrap.rbButton.rbDark {
                background-color: #343a40; /* Bootstrap dark color */
                border-color: #343a40;
                color: #fff;
            }

                /* Add any additional styles for hover, focus, etc. */
                html body .RadButton_Bootstrap.rbButton.rbPrimary:hover,
                html body .RadButton_Bootstrap.rbButton.rbSecondary:hover,
                html body .RadButton_Bootstrap.rbButton.rbSuccess:hover,
                html body .RadButton_Bootstrap.rbButton.rbDanger:hover,
                html body .RadButton_Bootstrap.rbButton.rbWarning:hover,
                html body .RadButton_Bootstrap.rbButton.rbInfo:hover,
                html body .RadButton_Bootstrap.rbButton.rbLight:hover,
                html body .RadButton_Bootstrap.rbButton.rbDark:hover {
                    opacity: 0.85;
                }
        </style>
        <telerik:RadButton ID="RadButton1" runat="server" Skin="Bootstrap" Text="Primary" CssClass="RadButton_Bootstrap rbPrimary" />
        <telerik:RadButton ID="RadButton2" runat="server" Skin="Bootstrap" Text="Secondary" CssClass="RadButton_Bootstrap rbSecondary" />
        <telerik:RadButton ID="RadButton3" runat="server" Skin="Bootstrap" Text="Success" CssClass="RadButton_Bootstrap rbSuccess" />
        <telerik:RadButton ID="RadButton4" runat="server" Skin="Bootstrap" Text="Danger" CssClass="RadButton_Bootstrap rbDanger" />
        <telerik:RadButton ID="RadButton5" runat="server" Skin="Bootstrap" Text="Warning" CssClass="RadButton_Bootstrap rbWarning" />
        <telerik:RadButton ID="RadButton6" runat="server" Skin="Bootstrap" Text="Info" CssClass="RadButton_Bootstrap rbInfo" />
        <telerik:RadButton ID="RadButton7" runat="server" Skin="Bootstrap" Text="Light" CssClass="RadButton_Bootstrap rbLight" />
        <telerik:RadButton ID="RadButton8" runat="server" Skin="Bootstrap" Text="Dark" CssClass="RadButton_Bootstrap rbDark" />
````

## Notes

- Ensure to test the custom styles across different browsers to maintain consistency.
- Consider using a CSS preprocessor like SASS or LESS for more dynamic and manageable styling.

## See Also

- [RadButton Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/button/overview)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
