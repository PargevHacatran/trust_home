import { icons } from "@/pages/developers/utils/icons";
import { Input } from "@/shared/Input";
import { Select } from "@/shared/Select";
import { useState } from "react";

interface IContactsListTopBar {
    contactsCount: number;
}

const optionsList = [
    {
        text: "Менеджеры",
        value: "manager"
    },
    {
        text: "Риелторы",
        value: "realtor",
    },
    {
        text: "Покупатели",
        value: "customer"
    }
]

export const ContactsListTopBar = ({ contactsCount }:IContactsListTopBar) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [currentContactsType, setCurrentContactsType] = useState<string>(optionsList[0].text);
    
    const conjugationsConatctCountPrefix = (contactsCount:number) => {
        const divisionRemainder = contactsCount % 10;

        if ((contactsCount - divisionRemainder) === 10) {
            return "Контаков"
        } 

        switch (divisionRemainder) {
            case 1:
                return "Контакт";
            case 2:
            case 3:
            case 4:
                return "Контакта"
            default: 
                return "Контактов"
        }
    }

    return (
        <div className="flex justify-between items-center">
            <div>
                <p className="text-[24px] font-bold">{ contactsCount } { conjugationsConatctCountPrefix(contactsCount) }</p>
            </div>
            <div className="flex gap-x-[20px]">
                <div>
                    <Input
                        name="search"
                        iconPosition="left"
                        inputIcon={icons.search}
                        iconClassName="relative w-[20px] h-[20px]"
                        areaClassName="text-[18px] text-[#0F1015] placeholder:text-[#6B6E75] outline-none flex-1"
                        className="w-[300px] flex items-center gap-x-[20px] py-[10px] px-[20px] rounded-[20px] border-1 border-[#E0E3E8]"
                        placeholder="Искать контакт..."
                        value={searchValue}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                    />
                </div>
                <div className="group">
                    <Select 
                        selectClassName="w-[220px] flex h-full items-center gap-x-[20px] py-[10px] px-[20px] border-1 border-[#E0E3E8] text-[18px] text-[#0F1015] outline-none appearance-none rounded-[20px] select"
                        optionClassName="text-[18px] text-[#6B6E75] hover:bg-gray-100 py-2 px-4"
                        optionsList={optionsList}
                        onChangeOptions={(e: React.ChangeEvent<HTMLSelectElement>) => setCurrentContactsType(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}