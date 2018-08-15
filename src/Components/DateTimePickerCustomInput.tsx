import React from "react";

type Props = {
    id: string;
    onClick: () => void;
    value: string;
}

type State = {

}

export default class DateTimePickerCustomInput extends React.Component<Props, State> {
    public render() {
        return (
            <button id={this.props.id} className="ui labeled icon button fluid" onClick={this.props.onClick}>
                <i className="icon calendar" />
                {this.props.value}
            </button>
        )
    }
}