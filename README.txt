MJ Version 28 PWA

Version 28 adds a required unique Order field to Stores.
- Order accepts numeric display values, including decimals.
- When saved, Order is converted to the next higher whole number.
- If the desired Order is already used, existing Orders at or above it are shifted upward by one until all Store Orders are unique.
- Order is the first Stores data-entry field and is sized like State.
- Existing Store records without Order are assigned unique whole-number Orders when v28 first loads.
- IndexedDB persistence and existing Import/Export CSV behavior are retained.
