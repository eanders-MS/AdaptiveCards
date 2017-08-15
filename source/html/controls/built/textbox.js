"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = require("./utils");
var inputcontrol_1 = require("./inputcontrol");
var EditBox = (function () {
    function EditBox() {
    }
    EditBox.prototype.changed = function () {
        if (this.onChange) {
            this.onChange();
        }
    };
    return EditBox;
}());
var SingleLineEditBox = (function (_super) {
    __extends(SingleLineEditBox, _super);
    function SingleLineEditBox() {
        var _this = _super.call(this) || this;
        _this._inputElement = document.createElement("input");
        _this._inputElement.className = "ms-ctrl ms-ctrl-textbox";
        _this._inputElement.type = "text";
        _this._inputElement.oninput = function (e) {
            _this.changed();
        };
        return _this;
    }
    Object.defineProperty(SingleLineEditBox.prototype, "element", {
        get: function () {
            return this._inputElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleLineEditBox.prototype, "placeholder", {
        set: function (value) {
            this._inputElement.placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleLineEditBox.prototype, "lineCount", {
        set: function (value) {
            // lineCount can't be set on a SingleLineEditBox
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleLineEditBox.prototype, "maxLength", {
        set: function (value) {
            if (this._inputElement.maxLength != value) {
                this._inputElement.maxLength = value;
                this.value = this.value.substr(0, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleLineEditBox.prototype, "value", {
        get: function () {
            return this._inputElement.value;
        },
        set: function (newValue) {
            this._inputElement.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    return SingleLineEditBox;
}(EditBox));
var MultilineEditBox = (function (_super) {
    __extends(MultilineEditBox, _super);
    function MultilineEditBox() {
        var _this = _super.call(this) || this;
        _this._textareaElement = document.createElement("textarea");
        _this._textareaElement.className = "ms-ctrl ms-ctrl-textbox ms-ctrl-textbox-multiline";
        _this._textareaElement.oninput = function (e) {
            _this.changed();
        };
        return _this;
    }
    Object.defineProperty(MultilineEditBox.prototype, "element", {
        get: function () {
            return this._textareaElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineEditBox.prototype, "placeholder", {
        set: function (value) {
            this._textareaElement.placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineEditBox.prototype, "lineCount", {
        set: function (value) {
            this._textareaElement.rows = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineEditBox.prototype, "maxLength", {
        set: function (value) {
            if (this._textareaElement.maxLength != value) {
                this._textareaElement.maxLength = value;
                this.value = this.value.substr(0, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultilineEditBox.prototype, "value", {
        get: function () {
            return this._textareaElement.value;
        },
        set: function (newValue) {
            this._textareaElement.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    return MultilineEditBox;
}(EditBox));
var TextBox = (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isMultiline = false;
        _this._lineCount = 3;
        return _this;
    }
    TextBox.prototype.editBoxChanged = function () {
        if (this.onChange) {
            this.onChange(this);
        }
    };
    TextBox.prototype.recreateEditBox = function () {
        var _this = this;
        var currentValue = null;
        if (this._editBox) {
            currentValue = this._editBox.value;
        }
        else {
            currentValue = this.rootElement.innerText;
        }
        if (this._isMultiline) {
            this._editBox = new MultilineEditBox();
        }
        else {
            this._editBox = new SingleLineEditBox();
        }
        if (currentValue) {
            this._editBox.value = currentValue;
        }
        this._editBox.lineCount = this._lineCount;
        this._editBox.maxLength = this._maxLength;
        this._editBox.placeholder = this._placeholder;
        this._editBox.onChange = function () { _this.editBoxChanged(); };
        this.rootElement.innerHTML = "";
        this.rootElement.appendChild(this._editBox.element);
    };
    Object.defineProperty(TextBox.prototype, "editBox", {
        get: function () {
            if (!this._editBox) {
                this.recreateEditBox();
            }
            return this._editBox;
        },
        enumerable: true,
        configurable: true
    });
    TextBox.prototype.attach = function (rootElement) {
        _super.prototype.attach.call(this, rootElement);
        this._isMultiline = Utils.getAttributeValueAsBool(rootElement, "ismultiline", false);
        this._lineCount = Utils.getAttributeValueAsInt(rootElement, "lines", 3);
        this._maxLength = Utils.getAttributeValueAsInt(rootElement, "maxlength", 50000);
        this._placeholder = Utils.getAttributeValueAsString(rootElement, "placeholder", null);
        this.recreateEditBox();
    };
    Object.defineProperty(TextBox.prototype, "value", {
        get: function () {
            return this.editBox.value;
        },
        set: function (newValue) {
            this.editBox.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBox.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (value) {
            this._placeholder = value;
            this.editBox.placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBox.prototype, "isMultiline", {
        get: function () {
            return this._isMultiline;
        },
        set: function (value) {
            if (this._isMultiline != value) {
                this._isMultiline = value;
                this.recreateEditBox();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBox.prototype, "lineCount", {
        get: function () {
            return this._lineCount;
        },
        set: function (value) {
            if (value > 0) {
                this._lineCount = value;
                this.editBox.lineCount = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBox.prototype, "maxLength", {
        get: function () {
            return this._maxLength;
        },
        set: function (value) {
            if (value > 0) {
                this._maxLength = value;
                this.editBox.maxLength = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return TextBox;
}(inputcontrol_1.InputControl));
exports.TextBox = TextBox;
//# sourceMappingURL=textbox.js.map