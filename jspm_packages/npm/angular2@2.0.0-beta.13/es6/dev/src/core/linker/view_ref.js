/* */ 
"format esm";
import { unimplemented } from 'angular2/src/facade/exceptions';
export class ViewRef {
    /**
     * @internal
     */
    get changeDetectorRef() { return unimplemented(); }
    ;
    get destroyed() { return unimplemented(); }
}
/**
 * Represents a View containing a single Element that is the Host Element of a {@link Component}
 * instance.
 *
 * A Host View is created for every dynamically created Component that was compiled on its own (as
 * opposed to as a part of another Component's Template) via {@link Compiler#compileInHost} or one
 * of the higher-level APIs: {@link AppViewManager#createRootHostView},
 * {@link AppViewManager#createHostViewInContainer}, {@link ViewContainerRef#createHostView}.
 */
export class HostViewRef extends ViewRef {
    get rootNodes() { return unimplemented(); }
    ;
}
/**
 * Represents an Angular View.
 *
 * <!-- TODO: move the next two paragraphs to the dev guide -->
 * A View is a fundamental building block of the application UI. It is the smallest grouping of
 * Elements which are created and destroyed together.
 *
 * Properties of elements in a View can change, but the structure (number and order) of elements in
 * a View cannot. Changing the structure of Elements can only be done by inserting, moving or
 * removing nested Views via a {@link ViewContainerRef}. Each View can contain many View Containers.
 * <!-- /TODO -->
 *
 * ### Example
 *
 * Given this template...
 *
 * ```
 * Count: {{items.length}}
 * <ul>
 *   <li *ngFor="var item of items">{{item}}</li>
 * </ul>
 * ```
 *
 * ... we have two {@link ProtoViewRef}s:
 *
 * Outer {@link ProtoViewRef}:
 * ```
 * Count: {{items.length}}
 * <ul>
 *   <template ngFor var-item [ngForOf]="items"></template>
 * </ul>
 * ```
 *
 * Inner {@link ProtoViewRef}:
 * ```
 *   <li>{{item}}</li>
 * ```
 *
 * Notice that the original template is broken down into two separate {@link ProtoViewRef}s.
 *
 * The outer/inner {@link ProtoViewRef}s are then assembled into views like so:
 *
 * ```
 * <!-- ViewRef: outer-0 -->
 * Count: 2
 * <ul>
 *   <template view-container-ref></template>
 *   <!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
 *   <!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
 * </ul>
 * <!-- /ViewRef: outer-0 -->
 * ```
 */
