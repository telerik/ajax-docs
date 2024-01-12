---
title: Methods
page_title: ChipList JavaScript Methods
description: JavaScript Methods of the Telerik WebForms ChipList Control.
slug: chiplist/client-side-programming/methods
tags: chiplist,client-side,methods
published: True
position: 3
---

# Methods

JavaScript methods of the Telerik WebForms ChipList Control.

## createItem

The `createItem()` method of the ChipList generates a [JavaScript object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) with the structure required for the ChipList items.

#### Syntax

```javascript
createItem(label, icon, themeColor, avatarClass, enabled, iconClass, selected)
```

#### Parameters

- **label** `string` - The Label (text) for the Chip item.
- **icon** `string` - The name of the icon from the list of embedded icons, see [Icon]({%slug chiplist/appearance %}#icon).
- **themeColor** [`Telerik.Web.UI.RadChipThemeColor`]({%slug chip/client-side-programming/enums %}#themecolor) - The Chip item theme color.
- **avatarClass** `string` - The CSS class name to [Display Avatars]({%slug chiplist/customization %}#display-avatars).
- **enabled** `bool` - true/false whether or not the ChipList Item should be rendered as enabled.
- **iconClass** `string` - The CSS class name pointing to the [Custom Icon]({%slug chiplist/customization %}#custom-icons).
- **selected** `bool` - true/false whether or not the ChipList Item should be rendered as selected.


Example

````JavaScript
function myFunction() {
    // Reference the Telerik.Web.UI.RadChipList object
    var chipList = $find('<%= RadChipList1.ClientID %>');

    var item1 = chipList.createItem('Chip 1');
    var item2 = chipList.createItem('Chip 2');

    var arrayOfItems = [ item1, item2 ];

    chipList.set_items(arrayOfItems);
}
````

The method expects the parameters in an order, however, they are not required. If you would like to skip some of the parameters, you can pass `null` to those places.

Example

````JavaScript
function myFunction() {
    // Reference the Telerik.Web.UI.RadChipList object
    var chipList = $find('<%= RadChipList1.ClientID %>');

    // Order of parameters: label, icon, themeColor, avatarClass, enabled, iconClass, selected
    var chipWithIcon = chipList.createItem('Save', 'save');
    var selectedChip = chipList.createItem('Selected', null, null, null, null, null, true);

    var arrayOfItems = [ chipWithIcon, selectedChip ];

    chipList.set_items(arrayOfItems);
}
````

You can also create the item and set it's property values later.

Example

````JavaScript
function myFunction() {
    // Reference the Telerik.Web.UI.RadChipList object
    var chipList = $find('<%= RadChipList1.ClientID %>');

    // create the item
    var chipListItem = chipList.createItem();

    // set the item's properties
    chipListItem.label = 'Remove';
    chipListItem.icon = 'trash';
    chipListItem.themeColor = Telerik.Web.UI.RadChipThemeColor.Error;

    var arrayOfItems = [ chipWithIcon, selectedChip ];

    chipList.set_items(arrayOfItems);
}
````

## Next Steps

- [Events]({%slug chiplist/client-side-programming/events%})
- [Enums]({%slug chiplist/client-side-programming/enums%})

## See Also

- [Overview]({%slug chiplist/client-side-programming/overview%})
- [Properties]({%slug chiplist/client-side-programming/properties%})
- [Events]({%slug chiplist/client-side-programming/events%})
- [Enums]({%slug chiplist/client-side-programming/enums%})

 