const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        height: theme.navBarHeight
    },
    tabIndicator: {
        backgroundColor: PRIMARY_RED.default
    },
    tabBar: {
      top: '80px'
    },
    rightAlign: {
       marginLeft: 'auto',
    }
}));

export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.tabBar}>
                <Tabs
                    variant=""
                    classes={{indicator: classes.tabIndicator}}
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab {...PRIMARY_NAVIGATION.MY_LIST} {...associatedProps(0)} />
                    <LinkTab {...PRIMARY_NAVIGATION.MY_REQUESTS} {...associatedProps(1)} />
                    <LinkTab {...PRIMARY_NAVIGATION.REPORT} {...associatedProps(2)} className={classes.rightAlign}/>
                </Tabs>
            </AppBar>
        </div>
    );
}