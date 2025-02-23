import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    forwardRef,
    HostListener,
    Injector,
    Input,
    NgModule,
    Output
} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {JigsawRadioModule} from "./radios";
import {GroupOptionValue} from "../list-and-tile/group-common";
import {ArrayCollection} from "../../common/core/data/array-collection";
import {AbstractJigsawComponent, WingsTheme} from "../../common/common";
import {CommonUtils} from "../../common/core/utils/common-utils";
import {RequireMarkForCheck} from "../../common/decorator/mark-for-check";

@WingsTheme('radios-lite.scss')
@Component({
    selector: 'jigsaw-radios-lite, j-radios-lite',
    template: `
        <j-radios [(value)]="value" (valueChange)="radioChange($event)" [trackItemBy]="trackItemBy">
            <j-radio-option *ngFor="let item of data; trackBy: _$trackByFn" [value]="item" [disabled]="item?.disabled || disabled">
                {{item && item[labelField] ? item[labelField] : item}}
            </j-radio-option>
        </j-radios>`,
    host: {
        '[attr.data-theme]': 'theme',
        '[class.jigsaw-radios-lite-host]': 'true',
        '[class.jigsaw-radios-lite-error]': '!valid'
    },
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => JigsawRadiosLite), multi: true },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class JigsawRadiosLite extends AbstractJigsawComponent implements ControlValueAccessor {
    constructor(
        private _cdr: ChangeDetectorRef,
        // @RequireMarkForCheck 需要用到，勿删
        private _injector: Injector) {
        super()
    }

    /**
     * @NoMarkForCheckRequired
     */
    @Input()
    public valid: boolean = true;

    /**
     * @NoMarkForCheckRequired
     */
    @Input()
    public disabled: boolean = false;

    /**
     * @NoMarkForCheckRequired
     */
    @Input()
    public data: ArrayCollection<GroupOptionValue> | GroupOptionValue[];

    private _value: any;

    /**
     * value的实际类型是 `string | RadiosGroupValue`，由于一些兼容性原因，保留any作为类型定义
     */
    @RequireMarkForCheck()
    @Input()
    public get value(): any {
        return this._value;
    }

    public set value(newValue: any) {
        if (this._value === newValue) {
            return;
        }
        this._value = newValue;
        this._propagateChange(this._value);
    }

    private _trackItemBy: string | string[];

    /**
     * @NoMarkForCheckRequired
     */
    @Input()
    public get trackItemBy(): string | string[] {
        if (!this._trackItemBy && this.data && typeof this.data[0] !== 'string') {
            this._trackItemBy = this.labelField;
        }
        return this._trackItemBy;
    }

    public set trackItemBy(value: string | string[]) {
        if (!value) {
            return;
        }
        this._trackItemBy = typeof value === 'string' ? value.split(/\s*,\s*/g) : value;
    }

    /**
     * @NoMarkForCheckRequired
     */
    @Input()
    public labelField: string = 'label';

    @Output()
    public valueChange: EventEmitter<any> = new EventEmitter<any>();

    public get _$trackByFn() {
        return CommonUtils.toTrackByFunction(this._trackItemBy);
    };

    radioChange(item) {
        this.valueChange.emit(item);
        this._propagateChange(item);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    private _propagateChange: any = () => {
    };
    private _onTouched: any = () => {
    };

    public writeValue(value: any): void {
        this._cdr.markForCheck();
    }

    public registerOnChange(fn: any): void {
        this._propagateChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    @HostListener('click')
    onClickTrigger(): void {
        this._onTouched();
    }
}

@NgModule({
    imports: [CommonModule, JigsawRadioModule],
    declarations: [JigsawRadiosLite],
    exports: [JigsawRadiosLite]
})
export class JigsawRadioLiteModule {
}
