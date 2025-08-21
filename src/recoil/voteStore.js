import { atom } from "recoil"; 
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
// Atoms to store separated votes
export const voteState = atom({
  key: "voteState",
  default: {
    boys: [],
    girls: [],
  },
  effects_UNSTABLE: [persistAtom],
});


export const raffleWinnerState = atom({
  key: "raffleWinnerState",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});