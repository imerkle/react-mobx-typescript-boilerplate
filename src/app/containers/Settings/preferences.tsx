import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Typography } from "@material-ui/core";
import * as React from "react";
import { observer, inject } from "mobx-react";
import { LOCALES } from "app/constants";
import stylesg from "app/style.css"
import cx from "classnames"

@inject("rootStore")
@observer
class Preferences extends React.Component<any, any>{

    handleChange = event => {
        const { appStore } = this.props.rootStore;
        appStore.setLocale(event.target.value);
    };
    render(){
        const { appStore } = this.props.rootStore;
        return (
            <>
                <Typography className={cx(stylesg.h4)} variant="h4">Change your Language</Typography>
                <FormControl>
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        value={appStore.locale}
                        onChange={this.handleChange}
                        >
                    {Object.keys(LOCALES).map((o,i)=>{
                        return (
                            <FormControlLabel key={i} value={o} control={<Radio />} label={LOCALES[o].displayName} />
                        )
                    })}
                    </RadioGroup>
                </FormControl>
            </>
        );
    }
}
export default Preferences;