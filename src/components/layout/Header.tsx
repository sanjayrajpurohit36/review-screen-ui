import { Icon } from "@iconify/react";

const Header = () => {
    return (
        <div>
            <div className="flex bg-[#192027] w-full text-white px-4 h-12 items-center justify-between">
                <div>Review Screen</div>
                <div className="flex items-center space-x-4">
                    <Icon
                        fontSize={20}
                        icon="mage:dots"
                        className="cursor-pointer"
                    />
                    <Icon
                        fontSize={20}
                        icon="material-symbols:help"
                        className="cursor-pointer"
                    />
                    <Icon
                        fontSize={20}
                        icon="mdi:bell"
                        className="cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
