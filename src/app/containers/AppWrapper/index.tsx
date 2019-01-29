import { inject, observer } from "mobx-react";
import * as React from "react";

import { Fab, Icon, List, ListItem, ListItemText, Snackbar } from "@material-ui/core";
import { FaDiv, Div, Link } from "app/components";

import Settings from 'app/containers/Settings';
import cx from "classnames";
import { Scrollbars } from "react-custom-scrollbars";
import * as stylesg from "app/style.css";
import BottomBar from './BottomBar';
import { withNamespaces } from "react-i18next";
import styles from './style';
import { withStyles } from '@material-ui/styles';

@(withStyles as any)(styles)
@(withNamespaces as any)("app")
@inject("rootStore")
@observer
class AppWrapper extends React.Component<any, any> {
    public render() {
        const { t, children, classes } = this.props;
        const { appStore } = this.props.rootStore;
        return (
            <>
                <Snackbar message={appStore.snackmsg} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    open={appStore.snackopen}
                    onClose={() => { appStore.snackOpen(false); }}
                />
                <div className={cx(classes.root, stylesg._100vh, { [stylesg.light]: appStore.theme == 1})}>

                    <FaDiv c className={cx(classes.col1)}>
                        <Link onClick={() => {
                        }} clearfix={true} to="/">
                            <FaDiv className={cx(classes.fabdiv)}>
                                <Div className={cx(classes.nib, { [classes.selected]: true })}></Div>
                                <Fab className={cx(classes.fab, { [classes.selected]: true })} color="primary" ><Icon>home</Icon></Fab>
                            </FaDiv>
                        </Link>
                    </FaDiv>

                    <FaDiv className={cx(classes.col2)}>
                        <List style={{ padding: 0, width: "100%" }} >
                            <Link clearfix={true} to="/">
                                <ListItem button={true}>
                                    <ListItemText primary={t("Home")} secondary={t("News, Changelog")} />
                                </ListItem>
                            </Link>
                        </List>
                    </FaDiv>
                    <BottomBar />
                    <Scrollbars className={cx(classes.col3)}>
                        <div style={{ padding: "10px 30px" }}>{children}</div>
                    </Scrollbars>
                </div>
                {appStore.settingsOpen && <Settings />}
            </>
        );
    }
}
export default AppWrapper;
