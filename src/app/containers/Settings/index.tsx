// @flow
import { List, ListItem, ListItemText,Icon, IconButton, Tooltip } from "@material-ui/core";
import { FaDiv } from "app/components";
import cx from "classnames";
import { inject, observer } from "mobx-react";
import * as React from "react";
import * as stylesg from "app/style.css";
import { Scrollbars } from "react-custom-scrollbars";
import Preferences from "./preferences";
import { withNamespaces } from "react-i18next";
import { withStyles } from "@material-ui/styles";
import styles from "./style";

@(withStyles as any)(styles)
@(withNamespaces as any)("settings")
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
        const { t } = this.props;
        const settingMenu = [
            t("menu:My Account"),
            t("menu:My Preferences"),
        ];        
        const { appStore } = this.props.rootStore;
        const { selectedIndex } = this.state;
        const { classes } = this.props;
        return (
            <div className={cx(classes.root)}>
                <FaDiv className={cx(classes.col1)}>
                    <List>
                        {settingMenu.map((o, i)=>{
                            return (
                                <ListItem
                                    className={cx(classes.listitem)}
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
                <Scrollbars className={cx(classes.col2)}>
                    <div style={{ padding: "65px 25px 60px 25px"}}>
                        {selectedIndex == 1 && <Preferences />}
                    </div>
                </Scrollbars>
                <div className={cx(classes.col3)}>
                    <Tooltip title={t("tooltip:Close Settings")}>
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
