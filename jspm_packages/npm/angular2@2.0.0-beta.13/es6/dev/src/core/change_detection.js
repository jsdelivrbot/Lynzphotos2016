/* */ 
"format esm";
/**
 * @module
 * @description
 * Change detection enables data binding in Angular.
 */
export { ChangeDetectionStrategy, ExpressionChangedAfterItHasBeenCheckedException, ChangeDetectionError, ChangeDetectorRef, WrappedValue, SimpleChange, IterableDiffers, KeyValueDiffers, CollectionChangeRecord, KeyValueChangeRecord } from './change_detection/change_detection';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILFNBQ0UsdUJBQXVCLEVBRXZCLCtDQUErQyxFQUMvQyxvQkFBb0IsRUFFcEIsaUJBQWlCLEVBRWpCLFlBQVksRUFDWixZQUFZLEVBRVosZUFBZSxFQUdmLGVBQWUsRUFHZixzQkFBc0IsRUFDdEIsb0JBQW9CLFFBRWYscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogQ2hhbmdlIGRldGVjdGlvbiBlbmFibGVzIGRhdGEgYmluZGluZyBpbiBBbmd1bGFyLlxuICovXG5cbmV4cG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXG4gIEV4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJJdEhhc0JlZW5DaGVja2VkRXhjZXB0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25FcnJvcixcblxuICBDaGFuZ2VEZXRlY3RvclJlZixcblxuICBXcmFwcGVkVmFsdWUsXG4gIFNpbXBsZUNoYW5nZSxcbiAgUGlwZVRyYW5zZm9ybSxcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBJdGVyYWJsZURpZmZlcixcbiAgSXRlcmFibGVEaWZmZXJGYWN0b3J5LFxuICBLZXlWYWx1ZURpZmZlcnMsXG4gIEtleVZhbHVlRGlmZmVyLFxuICBLZXlWYWx1ZURpZmZlckZhY3RvcnksXG4gIENvbGxlY3Rpb25DaGFuZ2VSZWNvcmQsXG4gIEtleVZhbHVlQ2hhbmdlUmVjb3JkLFxuICBUcmFja0J5Rm5cbn0gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nO1xuIl19