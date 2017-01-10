﻿import {
    ProgressBase, Color, valueProperty, maxValueProperty,
    colorProperty, backgroundColorProperty, backgroundInternalProperty
} from "./progress-common";

export * from "./progress-common";

export class Progress extends ProgressBase {
    private _ios = UIProgressView.new();

    get ios(): UIProgressView {
        return this._ios;
    }

    get nativeView(): UIProgressView {
        return this._ios;
    }

    get _nativeView(): UIProgressView {
        return this._ios;
    }

    get [valueProperty.native](): number {
        return 0;
    }
    set [valueProperty.native](value: number) {
        this._ios.progress = value / this.maxValue;
    }

    get [maxValueProperty.native](): number {
        return 100;
    }
    set [maxValueProperty.native](value: number) {
        this._ios.progress = this.value / value;
    }

    get [colorProperty.native](): UIColor {
        return this._ios.progressTintColor;
    }
    set [colorProperty.native](value: Color) {
        this._ios.progressTintColor = value instanceof Color ? value.ios : value;;
    }

    get [backgroundColorProperty.native](): UIColor {
        return this._ios.trackTintColor;
    }
    set [backgroundColorProperty.native](value: Color) {
        if (value instanceof Color) {
            this._ios.trackTintColor = value.ios;
        } else {
            this._ios.trackTintColor = value;
        }
    }

    get [backgroundInternalProperty.native](): UIColor {
        return null;
    }
    set [backgroundInternalProperty.native](value: Color) {
        //
    }
}