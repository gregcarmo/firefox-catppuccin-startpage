# Design: Vertically Center Links in Tabs

Centering categories/links block vertically within the links panel to improve layout for tabs with fewer items.

## Problem
In tabs with few links (like "chill"), the categories and links are aligned to the top, leaving significant empty space at the bottom.

## Proposed Changes

### `src/components/tabs/tabs.component.js`
Modify the `.categories .links` CSS rule to use Flexbox for vertical centering.

```css
.categories .links {
    right: 0;
    width: 70%;
    height: 100%;
    background: ${CONFIG.palette.base};
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
```

- `display: flex;` and `flex-direction: column;`: Enables flex layout for the list of categories.
- `justify-content: center;`: Centers the categories vertically within the 100% height container.

## Validation Plan
1. Open the startpage.
2. Navigate to a tab with few links.
3. Verify that the link categories are centered vertically.
4. Navigate to a tab with many links.
5. Verify that it still looks correct (it should just scroll or fit if it overflows, though the current design seems to have `overflow: hidden` on categories).
