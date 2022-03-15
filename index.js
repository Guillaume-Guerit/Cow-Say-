import {userInfo} from "./information.js";

import {say} from "cowsay";

console.log(say({ text: `Hi, my name is ${userInfo.userName} and i'm on ${userInfo.campus}` }));