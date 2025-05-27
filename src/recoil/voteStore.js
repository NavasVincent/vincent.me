import { atom, useRecoilState } from "recoil";
import { useEffect } from "react";

// Atoms to store separated votes
export const voteState = atom({
  key: "voteState",
  default: {
    boys: [],
    girls: [],
  },
});