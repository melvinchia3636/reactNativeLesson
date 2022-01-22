# React Native Lesson (Styling Properties)

## Align Items
Describes how to align children along the **cross axis** of their container.

- `stretch` (default value) Stretch children of a container to match the height of the container's cross axis.
- `flex-start` Align children of a container to the start of the container's cross axis.
- `flex-end` Align children of a container to the end of the container's cross axis.
- `center` Align children of a container in the center of the container's cross axis.
- `baseline` Align children of a container along a common baseline. Individual children can be set to be the reference baseline for their parents.

```jsx
import React from "react";

...
function App() {
  ...
  <Element style={{
    alignItems: "center"
  }}
  ...
}
...
```

## Justify Content
Describes how to align children within the **main axis** of their container.

- flex-start(default value) Align children of a container to the start of the container's main axis.
- flex-end Align children of a container to the end of the container's main axis.
- center Align children of a container in the center of the container's main axis.
- space-between Evenly space off children across the container's main axis, distributing the remaining space between the children.
- space-around Evenly space off children across the container's main axis, distributing the remaining space around the children. Compared to space-between, using space-around will result in space being distributed to the beginning of the first child and end of the last child.
- space-evenly Evenly distribute children within the alignment container along the main axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.

```jsx
import React from "react";

...
function App() {
  ...
  <Element style={{
    alignItems: "center"
  }}
  ...
}
...
```
