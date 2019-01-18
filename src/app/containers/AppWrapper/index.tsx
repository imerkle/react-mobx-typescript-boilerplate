import { inject, observer } from "mobx-react";
import * as React from "react";

// Avatar
import { Fab, Icon, List, ListItem, ListItemText, Snackbar, Tooltip } from "@material-ui/core";
import { FaDiv, Div, Link } from "app/components";

import Settings from 'app/containers/Settings';
import cx from "classnames";
import { toJS } from "mobx";
import { Scrollbars } from "react-custom-scrollbars";
import * as stylesg from "../..//style.css";
import BottomBar from './BottomBar';
import * as styles from "./style.css";

@inject("rootStore")
@observer
class AppWrapper extends React.Component<any, any> {
    public render() {
        const { children } = this.props;
        const { appStore } = this.props.rootStore;
        return (
            <>
                <Snackbar message={appStore.snackmsg} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    open={appStore.snackopen}
                    onClose={() => { appStore.snackOpen(false); }}
                />
                <div className={cx(styles.root, stylesg._100vh)}>

                    <FaDiv fc className={cx(styles.col1)}>
                        <Link onClick={() => {
                        }} clearfix={true} to="/">
                            <FaDiv className={cx(styles.fabdiv)}>
                                <Div className={cx(styles.nib, { [styles.selected]: true })}></Div>
                                <Fab className={cx(styles.fab, { [styles.selected]: true })} color="primary" ><Icon>home</Icon></Fab>
                            </FaDiv>
                        </Link>
                    </FaDiv>

                    <FaDiv className={cx(styles.col2)}>
                        <List style={{ padding: 0, width: "100%" }} >
                            <Link clearfix={true} to="/">
                                <ListItem button={true}>
                                    <ListItemText primary="Home" secondary="News, Changelog" />
                                </ListItem>
                            </Link>
                        </List>
                    </FaDiv>
                    <BottomBar />
                    <Scrollbars className={cx(styles.col3)}>
                        <div style={{ padding: "10px 30px" }}>{children}</div>
                    </Scrollbars>
                </div>
                {appStore.settingsOpen && <Settings />}
            </>
        );
    }
}
export default AppWrapper;
