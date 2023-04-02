import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

export default function Title(props) {
    const [text, setText] = useState();
    useEffect(() => setText(props.text), [props.text]);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Typography
                component={"h2"}
                className="header1-text"
                sx={{
                    whiteSpace: "nowrap",
                    fontWeight: 700,
                    color: "white",
                }}
            >
                {text}
            </Typography>
        </div>
    );
}
