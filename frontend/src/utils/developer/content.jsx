import { DeveloperDeals } from "../../components/developer/deals/DeveloperDeals";
import { DeveloperDashboard } from "../../components/developer/dashboard/DeveloperDashboard";
import { DeveloperContacts } from "../../components/developer/contacts/DeveloperContacts";
import { Messanger } from "../../components/public/messanger/Messanger";
import { DeveloperObjects } from "../../components/developer/objects/DeveloperObjects";

export const content = {
    "dashboard": <DeveloperDashboard />,
    "deals": <DeveloperDeals />,
    "contacts": <DeveloperContacts />,
    "objects": <DeveloperObjects />,
    "messanger": <Messanger />,
}