/* */ 
"format esm";
export class DebugContext {
    constructor(element, componentElement, directive, context, locals, injector) {
        this.element = element;
        this.componentElement = componentElement;
        this.directive = directive;
        this.context = context;
        this.locals = locals;
        this.injector = injector;
    }
}
export class ChangeDetectorGenConfig {
    constructor(genDebugInfo, logBindingUpdate, useJit) {
        this.genDebugInfo = genDebugInfo;
        this.logBindingUpdate = logBindingUpdate;
        this.useJit = useJit;
    }
}
export class ChangeDetectorDefinition {
    constructor(id, strategy, variableNames, bindingRecords, eventRecords, directiveRecords, genConfig) {
        this.id = id;
        this.strategy = strategy;
        this.variableNames = variableNames;
        this.bindingRecords = bindingRecords;
        this.eventRecords = eventRecords;
        this.directiveRecords = directiveRecords;
        this.genConfig = genConfig;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vaW50ZXJmYWNlcy50cyJdLCJuYW1lcyI6WyJEZWJ1Z0NvbnRleHQiLCJEZWJ1Z0NvbnRleHQuY29uc3RydWN0b3IiLCJDaGFuZ2VEZXRlY3RvckdlbkNvbmZpZyIsIkNoYW5nZURldGVjdG9yR2VuQ29uZmlnLmNvbnN0cnVjdG9yIiwiQ2hhbmdlRGV0ZWN0b3JEZWZpbml0aW9uIiwiQ2hhbmdlRGV0ZWN0b3JEZWZpbml0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFNQTtJQUNFQSxZQUFtQkEsT0FBWUEsRUFBU0EsZ0JBQXFCQSxFQUFTQSxTQUFjQSxFQUNqRUEsT0FBWUEsRUFBU0EsTUFBV0EsRUFBU0EsUUFBYUE7UUFEdERDLFlBQU9BLEdBQVBBLE9BQU9BLENBQUtBO1FBQVNBLHFCQUFnQkEsR0FBaEJBLGdCQUFnQkEsQ0FBS0E7UUFBU0EsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBS0E7UUFDakVBLFlBQU9BLEdBQVBBLE9BQU9BLENBQUtBO1FBQVNBLFdBQU1BLEdBQU5BLE1BQU1BLENBQUtBO1FBQVNBLGFBQVFBLEdBQVJBLFFBQVFBLENBQUtBO0lBQUdBLENBQUNBO0FBQy9FRCxDQUFDQTtBQW9DRDtJQUNFRSxZQUFtQkEsWUFBcUJBLEVBQVNBLGdCQUF5QkEsRUFDdkRBLE1BQWVBO1FBRGZDLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFTQTtRQUFTQSxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQVNBO1FBQ3ZEQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUFTQTtJQUFHQSxDQUFDQTtBQUN4Q0QsQ0FBQ0E7QUFFRDtJQUNFRSxZQUFtQkEsRUFBVUEsRUFBU0EsUUFBaUNBLEVBQ3BEQSxhQUF1QkEsRUFBU0EsY0FBK0JBLEVBQy9EQSxZQUE2QkEsRUFBU0EsZ0JBQW1DQSxFQUN6RUEsU0FBa0NBO1FBSGxDQyxPQUFFQSxHQUFGQSxFQUFFQSxDQUFRQTtRQUFTQSxhQUFRQSxHQUFSQSxRQUFRQSxDQUF5QkE7UUFDcERBLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFVQTtRQUFTQSxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBaUJBO1FBQy9EQSxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBaUJBO1FBQVNBLHFCQUFnQkEsR0FBaEJBLGdCQUFnQkEsQ0FBbUJBO1FBQ3pFQSxjQUFTQSxHQUFUQSxTQUFTQSxDQUF5QkE7SUFBR0EsQ0FBQ0E7QUFDM0RELENBQUNBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvY2Fsc30gZnJvbSAnLi9wYXJzZXIvbG9jYWxzJztcbmltcG9ydCB7QmluZGluZ1RhcmdldCwgQmluZGluZ1JlY29yZH0gZnJvbSAnLi9iaW5kaW5nX3JlY29yZCc7XG5pbXBvcnQge0RpcmVjdGl2ZVJlY29yZCwgRGlyZWN0aXZlSW5kZXh9IGZyb20gJy4vZGlyZWN0aXZlX3JlY29yZCc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICcuL2NoYW5nZV9kZXRlY3Rvcl9yZWYnO1xuXG5leHBvcnQgY2xhc3MgRGVidWdDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IGFueSwgcHVibGljIGNvbXBvbmVudEVsZW1lbnQ6IGFueSwgcHVibGljIGRpcmVjdGl2ZTogYW55LFxuICAgICAgICAgICAgICBwdWJsaWMgY29udGV4dDogYW55LCBwdWJsaWMgbG9jYWxzOiBhbnksIHB1YmxpYyBpbmplY3RvcjogYW55KSB7fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5nZURpc3BhdGNoZXIge1xuICBnZXREZWJ1Z0NvbnRleHQoYXBwRWxlbWVudDogYW55LCBlbGVtZW50SW5kZXg6IG51bWJlciwgZGlyZWN0aXZlSW5kZXg6IG51bWJlcik6IERlYnVnQ29udGV4dDtcbiAgbm90aWZ5T25CaW5kaW5nKGJpbmRpbmdUYXJnZXQ6IEJpbmRpbmdUYXJnZXQsIHZhbHVlOiBhbnkpOiB2b2lkO1xuICBsb2dCaW5kaW5nVXBkYXRlKGJpbmRpbmdUYXJnZXQ6IEJpbmRpbmdUYXJnZXQsIHZhbHVlOiBhbnkpOiB2b2lkO1xuICBub3RpZnlBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQ7XG4gIG5vdGlmeUFmdGVyVmlld0NoZWNrZWQoKTogdm9pZDtcbiAgbm90aWZ5T25EZXN0cm95KCk6IHZvaWQ7XG4gIGdldERldGVjdG9yRm9yKGRpcmVjdGl2ZUluZGV4OiBEaXJlY3RpdmVJbmRleCk6IENoYW5nZURldGVjdG9yO1xuICBnZXREaXJlY3RpdmVGb3IoZGlyZWN0aXZlSW5kZXg6IERpcmVjdGl2ZUluZGV4KTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5nZURldGVjdG9yIHtcbiAgcGFyZW50OiBDaGFuZ2VEZXRlY3RvcjtcbiAgbW9kZTogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3k7XG4gIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWY7XG5cbiAgYWRkQ29udGVudENoaWxkKGNkOiBDaGFuZ2VEZXRlY3Rvcik6IHZvaWQ7XG4gIGFkZFZpZXdDaGlsZChjZDogQ2hhbmdlRGV0ZWN0b3IpOiB2b2lkO1xuICByZW1vdmVDb250ZW50Q2hpbGQoY2Q6IENoYW5nZURldGVjdG9yKTogdm9pZDtcbiAgcmVtb3ZlVmlld0NoaWxkKGNkOiBDaGFuZ2VEZXRlY3Rvcik6IHZvaWQ7XG4gIHJlbW92ZSgpOiB2b2lkO1xuICBoeWRyYXRlKGNvbnRleHQ6IGFueSwgbG9jYWxzOiBMb2NhbHMsIGRpc3BhdGNoZXI6IENoYW5nZURpc3BhdGNoZXIsIHBpcGVzOiBhbnkpOiB2b2lkO1xuICBkZWh5ZHJhdGUoKTogdm9pZDtcbiAgbWFya1BhdGhUb1Jvb3RBc0NoZWNrT25jZSgpOiB2b2lkO1xuXG4gIGhhbmRsZUV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBlbEluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpO1xuICBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQ7XG4gIGNoZWNrTm9DaGFuZ2VzKCk6IHZvaWQ7XG4gIGRlc3Ryb3lSZWN1cnNpdmUoKTogdm9pZDtcbiAgbWFya0FzQ2hlY2tPbmNlKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvdG9DaGFuZ2VEZXRlY3RvciB7IGluc3RhbnRpYXRlKCk6IENoYW5nZURldGVjdG9yOyB9XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VEZXRlY3RvckdlbkNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBnZW5EZWJ1Z0luZm86IGJvb2xlYW4sIHB1YmxpYyBsb2dCaW5kaW5nVXBkYXRlOiBib29sZWFuLFxuICAgICAgICAgICAgICBwdWJsaWMgdXNlSml0OiBib29sZWFuKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2hhbmdlRGV0ZWN0b3JEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIGlkOiBzdHJpbmcsIHB1YmxpYyBzdHJhdGVneTogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgICAgICAgICAgIHB1YmxpYyB2YXJpYWJsZU5hbWVzOiBzdHJpbmdbXSwgcHVibGljIGJpbmRpbmdSZWNvcmRzOiBCaW5kaW5nUmVjb3JkW10sXG4gICAgICAgICAgICAgIHB1YmxpYyBldmVudFJlY29yZHM6IEJpbmRpbmdSZWNvcmRbXSwgcHVibGljIGRpcmVjdGl2ZVJlY29yZHM6IERpcmVjdGl2ZVJlY29yZFtdLFxuICAgICAgICAgICAgICBwdWJsaWMgZ2VuQ29uZmlnOiBDaGFuZ2VEZXRlY3RvckdlbkNvbmZpZykge31cbn1cbiJdfQ==