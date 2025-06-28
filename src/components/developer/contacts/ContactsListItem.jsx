import { CheckBox } from "@/shared/CheckBox";
import { userMenuIcons } from "../../../../public/svg/userMenuAssets";
import { Button } from "@/shared/Button";
import { icons } from "@/pages/developers/utils/icons";

export const ContactsListItem = ({ name, email, phoneNumber, company, role }) => {
    return (
        <div
            className="flex justify-between py-[20px] border-1 border-b-0 border-r-0 border-l-0 border-[#D3D5DA]"
        >
            <div className="flex gap-x-[20px] items-center flex-1">
                <CheckBox 
                    className="w-[20px] h-[20px] border-1 border-[#D3D5DA] rounded-[5px]"
                />
        
                <div className="flex gap-x-[15px]">
                    <div className="relative w-[45px] h-[45px]">
                        { userMenuIcons[role] ?? userMenuIcons["others"]  }
                    </div>
                    <div className="flex flex-col justify-center py-[5px]">
                        <p className="text-[14px] font-bold">{ name }</p>
                        <p className="text-[12px] text-[#6B6E75]">{ email }</p>
                    </div>
                </div>
            </div>
        
            <div className="flex items-center justify-center w-[200px]">
                <p>{ phoneNumber }</p>
            </div>
        
            <div className="flex items-center justify-center w-[200px]">
                <p>{ company }</p>                                
            </div>
            
            <div className="flex items-center justify-center w-[75px]">
                <Button
                    className=""
                    onClick={() => {}}
                >
                    { icons.actionDots }
                </Button>
            </div>
                                        
        </div>
    );
}