import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

export default function Title(props) {
    const [text, setText] = useState();
    useEffect(() => setText(props.text), [props.text]);

    return (
        <Typography
            component={"div"}
            className="header1-text"
            sx={{
                whiteSpace: "nowrap",
                width: "100%",
                display: "flex",
                alignItems: "center",
                fontWeight: 700,
                color: "rgb(20, 100, 255)",
            }}
        >
            <Typography
                component={"span"}
                sx={{
                    mr: "10px",
                    width: "90%",
                    borderBottom: "2px solid rgb(20, 120, 255, 0.3)",
                }}
            />
            {text}
            <Typography
                component={"span"}
                sx={{
                    ml: "10px",
                    width: "90%",
                    borderBottom: "2px solid rgb(20, 120, 255, 0.3)",
                }}
            />
        </Typography>
    );
}
