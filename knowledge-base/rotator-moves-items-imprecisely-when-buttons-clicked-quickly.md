---
title: Rotator Moves Items Imprecisely when Buttons Clicked Quickly
description: Rotator Moves Items Imprecisely when Buttons Clicked Quickly. Check it now!
type: how-to
page_title: Rotator Moves Items Imprecisely when Buttons Clicked Quickly
slug: rotator-moves-items-imprecisely-when-buttons-clicked-quickly
res_type: kb
---

## Description

When the rotator buttons (`RotatorType` is `Buttons`) are clicked too quickly by the user, the rotator items do not animate with the preset duration and do not have the precise positions as expected.

The series of clicks causes a number of asynchronous animations to queue up and they cannot execute properly.

## Solution

Use custom buttons and set the `RotatorType` to `FromCode`, and add a small timeout before [calling the rotator API to show a next item](http://demos.telerik.com/aspnet-ajax/rotator/examples/clientapicontrol/defaultcs.aspx) (larger than the `FrameDuration`).

Script:

````JavaScript
var rotator = null;
var shouldRotate = true;
function showNextInRotator(direction) {
    if(shouldRotate){
        rotator.showNext(direction);
        shouldRotate = false;
        setTimeout(function () {
            shouldRotate = true;
        }, 1000);
    }
}
function OnClientLoad(sender, args) {
    rotator = sender;
}
````


Sample Markup (position and style the custom buttons as desired, switch the direction according to your case and [make sure the rotator size is correct]({%slug rotator/getting-started/overview%})):

````ASP.NET
<span onclick="showNextInRotator(Telerik.Web.UI.RotatorScrollDirection.Right);">left</span>
<span onclick="showNextInRotator(Telerik.Web.UI.RotatorScrollDirection.Left);">right</span>
<telerik:RadRotator runat="server" ID="rrRelatedItems" RotatorType="FromCode" FrameDuration="100" WrapFrames="false"
    Height="250" ItemHeight="250" Width="534" ItemWidth="178" RenderMode="Lightweight" OnClientLoad="OnClientLoad">
    <Items>
        <telerik:RadRotatorItem>
            <ItemTemplate>
                <div class="item">
                    first
                </div>
            </ItemTemplate>
        </telerik:RadRotatorItem>
        <telerik:RadRotatorItem>
            <ItemTemplate>
                <div class="item">
                    second
                </div>
            </ItemTemplate>
        </telerik:RadRotatorItem>
        <telerik:RadRotatorItem>
            <ItemTemplate>
                <div class="item">
                    third
                </div>
            </ItemTemplate>
        </telerik:RadRotatorItem>
        <telerik:RadRotatorItem>
            <ItemTemplate>
                <div class="item">
                    fourth
                </div>
            </ItemTemplate>
        </telerik:RadRotatorItem>
        <telerik:RadRotatorItem>
            <ItemTemplate>
                <div class="item">
                    fifth
                </div>
            </ItemTemplate>
        </telerik:RadRotatorItem>
        <telerik:RadRotatorItem>
            <ItemTemplate>
                <div class="item">
                    seventh
                </div>
            </ItemTemplate>
        </telerik:RadRotatorItem>
        <telerik:RadRotatorItem>
            <ItemTemplate>
                <div class="item">
                    seventh
                </div>
            </ItemTemplate>
        </telerik:RadRotatorItem>
    </Items>
</telerik:RadRotator>
````


Sample CSS to style the items

````CSS
.item
{
    box-sizing: border-box;
    width: 178px;
    height: 250px;
    border: 1px solid red;
}
````




