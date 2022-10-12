---
title: Importing a Theme
page_title: Importing a Theme
description: Learn how to import a custom theme in ThemeBuilder and update the styles of your Web Forms components.
slug: theme-builder/import
tags: import,theme
published: True
position: 3
---

# Importing a Theme

[Progress ThemeBuilder for ASP.NET AJAX](https://themebuilder.telerik.com/aspnet-ajax) allows you to upload and import a theme that you previously created so you can modify it further. 

1. Open [ThemeBuilder](https://themebuilder.telerik.com/aspnet-ajax).

1. Select **Import Theme**.

   <img src="images/themebuilder-import-theme.png" alt="Import Theme button in ThemeBuilder" width="145"/>

1. Provide the `theme-name.json` file that is included in the downloaded ZIP package with the theme.

1. Start customizing your theme by using the ThemeBuilder features your project requires.

### JSON File Structure

The JSON file holds the information about the modified variables of the customized theme. The structure of the file is defined in the [kendo-swatch JSON schema](https://github.com/telerik/kendo-theme-tasks/blob/develop/lib/schemas/kendo-swatch.json) part of the [kendo-theme-tasks package](https://github.com/telerik/kendo-theme-tasks).

If you don't have a JSON file and your custom theme targets specific components, it is recommended that you create the JSON file from scratch:

1. [Create a new theme](#creating-new-themes) through the ThemeBuilder.
1. Paste the variables from your SCSS file.
1. Download the theme. 

As a result, the JSON file is generated. The structure of the JSON file is defined in the [kendo-swatch JSON schema](https://github.com/telerik/kendo-theme-tasks/blob/develop/lib/schemas/kendo-swatch.json) part of the [kendo-theme-tasks package](https://github.com/telerik/kendo-theme-tasks).

When you edit the JSON file, consider the following specifics:

* `THEME_NAME`&mdash;Indicates the name of your custom theme.
* `BASE_THEME`&mdash;The name of your base theme, for example, **default**, **bootstrap**, **material**, and so on.
* `components`&mdash;The list of all components that will be included in the compiled theme. Leave empty for all.
* `groups`&mdash;The list of variables that will be customized in the Theme Builder, organized in groups.
* `key` and `value` variables&mdash;The `key` of the variable outputs its name. The `value` of the variable outputs its value. 

For example:

````json
"text-color": {
	"key": "text-color",
	"name": "Body color",
	"value": "#5f5f5f",
	"type": "color"
}
````

outputs:

````scss
$text-color: #5f5f5f;
````

The following example demonstrates the JSON file for the **Default**, **Bootstrap**, **Silk**, and **Glow** base themes.
````json
{
    "name": "THEME_NAME",
    "base": "@telerik/webui-theme-BASE_THEME",
    "product": "webui",
    "components": [],
    "groups": [
        {
            "name": "",
            "variables": {
                "accent": {
                    "name": "Primary",
                    "value": "#14afca",
                    "type": "color",
                    "key": "accent"
                },
                "accent-primary": {
                    "name": "Primary contrast",
                    "value": "#ffffff",
                    "type": "color",
                    "key": "accent-primary"
                },
                "text-color": {
                    "key": "text-color",
                    "name": "Body color",
                    "value": "#5f5f5f",
                    "type": "color"
                },
                "bg-color": {
                    "key": "bg-color",
                    "name": "Body background",
                    "value": "#ffffff",
                    "type": "color"
                },
                "base-text": {
                    "key": "base-text",
                    "name": "Header color",
                    "value": "#5f5f5f",
                    "type": "color"
                },
                "base-bg": {
                    "key": "base-bg",
                    "name": "Header background",
                    "value": "#e3e3e3",
                    "type": "color"
                },
                "hovered-text": {
                    "key": "hovered-text",
                    "name": "Hover color",
                    "value": "#ffffff",
                    "type": "color"
                },
                "hovered-bg": {
                    "key": "hovered-bg",
                    "name": "Hover background",
                    "value": "#0092ab",
                    "type": "color"
                },
                "selected-text": {
                    "key": "selected-text",
                    "name": "Selected color",
                    "value": "#ffffff",
                    "type": "color"
                },
                "selected-bg": {
                    "key": "selected-bg",
                    "name": "Selected background",
                    "value": "#14afca",
                    "type": "color"
                }
            }
        }
    ]
}
````

The following example demonstrates the JSON file for the **Material** base theme.

````json
{
    "name": "THEME_NAME",
    "base": "@telerik/webui-theme-material",
    "product": "webui",
    "components": [],
    "groups": [
        {
            "name": "",
            "variables": {
                "primary-name": {
                    "name": "Primary",
                    "value": "lightGreen",
                    "type": "colorlist",
                    "enum": [
                        {
                            "value": "red",
                            "text": "Red",
                            "preview": "#f44336"
                        },
                        {
                            "value": "pink",
                            "text": "Pink",
                            "preview": "#e91e63"
                        },
                        {
                            "value": "purple",
                            "text": "Purple",
                            "preview": "#9c27b0"
                        },
                        {
                            "value": "deepPurple",
                            "text": "Deep Purple",
                            "preview": "#673ab7"
                        },
                        {
                            "value": "indigo",
                            "text": "Indigo",
                            "preview": "#3f51b5"
                        },
                        {
                            "value": "blue",
                            "text": "Blue",
                            "preview": "#2196f3"
                        },
                        {
                            "value": "lightBlue",
                            "text": "Light Blue",
                            "preview": "#03a9f4"
                        },
                        {
                            "value": "cyan",
                            "text": "Cyan",
                            "preview": "#00bcd4"
                        },
                        {
                            "value": "teal",
                            "text": "Teal",
                            "preview": "#009688"
                        },
                        {
                            "value": "green",
                            "text": "Green",
                            "preview": "#4caf50"
                        },
                        {
                            "value": "lightGreen",
                            "text": "Light Green",
                            "preview": "#8bc34a"
                        },
                        {
                            "value": "lime",
                            "text": "Lime",
                            "preview": "#cddc39"
                        },
                        {
                            "value": "yellow",
                            "text": "Yellow",
                            "preview": "#ffeb3b"
                        },
                        {
                            "value": "amber",
                            "text": "Amber",
                            "preview": "#ffc107"
                        },
                        {
                            "value": "orange",
                            "text": "Orange",
                            "preview": "#ff9800"
                        },
                        {
                            "value": "deepOrange",
                            "text": "Deep Orange",
                            "preview": "#ff5722"
                        },
                        {
                            "value": "brown",
                            "text": "Brown",
                            "preview": "#795548"
                        },
                        {
                            "value": "gray",
                            "text": "Gray",
                            "preview": "#9e9e9e"
                        },
                        {
                            "value": "blueGray",
                            "text": "Blue Gray",
                            "preview": "#607d8b"
                        }
                    ],
                    "key": "primary-name"
                },
                "accent-name": {
                    "name": "Secondary",
                    "value": "lightBlue",
                    "type": "colorlist",
                    "enum": [
                        {
                            "value": "red",
                            "text": "Red",
                            "preview": "#f44336"
                        },
                        {
                            "value": "pink",
                            "text": "Pink",
                            "preview": "#e91e63"
                        },
                        {
                            "value": "purple",
                            "text": "Purple",
                            "preview": "#9c27b0"
                        },
                        {
                            "value": "deepPurple",
                            "text": "Deep Purple",
                            "preview": "#673ab7"
                        },
                        {
                            "value": "indigo",
                            "text": "Indigo",
                            "preview": "#3f51b5"
                        },
                        {
                            "value": "blue",
                            "text": "Blue",
                            "preview": "#2196f3"
                        },
                        {
                            "value": "lightBlue",
                            "text": "Light Blue",
                            "preview": "#03a9f4"
                        },
                        {
                            "value": "cyan",
                            "text": "Cyan",
                            "preview": "#00bcd4"
                        },
                        {
                            "value": "teal",
                            "text": "Teal",
                            "preview": "#009688"
                        },
                        {
                            "value": "green",
                            "text": "Green",
                            "preview": "#4caf50"
                        },
                        {
                            "value": "lightGreen",
                            "text": "Light Green",
                            "preview": "#8bc34a"
                        },
                        {
                            "value": "lime",
                            "text": "Lime",
                            "preview": "#cddc39"
                        },
                        {
                            "value": "yellow",
                            "text": "Yellow",
                            "preview": "#ffeb3b"
                        },
                        {
                            "value": "amber",
                            "text": "Amber",
                            "preview": "#ffc107"
                        },
                        {
                            "value": "orange",
                            "text": "Orange",
                            "preview": "#ff9800"
                        },
                        {
                            "value": "deepOrange",
                            "text": "Deep Orange",
                            "preview": "#ff5722"
                        },
                        {
                            "value": "brown",
                            "text": "Brown",
                            "preview": "#795548"
                        },
                        {
                            "value": "gray",
                            "text": "Gray",
                            "preview": "#9e9e9e"
                        },
                        {
                            "value": "blueGray",
                            "text": "Blue Gray",
                            "preview": "#607d8b"
                        }
                    ],
                    "key": "accent-name"
                },
                "base-name": {
                    "name": "Theme luminosity",
                    "type": "color-mode",
                    "value": "light",
                    "enum": [
                        {
                            "value": "light",
                            "text": "Light",
                            "preview": "#ffffff"
                        },
                        {
                            "value": "dark",
                            "text": "Dark",
                            "preview": "#000000"
                        }
                    ],
                    "key": "base-name"
                }
            }
        }
    ]
}
````

Once you have uploaded the theme, you can customize it as described in the [Creating a Theme]({%slug theme-builder/create%}) article.

## See Also

  * [Read about Sass ThemeBuilder]({%slug theme-builder/overview%})
  * [Open the Sass ThemeBuilder](https://themebuilder.telerik.com/aspnet-ajax)
  * [Create a new skin]({%slug theme-builder/create%})
