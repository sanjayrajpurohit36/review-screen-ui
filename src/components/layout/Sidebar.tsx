import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

type ActiveTabType = "regular" | "column";

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState<ActiveTabType>("regular");
    const [data, setData] = useState<any>({});

    useEffect(() => {
        fetch("/sections.json")
            .then((res) => res.json())
            .then((res) => {
                console.log("res =>", res?.data);
                setData(res?.data || {});
            });
    }, []);

    return (
        <div className="h-[calc(100vh-3rem)] overflow-y-auto w-[30vw] bg-[#192027] p-4 text-white">
            <div className="font-semibold">Fields</div>
            <div className="mt-2 flex">
                <div
                    className={
                        activeTab === "regular"
                            ? "w-32 cursor-pointer font-semibold text-blue-600 border-b-2 text-center border-blue-600"
                            : "w-32 text-center cursor-pointer font-semibold"
                    }
                    onClick={() => setActiveTab("regular")}
                >
                    Regular Fields
                </div>
                <div
                    className={
                        activeTab === "column"
                            ? "w-32 cursor-pointer font-semibold text-blue-600 border-b-2 text-center border-blue-600"
                            : "w-32 text-center cursor-pointer font-semibold"
                    }
                    onClick={() => setActiveTab("column")}
                >
                    Column Fields
                </div>
            </div>
            <div>
                {data?.sections?.[0]?.children?.map((obj: any) => {
                    return (
                        <div
                            className="w-full p-1 bg-[#273139] my-2 rounded flex"
                            key={obj.id}
                        >
                            <div className="p-1 w-[16%] flex justify-top align-right">
                                <div className="h-[fit-content] align-center p-1 font-semibold bg-[#563037] border-l-4 border-red-600 rounded">
                                    {obj.label.split(" ")[0][0] +
                                        obj.label.split(" ")[1][0]}
                                </div>
                            </div>
                            <div className="flex flex-col p-2 w-full">
                                <div className="font-semibold text-sm">
                                    {obj.label}
                                </div>
                                <div className="text-xs mt-2">
                                    {obj.content?.value}
                                </div>
                            </div>
                            <div className="flex items-center p-2 pb-5 space-x-4 w-[20%]">
                                <input type="checkbox" />
                                <Icon icon="mage:dots" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
