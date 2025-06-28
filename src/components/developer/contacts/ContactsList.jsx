import { ContactsListTopBar } from "./ContactsListTopBar"
import { ContactsListItem } from "./ContactsListItem"
import { TableHeaderRow } from "./TableHeaderRow";

import styles from "../../../styles/developer.module.css";

const contactsList = [
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Семенов Максим", email: "semenov96@gmail.com", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Павлова Екатерина", email: "@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode" },
]

export const ContactsList = () => {
    const contactsColumnsList = ["Телефон", "Компания"];

    return (
        <div className={styles.contacts_list_container}>
            <ContactsListTopBar
                contactsCount={contactsList.length}
            />
            
            <div className="mt-[30px]">
                <TableHeaderRow
                    mainColumnName="Имя"
                    columnsList={contactsColumnsList}
                />

                <div>
                    {
                        contactsList.map((item, index) => (
                            <ContactsListItem 
                                key={index}    
                                name={item.name}
                                email={item.email}
                                phoneNumber={item.phoneNumber}
                                company={item.company}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}