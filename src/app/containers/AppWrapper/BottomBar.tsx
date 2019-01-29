import { inject, observer } from "mobx-react";
import * as React from 'react';
import { FaDiv, Fa } from "app/components";
import { Tooltip, IconButton, Icon} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import cx from 'classnames';
import * as stylesg from "../../style.css";
import { withNamespaces } from "react-i18next";
import styles from "./style";

@(withStyles as any)(styles)
@inject("rootStore")
@observer
class BottomBar extends React.Component<any, any> {
    render() {
        const { t, classes } = this.props;
        const { appStore } = this.props.rootStore;
        return (
            <FaDiv vcenter={true} className={cx(classes.col2_bottom)}>
                <Tooltip title={t("Settings")}>
                    <Fa fa={true} onClick={appStore.toggleSettings}>
                        <IconButton>
                            <Icon className={cx(stylesg.icon)}>settings</Icon>
                        </IconButton>
                    </Fa>
                </Tooltip>                
            </FaDiv>
        )
    }
}
export default withNamespaces("settings")(BottomBar);