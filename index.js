'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var InputComponent = /** @class */ (function (_super) {
    __extends(InputComponent, _super);
    function InputComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    InputComponent.prototype.onChange = function (e) {
        this.props.onChange && this.props.onChange({
            name: this.props.name,
            value: e.currentTarget.value
        });
    };
    InputComponent.prototype.render = function () {
        var value = this.props.value;
        var name = this.props.name;
        return (React__default.createElement("fieldset", null,
            React__default.createElement("label", null,
                this.props.label,
                React__default.createElement("input", { name: name, value: value, onChange: this.onChange }))));
    };
    return InputComponent;
}(React__default.Component));

var FormComp = /** @class */ (function (_super) {
    __extends(FormComp, _super);
    function FormComp(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { FormData: _this.props.FormData };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    FormComp.prototype.componentDidMount = function () {
        this.setState({
            FormData: this.props.FormData
        });
    };
    FormComp.prototype.handleInputChange = function (inputData) {
        var tmpFormData = __assign({}, this.state.FormData);
        tmpFormData[inputData.name] = inputData.value;
        this.setState({
            FormData: tmpFormData
        });
    };
    FormComp.prototype.handleSubmit = function (e) {
        e.preventDefault();
    };
    FormComp.prototype.recursiveClone = function (children) {
        var _this = this;
        return children.map(function (child, index) {
            var value;
            if (React.isValidElement(child)) {
                if (child.props &&
                    _this.state.FormData &&
                    _this.state.FormData[child.props.name]) {
                    value = _this.state.FormData[child.props.name];
                    return React.cloneElement(child, {
                        onChange: _this.handleInputChange.bind(_this),
                        key: index,
                        value: value
                    });
                }
                else if (!child.props || !Object.keys(child.props).length) {
                    return React.createElement(React.Fragment, { key: index }, child);
                }
                else {
                    if (!Array.isArray(child.props.children)) {
                        return React.cloneElement(child, { key: index }, _this.recursiveClone([child.props.children]));
                    }
                    return React.cloneElement(child, { key: index }, _this.recursiveClone(child.props.children));
                }
            }
            else {
                return React.createElement(React.Fragment, { key: index }, child);
            }
        });
    };
    FormComp.prototype.render = function () {
        var newChildren = this.recursiveClone(this.props.children);
        return (React.createElement("form", { style: { direction: "ltr" }, onSubmit: this.handleSubmit }, newChildren));
    };
    return FormComp;
}(React.Component));

var CathodInput = /** @class */ (function (_super) {
    __extends(CathodInput, _super);
    function CathodInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CathodInput.prototype.render = function () {
        return (React.createElement(InputComponent, { label: this.props.label, name: this.props.name, value: this.props.value, onChange: this.props.onChange }));
    };
    return CathodInput;
}(React.Component));
var CathodForm = /** @class */ (function (_super) {
    __extends(CathodForm, _super);
    function CathodForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CathodForm.prototype.render = function () {
        return (React.createElement(FormComp, { children: this.props.children, FormData: this.props.FormData }));
    };
    return CathodForm;
}(React.Component));

exports.CathodForm = CathodForm;
exports.CathodInput = CathodInput;
//# sourceMappingURL=index.js.map
