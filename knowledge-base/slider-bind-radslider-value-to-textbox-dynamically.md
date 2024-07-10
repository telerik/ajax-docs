---
title: Binding RadSlider Value to a TextBox Dynamically in ASP.NET AJAX
description: Learn how to bind the value of dynamically created RadSlider controls to TextBoxes and update them in real-time using JavaScript.
type: how-to
page_title: How to Bind RadSlider to TextBox Dynamically and Update in Real-time
slug: slider-bind-radslider-value-to-textbox-dynamically
tags: radslider, asp.net ajax, dynamic controls, javascript, onclientvaluechanged
res_type: kb
ticketid: 1656235
---

## Environment

| Product | Version |
| --- | --- |
| RadSlider for ASP.NET AJAX | all |

## Description

I am creating multiple RadSlider and TextBox controls dynamically in the code-behind. Each control has a unique ID composed of a text name and a numeric record ID (e.g., radslider_12345 and tb_slider_rating_12345). I need a way to bind the value of the RadSlider to the TextBox so that as the slider is dragged, the TextBox updates in real-time with the slider's value.

This KB article also answers the following questions:
- How can I dynamically create RadSlider and TextBox controls in ASP.NET AJAX?
- How do I bind a RadSlider value to a TextBox and update it in real-time?
- What is the best way to use the numeric portion of a control's ID to associate two dynamically created controls?

## Solution

To dynamically create multiple [RadSlider](https://docs.telerik.com/devtools/aspnet-ajax/controls/slider/overview) and TextBox controls and bind them so that the TextBox displays the current value of the RadSlider in real time, utilize the `OnClientValueChanged` event of the RadSlider. This approach avoids postbacks and updates the TextBox directly on the client side.

Here's how to implement this solution:

1. Dynamically create RadSlider and TextBox controls in the code-behind. Assign unique IDs that include a numeric portion.
2. Register a JavaScript function to handle the RadSlider's `OnClientValueChanged` event.
3. In the JavaScript function, extract the numeric ID from the sender RadSlider's ID, construct the associated TextBox's ID, and update the TextBox's value with the RadSlider's value.

### Code Example

Below is an example demonstrating how to set up the dynamic creation of controls and the JavaScript function:

```csharp
protected void Page_Load(object sender, EventArgs e)
{
    var data = GetSliderData(); // Assume this method fetches your data

    foreach (var item in data)
    {
        // Create RadSlider
        Telerik.Web.UI.RadSlider rs = new Telerik.Web.UI.RadSlider();
        rs.ID = "radslider_" + item.Id;
        rs.MaximumValue = 5.0m;
        rs.MinimumValue = 1.0m;
        rs.SmallChange = 0.1m;
        rs.LargeChange = 1;
        rs.Width = 650;
        rs.ItemType = Telerik.Web.UI.SliderItemType.Tick;
        rs.AutoPostBack = false;
        rs.OnClientValueChanged = "OnClientValueChanged";

        // Create TextBox
        TextBox tb_slider_rating = new TextBox();
        tb_slider_rating.ID = "tb_slider_rating_" + item.Id;
        tb_slider_rating.Text = rs.Value.ToString();

        // Add controls to the page
        Form.Controls.Add(rs);
        Form.Controls.Add(new LiteralControl("<br />"));
        Form.Controls.Add(tb_slider_rating);
        Form.Controls.Add(new LiteralControl("<br /><br />"));
    }

    // Register JavaScript function
    string script = @"
    <script type='text/javascript'>
        function OnClientValueChanged(sender, eventArgs) {
            var sliderId = sender.get_id();
            var numericId = sliderId.split('_')[1];
            var textBoxId = 'tb_slider_rating_' + numericId;
            var textBox = document.getElementById(textBoxId);
            if (textBox) {
                textBox.value = sender.get_value();
            }
        }
    </script>";

    ClientScript.RegisterStartupScript(this.GetType(), "OnClientValueChangedScript", script, false);
}

private IEnumerable<MyDataItem> GetSliderData()
{
    // Replace with your actual data retrieval logic
    return new List<MyDataItem>
    {
        new MyDataItem { Id = 12345 },
        new MyDataItem { Id = 12346 },
        new MyDataItem { Id = 12347 },
        new MyDataItem { Id = 12348 }
    };
}

public class MyDataItem
{
    public int Id { get; set; }
}
```

This solution efficiently handles the real-time update of multiple dynamically created RadSlider and TextBox pairs using JavaScript and dynamic control creation in ASP.NET AJAX.

## See Also

- [RadSlider Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/slider/overview)
- [RadSlider Client-Side API](https://docs.telerik.com/devtools/aspnet-ajax/controls/slider/client-side-programming/overview)
