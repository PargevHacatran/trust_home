import AdminDashboard from "../../components/AdminPanel/AdminDashboard";
import DeveloperTable from "../../components/AdminPanel/DeveloperTable";
import ChecksDashboard from "../../components/AdminPanel/ChecksDashboard";
import { Messanger } from "../../components/public/messanger/Messanger"

export const content = {
    "dashboard": <AdminDashboard />,
    "developers": <DeveloperTable />,
    "documents": <ChecksDashboard />,
    "messanger": <Messanger />
};