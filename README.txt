MJ Version 23 PWA

Version 23 applies the persistence, update, and CSV-error-handling mechanism used in Excedrin:
- IndexedDB (MJDB) is the authoritative persistent store for Stores, Purchases, Products, and LookupCodes.
- Existing localStorage data is automatically migrated into IndexedDB on first run and retained as a backup.
- Add/Change/Delete/Import updates are persisted without requiring site-data or cache clearing.
- The service-worker cache is versioned and navigation requests use a network-first update path so new application versions can load without clearing persisted data.
- CSV imports are all-or-nothing: existing table data is not replaced until the complete selected CSV has passed validation.
- CSV import errors identify the CSV row, complete row contents, invalid element/value, and the reason it is invalid.
- Application Codes Import continues to leave existing data intact if the file-selection operation is cancelled.
