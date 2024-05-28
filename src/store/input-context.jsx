import { createContext } from "react";

export const InpContext = createContext({
    investment : 500,
    roi : 1,
    tp : 1,
    type : "sip",
    changeOfInp : true,
    updateInvType: () => {},
    inputUpdate: () => {}
});