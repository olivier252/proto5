import { InfoLine } from "./infoLine.model";

export class InfoModele {
    constructor(
        public infoLines: InfoLine[],
        public photos: string[]) {
    }
}