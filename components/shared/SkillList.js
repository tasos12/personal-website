import { motion } from "framer-motion";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";

export default function SkillList(props) {
    return (
        <Paper
            sx={{
                background: "rgb(30, 30, 80)",
                paddingTop: "5px",
                color: "white",
                display: "flex",
                flexDirection: "column",
            }}

            elevation={4}
        >
            <List disablePadding={true}>
                <ListSubheader
                    sx={{
                        background: "rgb(30, 30, 80)",
                        color: "white",
                        fontWeight: "700",
                    }}
                >
                    {props.title}
                </ListSubheader>
                {props.skills.map((skill, index) => {
                    return (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ListItem>
                                <ListItemIcon sx={{ justifyContent: "center" }}>
                                    {skill.icon}
                                </ListItemIcon>
                                <ListItemText>{skill.name}</ListItemText>
                            </ListItem>
                            <Divider />
                        </motion.div>
                    );
                })}
            </List>
        </Paper>
    );
}
