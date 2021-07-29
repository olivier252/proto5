export class InfoLine {
    constructor(public libelle: string,
        public data: string,
        public format: string,
        public lines: InfoLine[],
        public open: boolean) {
    }
}
