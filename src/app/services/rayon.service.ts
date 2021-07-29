import { Injectable } from '@angular/core';
import { InfoModele } from '../model/infoModele.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class RayonService {

  productItem: Product = new Product("GEL-KAYANO™ 27 PLATINUM black", "6656464654", -9, 12, 177, "lmkml", "black");

  items: Product[] = [
    {
      codeModele: "123",
      codeLibelle: "GEL-KAYANO™ 27 PLATINUM black",
      stock: 5,
      prixTTC: 545.2,
      prixSold: 140,
      couleur: "black",
      matiere: "laine de yack"
    },
    {
      codeModele: "789",
      codeLibelle: "MIZUNO Shadow Wave 3",
      stock: 32,
      prixTTC: 98,
      prixSold: 87,
      couleur: "blue",
      matiere: "shetland"
    }
  ];

  itemsMenu: any[] = [
    { index: 0, utilRoute: "zone", matIcon: "archive" },
    { index: 1, utilRoute: "price", matIcon: "euro" },
    { index: 2, utilRoute: "price-sold", matIcon: "payment" },
    { index: 3, utilRoute: "picture", matIcon: "add_a_photo" }
  ];

  infoModele: InfoModele = {
    photos: ["./assets/img/vte1.jpg", "./assets/img/vte2.jpg", "./assets/img/vte3.jpg"],
    infoLines:
      [
        {
          libelle: "Code modèle",
          data: "DRKJ4654",
          format: "",
          lines: null,
          open: false,
        },
        {
          libelle: "Matière",
          data: "Cuir",
          format: "",
          lines: null,
          open: false,
        },
        {
          libelle: "Couleur",
          data: "Rouge",
          format: "",
          lines: null,
          open: false,
        },
        {
          libelle: "Bonnet",
          data: "D",
          format: "",
          lines: null,
          open: false,
        },
        {
          libelle: "Libellé Taille",
          data: "L",
          format: "",
          lines: null,
          open: false,
        },
        {
          libelle: "Stock",
          data: "10",
          format: "",
          lines: [
            {
              libelle: "Total",
              data: "20",
              format: "a",
              lines: null,
              open: false,
            },
            {
              libelle: "XS",
              data: "0",
              format: "",
              lines: null,
              open: false,
            },
            {
              libelle: "S",
              data: "2",
              format: "",
              lines: null,
              open: false,
            },
            {
              libelle: "M",
              data: "5",
              format: "",
              lines: null,
              open: false,
            },
            {
              libelle: "L",
              data: "10",
              format: "a",
              lines: null,
              open: false,
            },
            {
              libelle: "XXL",
              data: "4",
              format: "",
              lines: null,
              open: false,
            },
            {
              libelle: "3XL",
              data: "-1",
              format: "",
              lines: null,
              open: false,
            }],
          open: false,
        },
        {
          libelle: "Prix d'achat",
          data: "11.38 €",
          format: "",
          lines: [
            {
              libelle: "XS",
              data: "10.00 €",
              format: "",
              lines: null,
              open: false,
            },
            {
              libelle: "S",
              data: "10.00 €",
              format: "",
              lines: null,
              open: false,
            },
            {
              libelle: "M",
              data: "11.38 €",
              format: "",
              lines: null,
              open: false,
            },
            {
              libelle: "L",
              data: "11.38 €",
              format: "a",
              lines: null,
              open: false,
            },
            {
              libelle: "XXL",
              data: "12.00 €",
              format: "",
              lines: null,
              open: false,
            },
            {
              libelle: "3XL",
              data: "12.00 €",
              format: "12.00 €",
              lines: null,
              open: false,
            }],
          open: false,
        },
        {
          libelle: "Prix de vente",
          data: "29.90 €",
          format: "",
          lines: null,
          open: false,
        },
        {
          libelle: "Libelle modèle",
          data: "Vert de gris dans l'arc ciel",
          format: "",
          lines: null,
          open: false,
        },
        {
          libelle: "Libelle criètre",
          data: "Cuir 100% Rouge D",
          format: "",
          lines: null,
          open: false,
        },
        {
          libelle: "Zone",
          data: "E01Z025G588",
          format: "",
          lines: null,
          open: false,
        },
        {
          libelle: "Marque",
          data: "Super-marque",
          format: "",
          lines: null,
          open: false,
        },
        {
          libelle: "Classification",
          data: "1154 Haut tête",
          format: "",
          lines: null,
          open: false,
        },
        {
          libelle: "Pays origne",
          data: "France",
          format: "",
          lines: null,
          open: false,
        },
        {
          libelle: "Poid",
          data: "3,28 Kg",
          format: "",
          lines: null,
          open: false,
        },
        {
          libelle: "Volume",
          data: "0.3 m²",
          format: "c",
          lines: [
            {
              libelle: "Longeur",
              data: "300",
              format: "",
              lines: null,
              open: false,
            },
            {
              libelle: "Largeur",
              data: "300",
              format: "",
              lines: null,
              open: false,
            },
            {
              libelle: "Hauteur",
              data: "300",
              format: "",
              lines: null,
              open: false,
            }],
          open: false,
        },
        {
          libelle: "Taille",
          data: "L 30 cm x l 30 cm x h 30 cm",
          format: "",
          lines: null,
          open: false,
        },
      ]
  };

  constructor() { }
}
