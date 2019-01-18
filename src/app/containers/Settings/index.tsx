// @flow
import { Checkbox, FormGroup, FormControlLabel, Divider, List, ListItem, ListItemText,Icon, IconButton, Paper, Typography, Tooltip } from "@material-ui/core";
import { AButton, Div, Fa, FaDiv, TextField } from "app/components";
import cx from "classnames";
import { inject, observer } from "mobx-react";
import * as React from "react";
import * as stylesg from "../../style.css";
import * as styles from "./style.css";
import { Scrollbars } from "react-custom-scrollbars";

const settingMenu = [
    "My Account",
];

@inject("rootStore")
@observer
class Settings extends React.Component<any, any> {
    public state = {
        selectedIndex: 0,
    };

    handleListItemClick = (e, i) => {
        this.setState({selectedIndex: i})
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };    
    public render() {
        const { appStore } = this.props.rootStore;
        const { selectedIndex } = this.state;
        return (
            <div className={cx(styles.root)}>
                <FaDiv className={cx(styles.col1)}>
                    <List>
                        {settingMenu.map((o, i)=>{
                            return (
                                <ListItem
                                    className={cx(styles.listitem)}
                                    button
                                    selected={selectedIndex === i}
                                    onClick={event => this.handleListItemClick(event, i)}
                                    key={i}
                                >
                                    <ListItemText primary={o} />
                                </ListItem>
                            )
                        })}
                    </List>
                </FaDiv>
                <Scrollbars className={cx(styles.col2)}>
                    <div style={{ padding: "65px 25px 60px 25px"}}>
                    </div>
                </Scrollbars>
                <div className={cx(styles.col3)}>
                    <Tooltip title={"Close Settings"} aria-label={"Close Settings"}>
                        <IconButton className={cx(stylesg.icon_border)} onClick={appStore.toggleSettings}>
                                <Icon className={cx(stylesg.icon)} style={{fontSize: 24,}}>close</Icon>
                        </IconButton>
                    </Tooltip>
                </div>
        </div>
        );
    }
}
export default Settings;
