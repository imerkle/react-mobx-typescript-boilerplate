const styles = theme => ({
    "root": {
        "position": "absolute" as "absolute",
        "top": "0",
        "left": "0",
        "height": "100%",
        "width": "100%",
        "background": theme.app.primary_bg,
        "display": "grid",
        "gridTemplateColumns": "30% 50% 20%",
        "zIndex": 10,
    },
    "col1": {
        "gridArea": "1/1/2/2",
        "backgroundColor": theme.app.primary_bg_darker,
        "justifyContent": "right",
        "paddingTop": "50px",
    },
    "col2": {
        "gridArea": "1/2/1/3",
        "paddingTop": "50px",
    },
    "col3": {
        "gridArea": "1/3/1/4",
        "paddingTop": "50px",
    },
    "listitem": {
        "borderRadius": "4px",
        "marginBottom": "8px"
    }
});

export default styles;
