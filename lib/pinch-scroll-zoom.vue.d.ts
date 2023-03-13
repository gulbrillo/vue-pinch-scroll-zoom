import { Vue } from "nuxt-property-decorator";
import { PinchScrollZoomEmitData, PinchScrollZoomSetData } from "./types";
export default class PinchScrollZoom extends Vue {
    private contentWidth;
    private contentHeight;
    private width;
    private height;
    private originX;
    private originY;
    private translateX;
    private translateY;
    private scale;
    private throttleDelay;
    private within;
    private minScale;
    private maxScale;
    private wheelVelocity;
    private draggable;
    private touch1;
    private touch2;
    private currentScale;
    private startScale;
    private axisX;
    private axisY;
    private throttleDoDrag;
    private stopScaling;
    private zoomIn;
    private zoomOut;
    private stopDragListener;
    private startDragListener;
    private draggingListener;
    private scalingListener;
    get componentStyle(): object;
    get componentClass(): object;
    get containerStyle(): object;
    scaleChanged(val: number): void;
    translateXchanged(val: number): void;
    translateYchanged(val: number): void;
    originXchanged(val: number): void;
    originYchanged(val: number): void;
    withinChanged(): void;
    setData(data: PinchScrollZoomSetData): void;
    getEmitData(): PinchScrollZoomEmitData;
    stopDrag(): void;
    startDrag(touchEvent: any): void;
    doDrag(touchEvent: any): void;
    doStopScalingEvent(): void;
    doDragEvent(touchEvent: any): void;
    getBoundingTouchClientX(touch: any): number;
    getBoundingTouchClientY(touch: any): number;
    submitDrag(): void;
    getDistance(x1: number, y1: number, x2: number, y2: number): number;
    doScale(touchEvent: any): void;
    submitScale(scale: number): void;
    doWheelScale(event: any): void;
    checkWithin(): void;
    mounted(): void;
    beforeDestroy(): void;
}
