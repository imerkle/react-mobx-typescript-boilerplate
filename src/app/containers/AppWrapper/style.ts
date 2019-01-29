const styles = theme => ({
    "root": {
        "display": "grid",
        "gridTemplateColumns": "75px 300px auto",
        "gridTemplateRows": "auto 50px",
        "background": theme.app.primary_bg,
    },
    "col1": {
        "padding": "5px 10px 5px 0px",
        "background": theme.app.primary_bg_darkest,
        "transition": ".15s linear all",
        "gridArea": "1/1/3/2"
    },
    "col2": {
        "background": theme.app.primary_bg_dark,
        "gridArea": "1/2/2/3"
    },
    "col2_bottom": {
        "gridArea": "2/2/3/3",
        "background": theme.app.primary_bg_darker,
    },
    "col3": {
        "gridArea": "1/3/3/4",
        "padding": "10px 30px"
    },
    "fabdiv": {
        "margin": "10px 0"
    },
    "selected": { },
    "fab": {
        "borderRadius": "50%",
        "transition": ".15s linear all",
        "width": "50px",
        "height": "50px"
    },
    "fab_hover": {
        "borderRadius": "12px"
    },
    "fab_selected": {
        "background": "#424448"
    },
    "nib": {
        "margin": "5px 10px 5px 0px",
        "padding": "3px",
        "background": "#fbfbfb",
        "borderRadius": "0 12px 12px 0",
        "opacity": 0
    },
    "nib_selected": {
        "opacity": 1
    },
});

export default styles;