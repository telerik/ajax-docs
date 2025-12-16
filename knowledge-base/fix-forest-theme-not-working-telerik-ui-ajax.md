---
title: How to Fix Forest Theme Not Working in Telerik UI for ASP.NET AJAX
description: Learn how to fix the issue where the Forest theme is not working in Telerik UI for ASP.NET AJAX.
type: how-to
page_title: Fix Forest Theme Not Working | Telerik UI for ASP.NET AJAX
slug: fix-forest-theme-not-working-telerik-ui-ajax
tags: theme, Telerik UI, ASP.NET AJAX, Forest, fix
res_type: kb
---
## Environment
| Product         | Telerik UI for ASP.NET AJAX |
|-----------------|-------------------------------|
| Version         | all           |

## Description
I upgraded Telerik UI for ASP.NET AJAX, but the Forest theme is no longer working. It was working fine in previous versions. I would like to know if it has been replaced or how to fix this issue.

## Solution
The Forest skin in Telerik UI for ASP.NET AJAX is discontinued and is no longer available. It was announced as obsolete in the blog post [6 Telerik ASP.NET AJAX Skins Going Obsolete](https://www.telerik.com/blogs/6-telerik-asp.net-ajax-skins-going-obsolete). 

To resolve this issue, there are two approaches:

Option 1: Create a Custom Theme
1. Use the [ThemeBuilder app](https://www.telerik.com/themebuilder) to create your own custom theme.
2. Follow the instructions [here]({%slug theme-builder/create%}) to create a custom theme with the ThemeBuilder.
3. Download the custom theme and apply it to your page with the Telerik controls. Instructions can be found [here]({%slug theme-builder/download-and-apply%}). Note that the ThemeBuilder produces skins for the Lightweight rendering, so make sure to set the RenderMode properties of the Telerik controls to Lightweight.

Option 2: Choose an Available Theme
1. Choose one of the available 21 themes instead of the Forest theme.
2. Set the Skin properties of the Telerik controls to the chosen theme. For example, you can set it to "Default" which is also gray colored.
3. Test your page again with the new theme.

Note: The ThemeBuilder app is only available for the Lightweight rendering mode.


