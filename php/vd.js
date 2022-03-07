import React from 'react'
import {
    Checkbox
} from 'antd';
import {
    CheckboxChangeEvent
} from 'antd/lib/checkbox';
import {
    CheckboxValueType
} from 'antd/lib/checkbox/Group';
import "./style.css"
export interface CheckboxGroupProps {
    className ? : string
    checkallLabel: string
    listOptions: string[]
    defaultCheckedList ? : string[]
}
interface ICheckList {
    checkall: boolean,
        checkedList: CheckboxValueType[]
}
export interface CheckboxGroupRef {
    getValue(): ICheckList
}
interface CheckboxGroupComponent extends React.ForwardRefRenderFunction < CheckboxGroupRef, CheckboxGroupProps > {}
const CheckboxGroup: CheckboxGroupComponent = (props, ref) => {
    const {
        className,
        listOptions = [],
        checkallLabel,
        defaultCheckedList = []
    } = props
    const [checkedList, setCheckedList] = React.useState < CheckboxValueType[] > (defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);
    React.useImperativeHandle(ref, () => ({
        getValue: () => ({
            checkedList: checkedList,
            checkall: checkAll
        })
    }));
    const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < listOptions.length);
        setCheckAll(list.length === listOptions.length);
    };
    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        setCheckedList(e.target.checked ? listOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };
    return ( <
        div className = {
            className
        } >
        <
        div className = "checboxGroup" >
        <
        Checkbox indeterminate = {
            indeterminate
        }
        onChange = {
            onCheckAllChange
        }
        checked = {
            checkAll
        } > {
            checkallLabel
        } <
        /Checkbox> <
        br / >
        <
        Checkbox.Group options = {
            listOptions
        }
        value = {
            checkedList
        }
        onChange = {
            onChange
        }
        /> <
        /div> <
        /div>
    )
}
export default React.forwardRef(CheckboxGroup)