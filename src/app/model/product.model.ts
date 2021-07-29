export class Product {
    constructor(
        public codeModele: string,
        public codeLibelle: string,
        public stock: number,
        public prixTTC: number,
        public prixSold: number,
        public couleur: string,
        public matiere: string
    ) { }
}
