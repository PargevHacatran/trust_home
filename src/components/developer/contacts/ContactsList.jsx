import { ContactsListTopBar } from "./ContactsListTopBar"
import { ContactsListItem } from "./ContactsListItem"
import { TableHeaderRow } from "@/widgets/public/TableHeaderRow"

const contactsList = [
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "manager" },
    { name: "Семенов Максим", email: "semenov96@gmail.com", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "realtor" },
    { name: "Павлова Екатерина", email: "@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "realtor" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "developer" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "manager" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "manager" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "developer" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "realtor" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "realtor" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "realtor" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "manager" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "manager" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "developer" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "manager" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "realtor" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "realtor" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "realtor" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "manager" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "realtor" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "realtor" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "manager" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "realtor" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "manager" },
    { name: "Петрова Алина", email: "alinapetrova00@mail.ru", phoneNumber: "+7 (918) 222 12 34", company: "Avocode", role: "manager" },
]

export const ContactsList = () => {
    const contactsColumnsList = ["Телефон", "Компания"];

    return (
        <div className="p-[30px] bg-[#fff] rounded-[20px] flex-1 mt-[50px] max-h-[800px] overflow-x-scroll">
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
                                role={item.role}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}