export class EmbeddedViewRef extends ViewRef {
    get rootNodes() { return unimplemented(); }
    ;
}
export class ViewRef_ {
    constructor(_view) {
        this._view = _view;
        this._view = _view;
    }
    get internalView() { return this._view; }
    /**
     * Return `ChangeDetectorRef`
     */
    get changeDetectorRef() { return this._view.changeDetector.ref; }
    get rootNodes() { return this._view.flatRootNodes; }
    setLocal(variableName, value) { this._view.setLocal(variableName, value); }
    hasLocal(variableName) { return this._view.hasLocal(variableName); }
    get destroyed() { return this._view.destroyed; }
}
export class HostViewFactoryRef {
}
export class HostViewFactoryRef_ {
    constructor(_hostViewFactory) {
        this._hostViewFactory = _hostViewFactory;
    }
    get internalHostViewFactory() { return this._hostViewFactory; }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld19yZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdmlld19yZWYudHMiXSwibmFtZXMiOlsiVmlld1JlZiIsIlZpZXdSZWYuY2hhbmdlRGV0ZWN0b3JSZWYiLCJWaWV3UmVmLmRlc3Ryb3llZCIsIkhvc3RWaWV3UmVmIiwiSG9zdFZpZXdSZWYucm9vdE5vZGVzIiwiRW1iZWRkZWRWaWV3UmVmIiwiRW1iZWRkZWRWaWV3UmVmLnJvb3ROb2RlcyIsIlZpZXdSZWZfIiwiVmlld1JlZl8uY29uc3RydWN0b3IiLCJWaWV3UmVmXy5pbnRlcm5hbFZpZXciLCJWaWV3UmVmXy5jaGFuZ2VEZXRlY3RvclJlZiIsIlZpZXdSZWZfLnJvb3ROb2RlcyIsIlZpZXdSZWZfLnNldExvY2FsIiwiVmlld1JlZl8uaGFzTG9jYWwiLCJWaWV3UmVmXy5kZXN0cm95ZWQiLCJIb3N0Vmlld0ZhY3RvcnlSZWYiLCJIb3N0Vmlld0ZhY3RvcnlSZWZfIiwiSG9zdFZpZXdGYWN0b3J5UmVmXy5jb25zdHJ1Y3RvciIsIkhvc3RWaWV3RmFjdG9yeVJlZl8uaW50ZXJuYWxIb3N0Vmlld0ZhY3RvcnkiXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO0FBSTVEO0lBQ0VBOztPQUVHQTtJQUNIQSxJQUFJQSxpQkFBaUJBLEtBQXdCQyxNQUFNQSxDQUFvQkEsYUFBYUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7O0lBRXpGRCxJQUFJQSxTQUFTQSxLQUFjRSxNQUFNQSxDQUFVQSxhQUFhQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUMvREYsQ0FBQ0E7QUFFRDs7Ozs7Ozs7R0FRRztBQUNILGlDQUEwQyxPQUFPO0lBQy9DRyxJQUFJQSxTQUFTQSxLQUFZQyxNQUFNQSxDQUFRQSxhQUFhQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTs7QUFDM0RELENBQUNBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvREc7QUFDSCxxQ0FBOEMsT0FBTztJQVduREUsSUFBSUEsU0FBU0EsS0FBWUMsTUFBTUEsQ0FBUUEsYUFBYUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7O0FBQzNERCxDQUFDQTtBQUVEO0lBQ0VFLFlBQW9CQSxLQUFjQTtRQUFkQyxVQUFLQSxHQUFMQSxLQUFLQSxDQUFTQTtRQUFJQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUFDQSxDQUFDQTtJQUUzREQsSUFBSUEsWUFBWUEsS0FBY0UsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFbERGOztPQUVHQTtJQUNIQSxJQUFJQSxpQkFBaUJBLEtBQXdCRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxjQUFjQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUVwRkgsSUFBSUEsU0FBU0EsS0FBWUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFM0RKLFFBQVFBLENBQUNBLFlBQW9CQSxFQUFFQSxLQUFVQSxJQUFVSyxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxDQUFDQSxZQUFZQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUU5RkwsUUFBUUEsQ0FBQ0EsWUFBb0JBLElBQWFNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRXJGTixJQUFJQSxTQUFTQSxLQUFjTyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUMzRFAsQ0FBQ0E7QUFFRDtBQUEwQ1EsQ0FBQ0E7QUFFM0M7SUFDRUMsWUFBb0JBLGdCQUFpQ0E7UUFBakNDLHFCQUFnQkEsR0FBaEJBLGdCQUFnQkEsQ0FBaUJBO0lBQUdBLENBQUNBO0lBRXpERCxJQUFJQSx1QkFBdUJBLEtBQXNCRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBLENBQUNBO0FBQ2xGRixDQUFDQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1bmltcGxlbWVudGVkfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnLi4vY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0b3JfcmVmJztcbmltcG9ydCB7QXBwVmlldywgSG9zdFZpZXdGYWN0b3J5fSBmcm9tICcuL3ZpZXcnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmlld1JlZiB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldCBjaGFuZ2VEZXRlY3RvclJlZigpOiBDaGFuZ2VEZXRlY3RvclJlZiB7IHJldHVybiA8Q2hhbmdlRGV0ZWN0b3JSZWY+dW5pbXBsZW1lbnRlZCgpOyB9O1xuXG4gIGdldCBkZXN0cm95ZWQoKTogYm9vbGVhbiB7IHJldHVybiA8Ym9vbGVhbj51bmltcGxlbWVudGVkKCk7IH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVmlldyBjb250YWluaW5nIGEgc2luZ2xlIEVsZW1lbnQgdGhhdCBpcyB0aGUgSG9zdCBFbGVtZW50IG9mIGEge0BsaW5rIENvbXBvbmVudH1cbiAqIGluc3RhbmNlLlxuICpcbiAqIEEgSG9zdCBWaWV3IGlzIGNyZWF0ZWQgZm9yIGV2ZXJ5IGR5bmFtaWNhbGx5IGNyZWF0ZWQgQ29tcG9uZW50IHRoYXQgd2FzIGNvbXBpbGVkIG9uIGl0cyBvd24gKGFzXG4gKiBvcHBvc2VkIHRvIGFzIGEgcGFydCBvZiBhbm90aGVyIENvbXBvbmVudCdzIFRlbXBsYXRlKSB2aWEge0BsaW5rIENvbXBpbGVyI2NvbXBpbGVJbkhvc3R9IG9yIG9uZVxuICogb2YgdGhlIGhpZ2hlci1sZXZlbCBBUElzOiB7QGxpbmsgQXBwVmlld01hbmFnZXIjY3JlYXRlUm9vdEhvc3RWaWV3fSxcbiAqIHtAbGluayBBcHBWaWV3TWFuYWdlciNjcmVhdGVIb3N0Vmlld0luQ29udGFpbmVyfSwge0BsaW5rIFZpZXdDb250YWluZXJSZWYjY3JlYXRlSG9zdFZpZXd9LlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSG9zdFZpZXdSZWYgZXh0ZW5kcyBWaWV3UmVmIHtcbiAgZ2V0IHJvb3ROb2RlcygpOiBhbnlbXSB7IHJldHVybiA8YW55W10+dW5pbXBsZW1lbnRlZCgpOyB9O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gQW5ndWxhciBWaWV3LlxuICpcbiAqIDwhLS0gVE9ETzogbW92ZSB0aGUgbmV4dCB0d28gcGFyYWdyYXBocyB0byB0aGUgZGV2IGd1aWRlIC0tPlxuICogQSBWaWV3IGlzIGEgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2sgb2YgdGhlIGFwcGxpY2F0aW9uIFVJLiBJdCBpcyB0aGUgc21hbGxlc3QgZ3JvdXBpbmcgb2ZcbiAqIEVsZW1lbnRzIHdoaWNoIGFyZSBjcmVhdGVkIGFuZCBkZXN0cm95ZWQgdG9nZXRoZXIuXG4gKlxuICogUHJvcGVydGllcyBvZiBlbGVtZW50cyBpbiBhIFZpZXcgY2FuIGNoYW5nZSwgYnV0IHRoZSBzdHJ1Y3R1cmUgKG51bWJlciBhbmQgb3JkZXIpIG9mIGVsZW1lbnRzIGluXG4gKiBhIFZpZXcgY2Fubm90LiBDaGFuZ2luZyB0aGUgc3RydWN0dXJlIG9mIEVsZW1lbnRzIGNhbiBvbmx5IGJlIGRvbmUgYnkgaW5zZXJ0aW5nLCBtb3Zpbmcgb3JcbiAqIHJlbW92aW5nIG5lc3RlZCBWaWV3cyB2aWEgYSB7QGxpbmsgVmlld0NvbnRhaW5lclJlZn0uIEVhY2ggVmlldyBjYW4gY29udGFpbiBtYW55IFZpZXcgQ29udGFpbmVycy5cbiAqIDwhLS0gL1RPRE8gLS0+XG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBHaXZlbiB0aGlzIHRlbXBsYXRlLi4uXG4gKlxuICogYGBgXG4gKiBDb3VudDoge3tpdGVtcy5sZW5ndGh9fVxuICogPHVsPlxuICogICA8bGkgKm5nRm9yPVwidmFyIGl0ZW0gb2YgaXRlbXNcIj57e2l0ZW19fTwvbGk+XG4gKiA8L3VsPlxuICogYGBgXG4gKlxuICogLi4uIHdlIGhhdmUgdHdvIHtAbGluayBQcm90b1ZpZXdSZWZ9czpcbiAqXG4gKiBPdXRlciB7QGxpbmsgUHJvdG9WaWV3UmVmfTpcbiAqIGBgYFxuICogQ291bnQ6IHt7aXRlbXMubGVuZ3RofX1cbiAqIDx1bD5cbiAqICAgPHRlbXBsYXRlIG5nRm9yIHZhci1pdGVtIFtuZ0Zvck9mXT1cIml0ZW1zXCI+PC90ZW1wbGF0ZT5cbiAqIDwvdWw+XG4gKiBgYGBcbiAqXG4gKiBJbm5lciB7QGxpbmsgUHJvdG9WaWV3UmVmfTpcbiAqIGBgYFxuICogICA8bGk+e3tpdGVtfX08L2xpPlxuICogYGBgXG4gKlxuICogTm90aWNlIHRoYXQgdGhlIG9yaWdpbmFsIHRlbXBsYXRlIGlzIGJyb2tlbiBkb3duIGludG8gdHdvIHNlcGFyYXRlIHtAbGluayBQcm90b1ZpZXdSZWZ9cy5cbiAqXG4gKiBUaGUgb3V0ZXIvaW5uZXIge0BsaW5rIFByb3RvVmlld1JlZn1zIGFyZSB0aGVuIGFzc2VtYmxlZCBpbnRvIHZpZXdzIGxpa2Ugc286XG4gKlxuICogYGBgXG4gKiA8IS0tIFZpZXdSZWY6IG91dGVyLTAgLS0+XG4gKiBDb3VudDogMlxuICogPHVsPlxuICogICA8dGVtcGxhdGUgdmlldy1jb250YWluZXItcmVmPjwvdGVtcGxhdGU+XG4gKiAgIDwhLS0gVmlld1JlZjogaW5uZXItMSAtLT48bGk+Zmlyc3Q8L2xpPjwhLS0gL1ZpZXdSZWY6IGlubmVyLTEgLS0+XG4gKiAgIDwhLS0gVmlld1JlZjogaW5uZXItMiAtLT48bGk+c2Vjb25kPC9saT48IS0tIC9WaWV3UmVmOiBpbm5lci0yIC0tPlxuICogPC91bD5cbiAqIDwhLS0gL1ZpZXdSZWY6IG91dGVyLTAgLS0+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVtYmVkZGVkVmlld1JlZiBleHRlbmRzIFZpZXdSZWYge1xuICAvKipcbiAgICogU2V0cyBgdmFsdWVgIG9mIGxvY2FsIHZhcmlhYmxlIGNhbGxlZCBgdmFyaWFibGVOYW1lYCBpbiB0aGlzIFZpZXcuXG4gICAqL1xuICBhYnN0cmFjdCBzZXRMb2NhbCh2YXJpYWJsZU5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoaXMgdmlldyBoYXMgYSBsb2NhbCB2YXJpYWJsZSBjYWxsZWQgYHZhcmlhYmxlTmFtZWAuXG4gICAqL1xuICBhYnN0cmFjdCBoYXNMb2NhbCh2YXJpYWJsZU5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgZ2V0IHJvb3ROb2RlcygpOiBhbnlbXSB7IHJldHVybiA8YW55W10+dW5pbXBsZW1lbnRlZCgpOyB9O1xufVxuXG5leHBvcnQgY2xhc3MgVmlld1JlZl8gaW1wbGVtZW50cyBFbWJlZGRlZFZpZXdSZWYsIEhvc3RWaWV3UmVmIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlldzogQXBwVmlldykgeyB0aGlzLl92aWV3ID0gX3ZpZXc7IH1cblxuICBnZXQgaW50ZXJuYWxWaWV3KCk6IEFwcFZpZXcgeyByZXR1cm4gdGhpcy5fdmlldzsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYENoYW5nZURldGVjdG9yUmVmYFxuICAgKi9cbiAgZ2V0IGNoYW5nZURldGVjdG9yUmVmKCk6IENoYW5nZURldGVjdG9yUmVmIHsgcmV0dXJuIHRoaXMuX3ZpZXcuY2hhbmdlRGV0ZWN0b3IucmVmOyB9XG5cbiAgZ2V0IHJvb3ROb2RlcygpOiBhbnlbXSB7IHJldHVybiB0aGlzLl92aWV3LmZsYXRSb290Tm9kZXM7IH1cblxuICBzZXRMb2NhbCh2YXJpYWJsZU5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQgeyB0aGlzLl92aWV3LnNldExvY2FsKHZhcmlhYmxlTmFtZSwgdmFsdWUpOyB9XG5cbiAgaGFzTG9jYWwodmFyaWFibGVOYW1lOiBzdHJpbmcpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3ZpZXcuaGFzTG9jYWwodmFyaWFibGVOYW1lKTsgfVxuXG4gIGdldCBkZXN0cm95ZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl92aWV3LmRlc3Ryb3llZDsgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSG9zdFZpZXdGYWN0b3J5UmVmIHt9XG5cbmV4cG9ydCBjbGFzcyBIb3N0Vmlld0ZhY3RvcnlSZWZfIGltcGxlbWVudHMgSG9zdFZpZXdGYWN0b3J5UmVmIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG9zdFZpZXdGYWN0b3J5OiBIb3N0Vmlld0ZhY3RvcnkpIHt9XG5cbiAgZ2V0IGludGVybmFsSG9zdFZpZXdGYWN0b3J5KCk6IEhvc3RWaWV3RmFjdG9yeSB7IHJldHVybiB0aGlzLl9ob3N0Vmlld0ZhY3Rvcnk7IH1cbn1cbiJdfQ==