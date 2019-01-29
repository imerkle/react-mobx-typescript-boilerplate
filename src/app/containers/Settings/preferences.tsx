import { FormGroup, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Typography, Switch } from "@material-ui/core";
import * as React from "react";
import { observer, inject } from "mobx-react";
import { LOCALES } from "app/constants";
import stylesg from "app/style.css"
import cx from "classnames"
import {Trans, withNamespaces} from "react-i18next";

@(withNamespaces as any)("settings")
@inject("rootStore")
@observer
class Preferences extends React.Component<any, any>{

    handleChange = event => {
        const { appStore } = this.props.rootStore;
        appStore.setLocale(event.target.value);
    };
    render(){
        const { t } = this.props;
        const { appStore } = this.props.rootStore;
        return (
            <>
                <Typography className={cx(stylesg.h4)} variant="h4"><Trans>Change Language</Trans></Typography>
                <FormControl>
                    <RadioGroup
                        value={appStore.locale}
                        onChange={this.handleChange}
                        >
                    {Object.keys(LOCALES).map((o,i)=>{
                        return (
                            <FormControlLabel key={i} value={o} control={<Radio color="primary" />} label={LOCALES[o].displayName} />
                        )
                    })}
                    </RadioGroup>   
                </FormControl>
                <Typography className={cx(stylesg.h4)} variant="h4"><Trans>Change Theme</Trans></Typography>
                <FormGroup>
                    <FormControlLabel
                        control={
                        <Switch
                            color="primary"
                            checked={!!appStore.theme}
                                onChange={() => { appStore.setTheme(+!appStore.theme) }}
                            />
                        }
                        label={appStore.theme == 0 ? t("Dark Theme") : t("Light Theme")}
                        />                 
                </FormGroup>
            </>
        );
    }
}
export default Preferences;