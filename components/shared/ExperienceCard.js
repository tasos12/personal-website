import Typography from "@mui/material/Typography";
import LocationOn from "@mui/icons-material/LocationOn";
import ComputerSharp from "@mui/icons-material/ComputerSharp";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ExperienceCard(props) {
    const [expanded, setExpanded] = useState(false);
    const [hover, setHover] = useState(false);

    const titleContainerStyle = {
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
        padding: "20px",
        background: "rgb(10, 20, 50)",
        boxShadow: "0px 0px 8px 0px " + (hover ? "white" : "rgb(10, 80, 200)"),
        borderRadius: "10px",
        cursor: "pointer",
    };
    const companyContainerStyle = {
        display: "flex",
        flex: 0.9,
        alignItems: "center",
    };
    const dateContainerStyle = {
        display: "flex",
        alignItems: "center",
    };
    const contentContainerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px",
        padding: "10px 20px",
        background: "rgb(10, 20, 100)",
        borderRadius: "10px",
        transition: "transition: all 500ms ease;",
    };
    const contentTextStyle = {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    };
    const imageContainerStyle = {
        display: "flex",
        justifyContent: "center",
        position: "relative",
    };
    const imageStyle = {
        objectFit: "contain",
        width: "100%",
        maxWidth: "160px",
    };
    const chipContainerStyle = {
        marginTop: 8,
        marginBottom: 8,
    };
    const chipStyle = {
        margin: "2px",
        background: "black",
        color: "white",
    };

    return (
        <div>
            <div
                className="responsive-flex"
                style={titleContainerStyle}
                onClick={() => setExpanded(!expanded)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div style={companyContainerStyle}>
                    <ComputerSharp
                        className="header2-text"
                        style={{ margin: "6px" }}
                    />
                    <Typography className="header3-text" component={"h2"}>
                        {props.positionTitle + " @ " + props.companyName}
                    </Typography>
                </div>
                <div style={dateContainerStyle}>
                    <CalendarMonth
                        className="header2-text"
                        style={{ margin: "6px" }}
                    />
                    <Typography className="header3-text" component={"h2"}>
                        {props.datePeriod}
                    </Typography>
                </div>
                <div style={dateContainerStyle}>
                    {expanded ? (
                        <motion.div animate={{ rotate: 360 }}>
                            <Remove />
                        </motion.div>
                    ) : (
                        <motion.div>
                            <Add />
                        </motion.div>
                    )}
                </div>
            </div>
            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        className="responsive-flex-reverse"
                        style={contentContainerStyle}
                        initial={{ y: -50, opacity: 0, scale: 0.2 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        exit={{ y: -50, opacity: 0, scale: 0.2 }}
                    >
                        <div style={contentTextStyle}>
                            {props.companyLink != "" && (
                                <div style={{ margin: 4 }}>
                                    <LocationOn />
                                    <Link
                                        style={{
                                            marginLeft: 5,
                                            fontWeight: 600,
                                        }}
                                        href={props.companyLink}
                                    >
                                        {props.companyLinkShort}
                                    </Link>
                                </div>
                            )}
                            <div style={{ margin: 12 }}>
                                {props.positionDescription}
                            </div>
                            <div style={chipContainerStyle}>
                                {props.technologies.map((tech) => (
                                    <Chip
                                        key={tech}
                                        style={chipStyle}
                                        label={tech}
                                    />
                                ))}
                            </div>
                        </div>
                        {props.companyLogo != "" && (
                            <div style={imageContainerStyle}>
                                <img
                                    alt="companyLogo"
                                    src={props.companyLogo}
                                    style={imageStyle}
                                />
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
