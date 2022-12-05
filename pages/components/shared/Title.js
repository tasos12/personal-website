import Typography from "@mui/material/Typography";

export default function Title(props) {
    const title = {
        whiteSpace: "nowrap",
        width: "100%",
        display: "flex",
        alignItems: "center",
        fontWeight: 700,
        fontSize: "3rem",
        color: "rgb(20, 120, 255)"
    };

    return (
        <Typography sx={title}>
            <Typography
                sx={{
                    mr: "10px",
                    width: "100%",
                    borderBottom: "2px solid rgb(20, 120, 255, 0.3)",
                }}
            />
            {props.text}
            <Typography
                sx={{
                    ml: "10px",
                    width: "100%",
                    borderBottom: "2px solid rgb(20, 120, 255, 0.3)",
                }}
            />
        </Typography>
    );
}
