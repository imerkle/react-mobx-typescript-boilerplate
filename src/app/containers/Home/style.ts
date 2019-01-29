const styles = theme => ({
    "cover": {
        "backgroundSize": "cover",
        "height": "200px",
        "position": "relative" as "relative",
        "borderRadius": "8px"
    },
    "bottomShadow": {
        "position": "absolute" as "absolute",
        "top": "0",
        "left": "0",
        "width": "100%",
        "background": "rgba(0,0,0,.5)",
        "height": "100%",
        "mask": "linear-gradient(180deg,transparent,#000 95%)"
    },
    "bottomTitle": {
        "position": "absolute" as "absolute",
        "padding": "40px",
        "fontSize": "24px",
        "zIndex": 2,
        "bottom": "0"
    }
});

export default styles;